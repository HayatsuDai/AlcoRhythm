import { type IAlcorhythm } from "~/types/IAlcorhythm";

const tmpLatlngList = [
    { lat: 0, lng: 0 },
];
const tmpCountObject = {
    seveneleven: 0,
    lawson: 0,
    familymart: 0,
};
export const initAlcorhythmData: IAlcorhythm = {
    title: '',
    description: '',
    latlng: tmpLatlngList,
    count: tmpCountObject,
    start_date: null,
    start_time: null,
    end_date: null,
    end_time: null,
};
