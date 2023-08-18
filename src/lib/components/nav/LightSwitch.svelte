<script lang="ts">
	import { storeLightSwitch, storePrefersDarkScheme } from '$stores';
	import { createEventDispatcher, beforeUpdate } from 'svelte';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import Cookie from 'js-cookie';

	// Event Handler
	const dispatch = createEventDispatcher();
	// Stores
	// Types
	type OnClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLDivElement };
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// check the store for dark or light mode
	$: checkTheme = () => ($storeLightSwitch ? 'dark' : 'light');

	// Toggles a 'dark' class on the <html> element
	function update(): void {
		document.documentElement.dataset.theme = checkTheme();
		if (checkTheme() === 'light') document.documentElement.classList.remove('dark');
		else document.documentElement.classList.add(checkTheme());

		Cookie.set('theme', checkTheme());
	}

	// Set the users system prefers for light/dark mode
	function setPrefersDarkScheme(): void {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		storePrefersDarkScheme.set(prefersDark);
	}

	// Sets the color scheme based on the cookie or OS preference in
	// the <head> of the document.
	function init() {
		if (!['dark', 'light'].includes(Cookie.get('theme'))) {
			Cookie.set('theme', $storePrefersDarkScheme ? 'dark' : 'light');
			$storeLightSwitch = $storePrefersDarkScheme;
		}

		$storeLightSwitch = Cookie.get('theme') == 'dark';

		update();
	}

	// On Click Handler
	function onClick(event: OnClickEvent): void {
		// Set the Store Value
		storeLightSwitch.set(($storeLightSwitch = !$storeLightSwitch));
		// Apply to <html> Element
		update();
		/** @event {{ event }} click - Fires when the component is clicked.  */
		dispatch('click', event);
	}
	// A11y Input Handlers
	function onKeyDown(event: OnKeyDownEvent): void {
		// Enter/Space triggers selecton event
		if (['Enter', 'Space'].includes(event.code)) {
			event.preventDefault();
			event.currentTarget.click();
		}
		/** @event {{ event }} keydown - Fires when the component has keydown event.  */
		dispatch('keydown', event);
	}

	// Lifecycle
	beforeUpdate(() => {
		// Determine OS Preference
		setPrefersDarkScheme();

		// Init theme
		init();
	});
</script>

<!-- prettier-ignore -->
<SlideToggle
	name="light switch"
	size="sm"
	bind:checked={$storeLightSwitch}
	on:click={onClick}
	on:keydown={onKeyDown}
	on:keyup
	on:keypress
	role="switch"
	aria-label="Light Switch"
	aria-checked={$storeLightSwitch}
	title="Toggle {$storeLightSwitch ? 'Light' : 'Dark'} Mode"
	tabindex="0"
	class="relative top-4 right-2"
	>
	<p class="text-xs text-slate-700 dark:text-slate-200 absolute top-[-24px] left-1">
		{$storeLightSwitch ? 'DARK' : 'LIGHT'}
	</p>
</SlideToggle>
