import { TimelineLite } from 'gsap';

export class growToFull {
	animGrow;;

	constructor(elem, width, height, cb){
		this.elem = elem;
		this.width = width;
		this.height = height;
		this.cb = cb;
	}

	initGrowAnim = () => {
		new TimelineLite({ paused: true })
		.to(this.elem, 0.5, { 
			width: this.width, 
			height: this.height, })
		.call(() => this.cb())
		.play();
	}
}