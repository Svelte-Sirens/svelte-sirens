import type { Action } from 'svelte/action';

interface Attributes {
	'on:outclick': (event: CustomEvent<HTMLElement>) => void;
}

export const clickOutside: Action<HTMLElement, unknown, Attributes> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('outclick', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
