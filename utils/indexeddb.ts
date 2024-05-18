import { type IAlcorhythm } from "~/types/IAlcorhythm";

const dbName = 'AlcorhythmDB'
const tableName = 'Alcorhythm';
const version = 1;

/**
 * putを利用するため、keyに対してcreateOrUpdateが実行される
 * @param alcorhythm
 * @returns id
 */
export function createRecord(alcorhythm: IAlcorhythm): void {
    // TODO: なんかうまくいかんわ。。。
    const request = indexedDB.open(dbName, version);

    request.onerror = () => {
        console.log('IndexedDB can not open for create');
    }
    request.onsuccess = (event) => {
        const db = request.result;
        const transaction = db.transaction(tableName, 'readwrite');
        const objectStore = transaction.objectStore(tableName);
        const objectStoreRequest: IDBRequest = objectStore.add(alcorhythm);
        objectStoreRequest.onsuccess = () => {
            console.log(objectStoreRequest.result);
            key = objectStoreRequest.result;
            // TODO: keyが生成されたら返却したい。awaitとかで処理待ちする？
        }
    }
}

/** 新規作成or更新 */
export function updateOrCreate(obj: object): void {
    const request = indexedDB.open(dbName, version);
    request.onerror = () => {
        alert('IndexedDB can not open for updateOrCreate');
    }
    request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction(tableName, 'readwrite');
        const objectStore = transaction.objectStore(tableName);
        objectStore.put(obj);
    }
}

/**
 * @param key
 * @returns alcorhythm
 */
export function selectRecord(key: number): IAlcorhythm {

    // TODO: デバッグデータを一律で返却
    return debugData_1;
}

/**
 * @param key
 * @returns alcorhythm[]
 */
export function selectAllRecord(): IAlcorhythm[] {

    // TODO: デバッグデータを一律で返却
    return [debugData_1, debugData_1];
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