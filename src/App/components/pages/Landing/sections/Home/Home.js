import React, { Component } from 'react';

//images
import homeImage from './assets/home-image.png';

//anims
import { horizontalToMiddle } from '../../../../../../util/anims/horizontalToMiddle';
import { wordFadeIn } from '../../../../../../util/anims/wordFadeIn';

//utils
import { isElementInViewport } from '../../../../../../util/util';

//components
import HomeName from './HomeName/HomeName';
import HomeQuote from './HomeQuote/HomeQuote';

class Home extends Component{
	constructor(){
		super();

		//declare animation variables
		this.slideAnim = null;
		this.firstNameAnim = null;
		this.lastNameAnim = null;
		this.quoteAnim = null;

		//array of letters/words
		this.firstName = [];
		this.lastName = [];
		this.quote = [];
	}

	//initialize array full of word letters
	initWord = (word, elem) => {
		word.unshift(elem);
	}

	componentDidMount(){
		//animation for white box and image
		this.slideAnim = new horizontalToMiddle(document.getElementById('home-quote') , document.getElementById('home-content-right')); 

		this.firstNameAnim = new wordFadeIn(this.firstName, 75); //animation for first name
		this.lastNameAnim = new wordFadeIn(this.lastName, 75); //animation for last name
		this.quoteAnim = new wordFadeIn(this.quote, 50); //animation for quote block

		this.slideAnim.initHorizontalAnim().call(() => { //Calls slideAnim animation and then rest of anims
			this.firstNameAnim.initFadeAnim();
			this.lastNameAnim.initFadeAnim();
			this.quoteAnim.initFadeAnim();
		})
		.call(() => {
			//resets home-quote's transition back to default
			document.getElementById('home-quote').style.transition = '300ms all ease-in-out';
		});

		//plays animation
		this.slideAnim.playAnim(); 

		window.addEventListener('scroll', this.onParallaxScroll);
	}

	//on scroll the home-quote & home-image-cover will move
	onParallaxScroll = () => {
		if(isElementInViewport){
			const elem = document.getElementById('home');
			const rect = elem.getBoundingClientRect();
			document.getElementById('home-quote').style.top = (150 - ((600 - rect.bottom)/25)) + 'px';
			document.getElementById('home-image-cover').style.top = (-50 + ((600 - rect.bottom)/25)) + 'px';
		}
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.onParallaxScroll)
	}

	render(){
		return (
			<div id="home" className="home">
				<div className="home-content-container">
					<div className="home-content-left">
						<HomeName 
							initFirstName={(elem) => this.initWord(this.firstName, elem)}
							initLastName={(elem) => this.initWord(this.lastName, elem)}
						/>
						<HomeQuote 
							initQuote={(elem) => this.initWord(this.quote, elem)}
						/>
					</div>
					<div ref={div => this.rightElem = div} id="home-content-right" className="home-content-right">
						<img id="home-image" src={homeImage} alt="people studying"/>
						<div id="home-image-cover"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;