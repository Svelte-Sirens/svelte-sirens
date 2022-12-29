import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const bubbles: Writable<boolean> = localStorageStore('bubbles', true);
