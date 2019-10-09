import React, { Component } from 'react';
import { TweenMax } from 'gsap';

//anims 
import { wordFadeIn } from '../../../../../../util/anims/wordFadeIn';
import { overlayAnim } from '../../../../../../util/anims/overlayAnim';

//utils
import { isElementInViewport } from '../../../../../../util/util';

//components
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectTracker from './ProjectTracker/ProjectTracker';
import Modal from '../../../../Modal/Modal';

class Projects extends Component{
	constructor(props){
		super(props);

		//declare animation variable
		this.headerAnim = null;
		this.projectRowOneAnim = null;
		this.projectRowTwoAnim = null;
		this.projectTrackerAnim = null;

		//array of projects
		this.header = [];
		this.projectRowOne = [];
		this.projectRowTwo = [];
		this.projectTracker = [];
	}

	initElem = (elemList, elem) => {
		elemList.unshift(elem);
	}

	scrollFunc = () => {
		if(isElementInViewport('projects')){
			this.headerAnim.initFadeAnim();
			this.projectRowOneAnim.initFadeAnim();
			this.projectRowTwoAnim.initFadeAnim();
			this.projectTrackerAnim.initFadeAnim();
		}
	}

	componentDidMount(){
		this.headerAnim = new wordFadeIn(this.header, 75);
		this.projectRowOneAnim = new wordFadeIn(this.projectRowOne, 225);
		this.projectRowTwoAnim = new wordFadeIn(this.projectRowTwo, 225);
		this.projectTrackerAnim = new wordFadeIn(this.projectTracker, 50);

		window.addEventListener('scroll', this.scrollFunc);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.scrollFunc);
	}

	handleProjectClick = () => {
		const { changePage } = this.props;

		const overlay = new overlayAnim();
		TweenMax.killAll();
		return overlay.initHorizontalAnim(() => {
			changePage('projectInfo');
		}).play();
	}

	render(){
		return (
			<div id="projects" className="projects">
				<div className="projects-top"></div> {/* projects-top & projects-bottom is for layout*/}
				<div className="projects-body">
					<ProjectHeader initHeader={(elem) => this.initElem(this.header, elem)} />
					<ProjectsList 
						initProject={[
							((elem) => this.initElem(this.projectRowOne, elem)),
							((elem) => this.initElem(this.projectRowTwo, elem))
						]}
						onProjectClick={this.handleProjectClick}
					/>
				</div>
				<div className="projects-bottom">
					<div className="projects-bottom-left"></div>
					<div className="projects-bottom-right"></div>
				</div>
			</div>
		);
	}
}

export default Projects;