import React, { Component } from 'react';

//anims 
import { wordFadeIn } from '../../../../../../util/anims/wordFadeIn';
import { overlayAnim } from '../../../../../../util/anims/overlayAnim';

//utils
import { isElementInViewport } from '../../../../../../util/util';

//components
import SkillsLeft from './SkillsLeft/SkillsLeft';
import SkillsRight from './SkillsRight/SkillsRight';

class Skills extends Component{
	constructor(){
		super();

		//delcare animation variables
		this.headerAnim = null;
		this.iconColOneAnim = null;
		this.iconColTwoAnim = null;
		this.iconColThreeAnim = null;

		//array of header letter
		this.header = [];

		//array of icons
		this.iconColOne = [];
		this.iconColTwo = [];
		this.iconColThree = [];
	}

	initElem = (elemList, elem) => {
		elemList.unshift(elem);
	}

	onParallaxScroll = () => {
		if(isElementInViewport){
			const elem = document.getElementById('skills');
			const rect = elem.getBoundingClientRect();
			document.getElementById('skills-laptop').style.top = (100 - ((600 - rect.bottom)/25)) + 'px';
			document.getElementById('skills-phone').style.top = (150 + ((600 - rect.bottom)/25)) + 'px';
		}
	}

	handleViewMore = () => {
		const overlay = new overlayAnim();
		return overlay.playHorizontalAnim();
	}

	componentDidMount(){
		this.headerAnim = new wordFadeIn(this.header, 75);
		this.iconColOneAnim = new wordFadeIn(this.iconColOne, 50);
		this.iconColTwoAnim = new wordFadeIn(this.iconColTwo, 50);
		this.iconColThreeAnim = new wordFadeIn(this.iconColThree, 50);

		window.addEventListener('scroll', this.scrollFunc);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.scrollFunc)
	}

	//Function that runs when scrolling
	scrollFunc = () => {
		if(isElementInViewport('skills') && !this.iconAnimIsActive()){
			this.headerAnim.initFadeAnim();
			this.iconColOneAnim.initFadeAnim();
			this.iconColTwoAnim.initFadeAnim();
			this.iconColThreeAnim.initFadeAnim();
			this.onParallaxScroll();
		}
	}

	//Check to see if icon animation is active
	iconAnimIsActive = () => {
		return (
			this.headerAnim.active ||
			this.iconColOneAnim.isActive || 
			this.iconColTwoAnim.isActive || 
			this.iconColThreeAnim.isActive
		);
	}

	render(){
		return(
			<div id="skills" className="skills">
				<SkillsLeft />
				<SkillsRight 
					onViewMore={this.handleViewMore}
					initHeader={(elem) => this.initElem(this.header, elem)}
					initIconList={[
						(elem) => this.initElem(this.iconColOne, elem), 
						(elem) => this.initElem(this.iconColTwo, elem),
						(elem) => this.initElem(this.iconColThree, elem)]}
				/>
			</div>
		);
	}
}

export default Skills;