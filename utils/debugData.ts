import { type IAlcorhythm } from "~/types/IAlcorhythm";

const tmpLatlngList = [
    {lat: 1.0, lng: 1.0},
    {lat: 1.0, lng: 1.0},
    {lat: 1.0, lng: 1.0},
];
const tmpCountObject = {
    seveneleven: 1,
    lowson: 2,
    familymart: 3,
};
export const debugData_1: IAlcorhythm = {
    title: 'テスト title アルコリズム',
    description: 'テスト description メッセージ',
    latlng: tmpLatlngList,
    count: tmpCountObject,
    start_date: null,
    end_date: null,
};