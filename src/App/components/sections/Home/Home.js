import React, { Component } from 'react';

//images
import homeImage from './assets/home-image.png';

//anims
import { horizontalToMiddle } from '../../../../util/anims/horizontalToMiddle';
import { wordFadeIn } from '../../../../util/anims/wordFadeIn';

class Home extends Component{
	constructor(){
		super();
		this.slideAnim = null;
		this.leftElem = null;
		this.rightElem = null;

		this.firstNameAnim = null;
		this.firstName = [];

		this.lastNameAnim = null;
		this.lastName = [];

		this.quote = [];
		this.quoteAnim = [];

		this.state = {
			quoteStylePos: 150
		}
	}

	componentDidMount(){
		this.slideAnim = new horizontalToMiddle(this.leftElem,this.rightElem);

		this.firstNameAnim = new wordFadeIn(this.firstName, 75);
		this.lastNameAnim = new wordFadeIn(this.lastName, 75);
		this.quoteAnim = new wordFadeIn(this.quote, 50);

		this.slideAnim.initHorizontalAnim().call(() => {
			this.firstNameAnim.initFadeAnim();
			this.lastNameAnim.initFadeAnim();
			this.quoteAnim.initFadeAnim();
		});
		this.slideAnim.playAnim();
	}

	render(){
		return (
			<div className="home">
				<div className="home-content-container">
					<div className="home-content-left">
						<div className="home-name">
							<div className="first-name">
								<p ref={p => this.firstName.unshift(p)}>T</p>
								<p ref={p => this.firstName.unshift(p)}>o</p>
								<p ref={p => this.firstName.unshift(p)}>n</p>
								<p ref={p => this.firstName.unshift(p)}>y</p>
							</div>
							<div className="last-name">
								<p ref={p => this.lastName.unshift(p)}>N</p>
								<p ref={p => this.lastName.unshift(p)}>g</p>
								<p ref={p => this.lastName.unshift(p)}>u</p>
								<p ref={p => this.lastName.unshift(p)}>y</p>
								<p ref={p => this.lastName.unshift(p)}>e</p>
								<p ref={p => this.lastName.unshift(p)}>n</p>
							</div>
						</div>
						<div ref={div => this.leftElem = div} className="home-quote-container" style={{ top: this.state.quoteStylePos + 'px' }}>
							<div ref={div => this.quote.push(div)} className="home-quote-content">
								<p className="home-quote-marks">"</p>
								<div className="home-quote">
									<p>
										Lorem ipsum dolor sit amet, 
										consectetur adipiscing elit, sed do 
										eiusmod tempor incididunt ut labore
										et dolore magna aliqua.
									</p>
								</div>
								<div className="home-author-container">
									<div className="home-line"></div>
									<p>
										Person Name
									</p>
								</div>
							</div>
						</div>
					</div>
					<div ref={div => this.rightElem = div} className="home-content-right">
						<img src={homeImage} alt="people studying"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;