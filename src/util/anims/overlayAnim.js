import { TimelineLite, Power4 } from 'gsap';

export class overlayAnim{
	horizontalAnim = null;
	verticalAnim = null;

	elemOverlay = document.getElementById('overlay');
	elemOverlayOne = document.getElementById('overlay-one');
	elemOverlayTwo = document.getElementById('overlay-two');

	initHorizontalAnim = (cb) => {
		return this.horizontalAnim = new TimelineLite({
			paused: true
		})
		.to(this.elemOverlay, 0, {flexDirection: 'column', zIndex: 8, opacity: 1})
		.call(() => {
			new TimelineLite()
			.to(this.elemOverlayOne, 0, {height: '100%', width: 0})
			.to(this.elemOverlayOne, 1, {width: '100%', ease: Power4.easeOut })
			.play();

			new TimelineLite()
			.to(this.elemOverlayTwo, 0, {height: '100%', width: 0})
			.to(this.elemOverlayTwo, 1, {width: '100%', ease: Power4.easeOut})
			.play();
		})
		.to(this.elemOverlay, 1, {})
		.call(cb)
		.to(this.elemOverlay, 0, {flexDirection: 'column-reverse'})
		.call(() => {
			new TimelineLite()
			.to(this.elemOverlayOne, 1, {width: '0%', ease: Power4.easeOut })
			.play();

			new TimelineLite()
			.to(this.elemOverlayTwo, 1, {width: '0%', ease: Power4.easeOut})
			.play();
		})
		.to(this.elemOverlay, 1, {})
		.to(this.elemOverlay, 0, {zIndex: 0, opacity: 0})
	}

	initVerticalAnim = () => {
		return this.verticalAnim = new TimelineLite({
			paused: true
		})
		.to(this.elemOverlay, 0, {width: '100%', height: '100%', flexDirection: 'row', zIndex: 8})
		.call(() => {
			new TimelineLite()
			.to(this.elemOverlayOne, 0, {width: '100%', height: 0, background: 'red'})
			.to(this.elemOverlayOne, 1, {height: '100%'})
			.play();

			new TimelineLite()
			.to(this.elemOverlayTwo, 0, {width: '100%', height: 0, background: 'red'})
			.to(this.elemOverlayTwo, 1, {height: '100%'})
			.play();
		})
		.to(this.elemOverlay, 1, {})
		.to(this.elemOverlay, 0, {zIndex: 0})
	}
}