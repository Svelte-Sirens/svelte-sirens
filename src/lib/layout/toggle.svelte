<script>
	function toggle(e) {
		const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
		const element = document.documentElement;
		const toggleTheme = () =>
			e.target.checked
				? element.setAttribute('data-theme', 'light')
				: element.setAttribute('data-theme', 'dark');
		toggleSwitch.addEventListener('change', toggleTheme, false);
	}
	// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

	// function switchTheme(e) {
	// 	if (e.target.checked) {
	// 		document.documentElement.setAttribute('data-theme', 'dark');
	// 	} else {
	// 		document.documentElement.setAttribute('data-theme', 'light');
	// 	}
	// }

	// toggleSwitch.addEventListener('change', switchTheme, false);
</script>

<div class="theme-switch-wrapper">
	<img class="slider-img" src="images/sun.png" alt="light-mode" style="margin-right: 0.5em;" />
	<label class="theme-switch" for="checkbox">
		<input type="checkbox" id="checkbox" />
		<div class="slider round outline-none shadow-outline" tabindex="0" role="slider" />
	</label>
	<img class="slider-img" src="images/moon.png" alt="dark-mode" style="margin-left: 0.5em;" />
</div>

<style lang="scss">
	.slider-img {
		width: 25px;
		height: 25px;
	}

	.theme-switch-wrapper {
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.theme-switch {
		display: inline-block;
		height: 25px;
		position: relative;
		width: 60px;
	}

	.theme-switch input {
		display: none;
	}

	.slider {
		background-color: #e8f4f4;
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: all 0.4s linear;
		box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
	}

	.slider:before {
		background-color: #e5a91e;
		bottom: 3px;
		content: '';
		height: 18px;
		width: 18px;
		left: 4px;
		position: absolute;
		transition: all 0.4s linear;
	}

	.slider:hover {
		background-color: #68d2c8;
	}

	input:checked + .slider {
		background-color: #1b2a49;
	}

	input:checked + .slider:hover {
		background-color: #68d2c8;
	}

	input:checked + .slider:before {
		transform: translateX(30px);
	}

	input:hover + .slider:before {
		transform: translateX(15px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
