import { TimelineLite } from 'gsap';

export class overlayAnim{
	elemOverlay = document.getElementById('overlay');
	elemOverlayOne = document.getElementById('overlay-one');
	elemOverlayTwo = document.getElementById('overlay-two');

	playHorizontalAnim = () => {
		new TimelineLite({
			paused: true
		})
		.to(this.elemOverlay, 0, {width: '100%', height: '100%', flexDirection: 'column'})
		.call(() => {
			new TimelineLite()
			.to(this.elemOverlayOne, 0, {height: '100%'})
			.to(this.elemOverlayOne, 1, {width: '100%'})

			new TimelineLite()
			.to(this.elemOverlayTwo, 0, {height: '100%'})
			.to(this.elemOverlayTwo, 1, {width: '100%'})
		})
		.play();
	}

	playHorizontalAnim = () => {
		new TimelineLite({
			paused: true
		})
		.to(this.elemOverlay, 0, {width: '100%', height: '100%', flexDirection: 'column'})
		.call(() => {
			new TimelineLite()
			.to(this.elemOverlayOne, 0, {height: '100%'})
			.to(this.elemOverlayOne, 1, {width: '100%'})

			new TimelineLite()
			.to(this.elemOverlayTwo, 0, {height: '100%'})
			.to(this.elemOverlayTwo, 1, {width: '100%'})
		})
		.play();
	}
}