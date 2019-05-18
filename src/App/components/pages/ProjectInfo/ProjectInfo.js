import React, { Component } from 'react';
import { TweenMax } from 'gsap';

//anims
import { overlayAnim } from '../../../../util/anims/overlayAnim';

//components
import ProjectInfoImage from './ProjectInfoImage/ProjectInfoImage';
import ProjectInfoDesc from './ProjectInfoDesc/ProjectInfoDesc';
import ProjectInfoSkills from './ProjectInfoSkills/ProjectInfoSkills';
import BlueExitButton from '../../BlueExitButton/BlueExitButton';

class ProjectInfo extends Component{
	constructor(props){
		super(props);
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
		return (
			<div id="project-info">
				<div className="project-info-left">
					<ProjectInfoImage />
					<ProjectInfoSkills />
				</div>
				<div className="project-info-right">
					<div className="project-white-box">
						<BlueExitButton changePage={() => this.changePage('landing')} />
					</div>
					<ProjectInfoDesc />
				</div>

			</div>
		);
	}
}

export default ProjectInfo;