import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const bubbles: Writable<boolean> = localStorageStore('bubbles', true);

// OS Prefers Dark Scheme - TRUE: dark | FALSE: light
export const storePrefersDarkScheme = writable<boolean>(false);

// User Selected Mode - TRUE: dark | FALSE: light | undefined: use system preference
export const storeLightSwitch = writable<boolean | undefined>(undefined);
