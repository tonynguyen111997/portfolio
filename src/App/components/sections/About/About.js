import React, { Component } from 'react';

//images
import selfImage from './assets/self-image.jpg';

//anims 
import { wordFadeIn } from '../../../../util/anims/wordFadeIn';

//utils
import { isElementInViewport } from '../../../../util/util';

//components
import AboutHeader from './AboutHeader/AboutHeader';
import AboutContent from './AboutContent/AboutContent';

class About extends Component{
	constructor(){
		super();

		//declare animation variable
		this.headerAnim = null;
		this.imageAnim = null;
		this.titleAnim = null;
		this.jobAnim = null;
		this.descAnim = null;

		//array of letters
		this.header = [];
		this.image = [];
		this.title = [];
		this.job = [];
		this.desc = [];
	}

	initWord = (word, elem) => {
		word.unshift(elem);
	}

	componentDidMount(){
		this.headerAnim = new wordFadeIn(this.header, 75); //animation for header
		this.imageAnim = new wordFadeIn(this.image, 50);
		this.titleAnim = new wordFadeIn(this.title, 50);
		this.jobAnim = new wordFadeIn(this.job, 50);
		this.descAnim = new wordFadeIn(this.desc, 50);
		window.addEventListener('scroll', () => {
			if(isElementInViewport('about')){
				this.headerAnim.initFadeAnim();
				this.imageAnim.initFadeAnim();
				this.titleAnim.initFadeAnim();
				this.jobAnim.initFadeAnim();
				this.descAnim.initFadeAnim();
			}
		})
	}

	render(){
		return (
			<div id="about" className="about">
				<div className="about-content-container">
					<div className="about-left">
						<AboutHeader 
							initHeader={(elem) => this.initWord(this.header, elem)}
						/>
						<img 
							ref={img => this.initWord(this.image, img)}
							className="about-img" 
							src={selfImage} 
							alt="image of myself" />
					</div>
					<AboutContent 
						initTitle={(elem) => this.initWord(this.title, elem)}
						initJob={(elem) => this.initWord(this.job, elem)}
						initDesc={(elem) => this.initWord(this.desc, elem)}
					/>
				</div>
			</div>
		);
	}
}
export default About;