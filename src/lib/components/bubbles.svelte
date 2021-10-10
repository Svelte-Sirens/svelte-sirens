<div id="background-wrap">
	<div class="bubble x1" />
	<div class="bubble x2" />
	<div class="bubble x3" />
	<div class="bubble x4" />
	<div class="bubble x5" />
	<div class="bubble x6" />
	<div class="bubble x7" />
	<div class="bubble x8" />
	<div class="bubble x9" />
	<div class="bubble x10" />

	<div class="img-container">
		<img src="images/bg.png" alt="Svelte Sirens" />
	</div>
</div>

<style>
	.img-container {
		display: grid;
		place-items: center;
		place-content: center;
		height: 100%;
	}
	img {
		width: 100%;
		filter: drop-shadow(0px 10px 20px #213253);
	}
	/* https://codepen.io/Mark_Bowley/pen/mEtqj */
	#background-wrap {
		bottom: 0;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1;
	}
	/* KEYFRAMES */
	@-webkit-keyframes animateBubble {
		0% {
			margin-top: 1000px;
		}
		100% {
			margin-top: -100%;
		}
	}
	@-moz-keyframes animateBubble {
		0% {
			margin-top: 1000px;
		}
		100% {
			margin-top: -100%;
		}
	}
	@keyframes animateBubble {
		0% {
			margin-top: 1000px;
		}
		100% {
			margin-top: -100%;
		}
	}
	@-webkit-keyframes sideWays {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: 50px;
		}
	}
	@-moz-keyframes sideWays {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: 50px;
		}
	}
	@keyframes sideWays {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: 50px;
		}
	}
	/* ANIMATIONS */
	.x1 {
		-webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
		-moz-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
		animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
		left: -5%;
		top: 5%;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
	}
	.x2 {
		-webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
		-moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
		animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
		left: 5%;
		top: 80%;
		-webkit-transform: scale(0.2);
		-moz-transform: scale(0.2);
		transform: scale(0.2);
	}
	.x3 {
		-webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
		-moz-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
		animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
		left: 10%;
		top: 40%;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
	}
	.x4 {
		-webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		-moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		left: 20%;
		top: 0;
		-webkit-transform: scale(0.1);
		-moz-transform: scale(0.1);
		transform: scale(0.1);
	}
	.x5 {
		-webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		left: 30%;
		top: 50%;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
	}
	.x6 {
		-webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
		-moz-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
		animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
		left: 50%;
		top: 0;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
	}
	.x7 {
		-webkit-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
		-moz-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
		animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
		left: 65%;
		top: 70%;
		-webkit-transform: scale(0.1);
		-moz-transform: scale(0.1);
		transform: scale(0.1);
	}
	.x8 {
		-webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		-moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
		left: 80%;
		top: 10%;
		-webkit-transform: scale(0.2);
		-moz-transform: scale(0.2);
		transform: scale(0.2);
	}
	.x9 {
		-webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		-moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
		left: 90%;
		top: 50%;
		-webkit-transform: scale(0.4);
		-moz-transform: scale(0.4);
		transform: scale(0.4);
	}
	.x10 {
		-webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
		-moz-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
		animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
		left: 80%;
		top: 80%;
		-webkit-transform: scale(0.3);
		-moz-transform: scale(0.3);
		transform: scale(0.3);
	}
	/* OBJECTS */
	.bubble {
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
			inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		height: 200px;
		position: absolute;
		width: 200px;
	}
	.bubble:after {
		background: -moz-radial-gradient(
			center,
			ellipse cover,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		); /* FF3.6+ */
		background: -webkit-gradient(
			radial,
			center center,
			0px,
			center center,
			100%,
			color-stop(0%, rgba(255, 255, 255, 0.5)),
			color-stop(70%, rgba(255, 255, 255, 0))
		); /* Chrome,Safari4+ */
		background: -webkit-radial-gradient(
			center,
			ellipse cover,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		); /* Chrome10+,Safari5.1+ */
		background: -o-radial-gradient(
			center,
			ellipse cover,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		); /* Opera 12+ */
		background: -ms-radial-gradient(
			center,
			ellipse cover,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		); /* IE10+ */
		background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		);
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
		-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
		box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
		content: '';
		height: 180px;
		left: 10px;
		position: absolute;
		width: 180px;
	}
</style>
