import { type IAlcorhythm } from "~/types/IAlcorhythm";

const tmpLatlngList = [
    { lat: 35.58362798834344, lng: 139.68490917546822 },
    { lat: 35.57372798834444, lng: 139.67480917546722 },
    { lat: 35.56382798834544, lng: 139.66470917546622 },
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