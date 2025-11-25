import type { PageServerLoad } from './$types';
import { speakers } from '$data/speakers';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { Speaker } from '$data/data';

export const load: PageServerLoad = ({ params }) => {
	const speaker = speakers[params.slug] as Speaker | undefined;

	if (!speaker) throw error(404, `Speaker ${params.slug} not found`);

	return {
		speaker,
		biography: speaker.biography ? marked(speaker.biography) : undefined,
	};
};
