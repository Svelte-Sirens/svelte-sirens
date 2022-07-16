export interface Speaker {
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
  embed: string;
	eventUrl: string;
	speakers: Speaker[];
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