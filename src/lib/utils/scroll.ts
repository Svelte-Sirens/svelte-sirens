export function scroll(node) {
	const handleScroll = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('scroll-container'));
		}
	};
	document.addEventListener('click', handleScroll, true);
	return {
		destroy() {
			document.removeEventListener('scroll', handleScroll, true);
		}
	};
}
