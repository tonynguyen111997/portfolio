import { TimelineMax } from 'gsap';

export class wordFadeIn {
	animFadeIn;

	constructor(elemList, dist){
		this.elemList = elemList;
		this.dist = dist
	}

	initFadeAnim = () => {
		let counter = 0.5;

		this.elemList.forEach(elem => {
			new TimelineMax({ paused: true })
			.to(elem, 0, { opacity: 1 })
			.to(elem, counter, { y: this.dist, opacity: 1 })
			.play();
			counter = counter + 0.15;
		});
	}

	loopAnim = () => {
		let counter = 0.5;

		this.elemList.forEach(elem => {
			new TimelineMax({ paused: true })
			.to(elem, counter, { y: this.dist+25 })
			.to(elem, counter, { y: this.dist-25})
			.to(elem, counter, {y: this.dist})
			.play();
			counter = counter + 0.15;
		});
	}
}