import { TimelineLite } from 'gsap';

export class horizontalToMiddle{
	animFromLeft;
	animFromRight;

	constructor(leftElem, rightElem){
		this.leftElem = leftElem;
		this.rightElem = rightElem;
	}

	initHorizontalAnim = () => {
		this.animFromLeft = new TimelineLite({
			paused: true
		})
		.to(this.leftElem, 0.5, {x: 0, opacity: 0})
		.to(this.leftElem, 1, {x: 125, opacity: 1})

		return this.animFromRight = new TimelineLite({
			paused: true
		})
		.to(this.rightElem, 0.5, {x: 0, opacity: 0})
		.to(this.rightElem, 1.5, {x: -125, opacity: 1})
	}

	playAnim = () => {
		this.animFromLeft.play();
		return this.animFromRight.play();
	}
}