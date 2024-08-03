import { type IAlcorhythm } from "~/types/IAlcorhythm";

const dbName = 'AlcorhythmDB'
const tableName = 'Alcorhythm';
const version = 1;

/** データベース初期化 */
export function initDB(): void {
    const openRequest = indexedDB.open(dbName);
    openRequest.onupgradeneeded = () => {
      const db = openRequest.result;
      db.createObjectStore(tableName, { autoIncrement: true });
    }
}

/** 新規作成 */
export async function createRecord(alcorhythm: IAlcorhythm): Promise<number> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onerror = () => {
            reject();
        }
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(tableName, 'readwrite');
            const objectStore = transaction.objectStore(tableName);
            const objectStoreRequest: IDBRequest = objectStore.add(alcorhythm);
            objectStoreRequest.onsuccess = () => {
                resolve(objectStoreRequest.result);
            }
        }
    });
}

/** 新規作成or更新 */
export function updateOrCreateRecord(alcorhythm: IAlcorhythm, key: number): void {
    const request = indexedDB.open(dbName, version);
    request.onerror = () => {
        console.log('failed: update or create ');
    }
    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(tableName, 'readwrite');
        const objectStore = transaction.objectStore(tableName);
        objectStore.put(alcorhythm, key);
    }
}

/** 取得 */
export const selectRecord = async (key: number): Promise<IAlcorhythm> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onerror = () => {
            reject();
        }
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(tableName, 'readwrite');
            const objectStore = transaction.objectStore(tableName);
            const getRequest = objectStore.get(key);
            getRequest.onsuccess = () => {
              resolve(getRequest.result);
            };
            getRequest.onerror = (error: any) => {
              reject(getRequest.result);
            };
        }
    });
};

/** 全件取得 */
export function selectAllRecord(): Promise<IAlcorhythm[]> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onerror = () => {
            reject();
        }
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(tableName, 'readwrite');
            const objectStore = transaction.objectStore(tableName);
            const getRequest = objectStore.getAll();
            getRequest.onsuccess = () => {
              resolve(getRequest.result);
            };
            getRequest.onerror = (error: any) => {
                reject();
            };
        }
    });
}


/** 全件取得（AIkeyを含む） */
export function getAllRecordsWithKeys(): Promise<{ key: IDBValidKey; value: IAlcorhythm }[]> {
    return new Promise((resolve, reject) => {
        // 返却用配列
        const results: { key: IDBValidKey; value: IAlcorhythm }[] = [];

        const request = indexedDB.open(dbName, version);
        request.onerror = () => {
            reject();
        }
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(tableName, 'readwrite');
            const objectStore = transaction.objectStore(tableName);
            const cursorRequest = objectStore.openCursor();
            cursorRequest.onsuccess = (event) => {
                const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
                if (cursor) {
                    results.push({ key: cursor.key, value: cursor.value });
                    cursor.continue();
                } else {
                    resolve(results);
                }
            };
        }
    });
}

export function deleteRecord(key: number): void {
 // 今のところ実装の予定はない
}
