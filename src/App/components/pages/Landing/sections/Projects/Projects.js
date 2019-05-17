import React, { Component } from 'react';

//anims 
import { wordFadeIn } from '../../../../../../util/anims/wordFadeIn';

//utils
import { isElementInViewport } from '../../../../../../util/util';

//components
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectTracker from './ProjectTracker/ProjectTracker';

class Projects extends Component{
	constructor(){
		super();

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

	componentDidMount(){
		this.headerAnim = new wordFadeIn(this.header, 75);
		this.projectRowOneAnim = new wordFadeIn(this.projectRowOne, 225);
		this.projectRowTwoAnim = new wordFadeIn(this.projectRowTwo, 225);
		this.projectTrackerAnim = new wordFadeIn(this.projectTracker, 50);

		window.addEventListener('scroll', () => {
			if(isElementInViewport('projects')){
				this.headerAnim.initFadeAnim();
				this.projectRowOneAnim.initFadeAnim();
				this.projectRowTwoAnim.initFadeAnim();
				this.projectTrackerAnim.initFadeAnim();
			}
		})
	}

	render(){
		return (
			<div id="projects" className="projects">
				<div className="projects-top"></div> {/* projects-top & projects-bottom is for layout*/}
				<div className="projects-body">
					<ProjectHeader initHeader={(elem) => this.initElem(this.header, elem)} />
					<ProjectsList initProject={[
							((elem) => this.initElem(this.projectRowOne, elem)),
							((elem) => this.initElem(this.projectRowTwo, elem))
						]}/>
					<ProjectTracker initProjectTracker={(elem) => this.initElem(this.projectTracker, elem)}/>
				</div>
				<div className="projects-bottom">
					<div className="projects-bottom-left">a</div>
					<div className="projects-bottom-right"></div>
				</div>
			</div>
		);
	}
}

export default Projects;