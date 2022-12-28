export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('outclick', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
