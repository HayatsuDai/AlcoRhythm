export type IAlcorhythm = {
    title: string,
    description: string,
    latlng: latlng[],
    count: countObject,
    start_date: string | null,
    end_date: string | null,
}
export type latlng = {
    lat: double,
    lng: double,
}
export type countObject = {
    seveneleven: number,
    lowson: number,
    familymart: number,
}