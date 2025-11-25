import type { PageServerLoad } from './$types';
import { speakers } from '$data/speakers';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

function isSpeakerKey(key: string): key is keyof typeof speakers {
	return key in speakers;
}

export const load: PageServerLoad = ({ params }) => {
	const speaker = isSpeakerKey(params.slug) ? speakers[params.slug] : null;
	if (!speaker) throw error(404, `Speaker "${params.slug}" not found`);

	return {
		speaker,
		biography: speaker.biography ? marked(speaker.biography) : null,
	};
};
