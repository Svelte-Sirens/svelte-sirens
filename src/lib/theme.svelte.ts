import { MediaQuery } from 'svelte/reactivity';
import { browser } from '$app/environment';

const systemTheme = new MediaQuery('(prefers-color-scheme: dark)');

type SetTheme = 'system' | 'dark' | 'light';

class Theme {
	#theme = $state<SetTheme>(
		browser ? (document.documentElement.classList.contains('dark') ? 'dark' : 'light') : 'dark',
	);

	get theme() {
		return this.#theme;
	}

	set theme(value: SetTheme) {
		this.#theme = value;
	}

	public readonly runningTheme = $derived(
		this.#theme === 'system' ? (systemTheme.current ? 'dark' : 'light') : this.#theme,
	);

	watch() {
		$effect(() => {
			console.log('theme changed', this.runningTheme);
			document.cookie = `theme=${this.runningTheme}; path=/`;
			document.documentElement.classList.toggle('dark', this.runningTheme === 'dark');
			document.documentElement.classList.toggle('light', this.runningTheme === 'light');
		});
	}
}

export const theme = new Theme();
