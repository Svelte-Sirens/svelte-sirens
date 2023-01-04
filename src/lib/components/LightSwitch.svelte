<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { storeLightSwitch, storePrefersDarkScheme } from '$stores';
	import { createEventDispatcher, beforeUpdate } from 'svelte';
	// Event Handler
	const dispatch = createEventDispatcher();
	// Stores
	// Types
	type OnClickEvent = MouseEvent & { currentTarget: EventTarget & HTMLDivElement };
	type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass(): void {
		const elemHtmlClassList = document.documentElement.classList;
		// Update HTML element class
		$storeLightSwitch ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
	}

	// Set the users system prefers for light/dark mode
	function setPrefersDarkScheme(): void {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		storePrefersDarkScheme.set(prefersDark);
		// If $storeLightSwitch not set, match the OS preference
		if ($storeLightSwitch === undefined) {
			$storeLightSwitch = $storePrefersDarkScheme;
		}
	}

	// Sets the color scheme based on localStorage or OS preference in
	// the <head> of the document.
	function setColorScheme() {
		if (
			localStorage.getItem('storeLightSwitch') === 'true' ||
			(!('storeLightSwitch' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
	// On Click Handler
	function onClick(event: OnClickEvent): void {
		// Set the Store Value
		storeLightSwitch.set(($storeLightSwitch = !$storeLightSwitch));
		// Apply to <html> Element
		setElemHtmlClass();
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
		setColorScheme();
		// Determine OS Preference
		setPrefersDarkScheme();
	});
</script>

<svelte:head>
	{@html `<script>${setColorScheme.toString()} setColorScheme();</script>`}
</svelte:head>
<!-- prettier-ignore -->
<SlideToggle
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
>

</SlideToggle>
