import { TimelineLite } from 'gsap';

export class wordFadeIn {
	animFadeIn;

	constructor(elemList, dist){
		this.elemList = elemList;
		this.dist = dist
	}

	initFadeAnim = () => {
		let counter = 0.5;

		this.elemList.forEach(elem => {
			new TimelineLite({ paused: true })
			.to(elem, 0, { opacity: 1 })
			.to(elem, counter, { y: this.dist, opacity: 1 })
			.play();
			counter = counter + 0.15;
		});
	}
}