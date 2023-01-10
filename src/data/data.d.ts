export interface Speaker {
	name: string;
	slug: string;
	handle: string;
	biography?: string;
	handleUrl: string;
	picture: string;
}
export interface Guest {
	name: string;
	slug: string;
	handle: string;
	biography?: string;
	handleUrl: string;
	picture: string;
}

export interface Event {
	slug: string;
	title: string;
	date: number;
	id?: string;
	embed: string;
	eventUrl: string;
	speakers?: Speaker[];
	thumbnail?: string;
	guests?: Guest[];
}

export interface Stream {
	slug: string;
	title: string;
	date: number;
	embed: string;
	streamUrl: string;
	speakers: Speaker[];
	guests: Speaker[];
}
