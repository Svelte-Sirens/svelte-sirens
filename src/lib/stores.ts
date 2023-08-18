import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';

export const bubbles = localStorageStore('bubbles', true);

// OS Prefers Dark Scheme - TRUE: dark | FALSE: light
export const storePrefersDarkScheme = writable<boolean>(false);

// User Selected Mode - TRUE: dark | FALSE: light | undefined: use system preference
export const storeLightSwitch = localStorageStore<boolean | undefined>(
	'storeLightSwitch',
	undefined
);
