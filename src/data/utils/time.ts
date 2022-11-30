interface ItemWithDate {
	date: number;
}

export const getUpcoming = <T extends ItemWithDate>(items: T[]) => {
	return dateSort<T>(items.filter((item) => item.date > Date.now()));
};

export const getLatest = <T extends ItemWithDate>(items: T[]) => {
	return dateSort<T>(items.filter((item) => item.date < Date.now()));
};

export const dateSort = <T extends ItemWithDate>(items: T[]) => {
	return items.sort((a, b) => b.date - a.date);
};
