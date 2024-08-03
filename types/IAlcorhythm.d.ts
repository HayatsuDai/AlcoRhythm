export type IAlcorhythm = {
    title: string,
    description: string,
    latlng: latlng[],
    count: countObject,
    start_date: string | null,
    start_time: string | null,
    end_date: string | null,
    end_time: string | null,
}
export type latlng = {
    lat: double,
    lng: double,
}
export type countObject = {
    seveneleven: number,
    lawson: number,
    familymart: number,
}