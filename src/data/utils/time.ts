interface ItemWithDate {
    date: number;
}

export const getUpcoming = <T extends ItemWithDate>(items: T[]) => {
    return items.filter((item) => item.date > Date.now());
}

export const getLatest = <T extends ItemWithDate>(items: T[]) => {
    return items.filter((item) => item.date < Date.now());
}