import { type IAlcorhythm } from "~/types/IAlcorhythm";

const tmpLatlngList = [
    {lat: 1.0, lng: 1.0},
    {lat: 1.0, lng: 1.0},
    {lat: 1.0, lng: 1.0},
];
const tmpCountObject = {
    seveneleven: 0,
    lawson: 0,
    familymart: 0,
};
export const debugData_1: IAlcorhythm = {
    title: 'テスト title アルコリズム',
    description: 'テスト description メッセージ',
    latlng: tmpLatlngList,
    count: tmpCountObject,
    start_date: '2024/5/11',
    start_time: '18:48:50',
    end_date: null,
    end_time: null,
};