import { speakers } from '$data/speakers';

export function load() {
	return {
		founders: [speakers['brittney-postma'], speakers['ghost'], speakers['steph-dietz']],
	};
}
