import type { Picture } from './assets/assets';

export interface Speaker {
	name: string;
	slug: string;
	handle: string;
	biography?: string;
	handleUrl: string;
	picture: Picture;
}
export interface Guest {
	name: string;
	slug: string;
	handle: string;
	biography?: string;
	handleUrl: string;
	picture: Picture;
}

export interface Event {
	slug: string;
	title: string;
	date: number;
	id?: string;
	embed: string;
	eventUrl: string;
	speakers?: Speaker[];
	thumbnail: Picture;
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
