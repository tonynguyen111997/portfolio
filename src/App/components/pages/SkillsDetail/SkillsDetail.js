import React, { Component } from 'react';
import { TweenMax } from 'gsap';

//anims
import { wordFadeIn } from '../../../../util/anims/wordFadeIn';
import { overlayAnim } from '../../../../util/anims/overlayAnim';

//components
import BlueExitButton from '../../BlueExitButton/BlueExitButton';
import SkillsIconGroup from './SkillsIconGroup/SkillsIconGroup';

class SkillsDetail extends Component{
	constructor(props){
		super(props);

		this.timeout = null;

		this.groupIconAnim = null;

		this.iconColOne = [];
		this.iconColTwo = [];
		this.iconColThree = [];
		this.iconColFour = [];
		this.iconColFive = [];
		this.iconColSix = [];

		this.groupIcon = [
			this.iconColSix,
			this.iconColFive,
			this.iconColFour,
			this.iconColThree,
			this.iconColTwo,
			this.iconColOne
		]
	}

	componentDidMount(){
		this.groupIconAnim = new wordFadeIn(this.groupIcon, 50);
		this.groupIconAnim.initFadeAnim();
		document.addEventListener('mousemove', this.animIdle);
	}

	componentWillUnmount(){
		document.removeEventListener('mousemove', this.animIdle);
	}

	animIdle = () => {
		clearTimeout(this.timeout);
		this.timeout= setTimeout(() => {
			this.groupIconAnim.loopAnim();
			this.animIdle();
		}, 3500)
	}

	initElem = (elemList, elem) => {
		elemList.unshift(elem);
	}

	changePage = (page) => {
		const { changePage } = this.props;

		const overlay = new overlayAnim();
		TweenMax.killAll();
		return overlay.initHorizontalAnim(() => {
			changePage(page);
		}).play();
	}

	render(){
		return(
			<div id="skills-detail" className="skills-detail">
				<BlueExitButton changePage={() => this.changePage('landing')} />
				<SkillsIconGroup 
					initIconGroup={[
						(elem) => this.initElem(this.iconColOne, elem), 
						(elem) => this.initElem(this.iconColTwo, elem),
						(elem) => this.initElem(this.iconColThree, elem),
						(elem) => this.initElem(this.iconColFour, elem),
						(elem) => this.initElem(this.iconColFive, elem),
						(elem) => this.initElem(this.iconColSix, elem)]}
				/>
			</div>
		);
	}
}

export default SkillsDetail;