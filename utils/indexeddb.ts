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
            console.log('IndexedDB can not open for create');
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
        console.log('IndexedDB can not open for updateOrCreate');
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
            console.log('IndexedDB can not open for updateOrCreate');
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

/**
 * @param key
 * @returns alcorhythm[]
 */
export function selectAllRecord(): Promise<IAlcorhythm[]> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, version);
        request.onerror = () => {
            console.log('IndexedDB can not open for updateOrCreate');
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
              reject(getRequest.result);
            };
        }
    });
}

// 更新処理を実装する予定はない
// export function updateRecord(key: number): void {
//
// }

export function deleteRecord(key: number): void {

}

/** IndexedDB nitialize */
export function init() {
    let db: IDBDatabase;
    const dbName = 'AlcorhythmDB'
    const tableName = 'Alcorhythm';
    const version = 1;
    const request: IDBOpenDBRequest = indexedDB.open(dbName, version);
    request.onerror = (event) => {
        alert('IndexedDB can not open for init');
    }
    request.onsuccess = () => {
        db = request.result;
        db.createObjectStore(tableName, {autoIncrement: true});
        console.log('init onsuccess');
    }
}