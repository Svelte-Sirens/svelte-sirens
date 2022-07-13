export interface Speaker {
	name: string;
	handle: string;
	biography?: string;
	handleUrl: string;
	picture: string;
}

export interface Event {
	slug: string;
	title: string;
	date: number;
	eventUrl: string;
	speakers: Speaker[];
}

export interface Stream {
	slug: string;
	title: string;
	date: number;
	streamUrl: string;
	speakers: Speaker[];
	guests: Speaker[];
}
