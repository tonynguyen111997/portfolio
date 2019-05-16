import { TimelineLite } from 'gsap';

export class elemFallIn {
	animFallIn;

	constructor(elemList, dist){
		this.elemList = elemList;
		this.dist = dist
	}

	initFallAnim = () => {
		let counter = 0.5;

		this.elemList.forEach(elem => {
			new TimelineLite({ paused: true })
			.to(elem, 0, { opacity: 1 })
			.to(elem, counter, { y: this.dist + 10, opacity: 1 })
			.to(elem, 0.5, { y: this.dist })
			.play();
			counter = counter + 0.15;
		});
	}
}