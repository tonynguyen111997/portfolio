import { TimelineLite, Power4 } from 'gsap';

export class menuAnim{
	menuAnim = null;

	elemMenu = document.getElementById('menu');
	elemHamburger = document.getElementsByClassName('menu-hamburger-container')
	elemLinkedIn = document.getElementById('menu-linkedin');
	elemGitHub = document.getElementById('menu-github');

	initMenuAnim = () => {
		return this.menuAnim = new TimelineLite({
			paused: true
		})
		.to(this.elemLinkedIn, 0, {opacity: 0})
		.to(this.elemGitHub, 0, {opacity: 0})
		.to("#hamburger", 0, { marginRight: 50 })
		.to([this.elemMenu, this.elemHamburger], 1, { width: '25%', ease: Power4.easeOut, alignItems: 'flex-end'})

	}

	closeMenuAnim = () => {
		return this.menuAnim = new TimelineLite({
			paused: true
		})
		.to("#hamburger", 0, { marginRight: 0 })
		.to([this.elemMenu, this.elemHamburger], 1, { width: 100, ease: Power4.easeOut, alignItems: 'center' })
		.to(this.elemLinkedIn, 0, {opacity: 1})
		.to(this.elemGitHub, 0, {opacity: 1})
	}
}