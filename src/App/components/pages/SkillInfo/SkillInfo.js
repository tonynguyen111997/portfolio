import React, { Component } from 'react';

//images
import jsIcon from '../../pages/Landing/sections/Skills/assets/big-js-icon.png';
import takeStand from '../../pages/Landing/sections/Skills/assets/take-stand.jpg';
import tablet from '../../pages/Landing/sections/Skills/assets/tablet.jpg';

//anims
import { overlayAnim } from '../../../../util/anims/overlayAnim';

//components
import WhiteExit from '../../WhiteExitButton/WhiteExitButton';
import ProjectItem from '../Landing/sections/Projects/ProjectsList/ProjectItem/ProjectItem';

class SkillInfo extends Component{
	changePage = (page) => {
		const { changePage } = this.props;

		const overlay = new overlayAnim();
		return overlay.initHorizontalAnim(() => {
			changePage(page);
		}).play();
	}

	render(){
		return(
			<div id="skill-info">
				<WhiteExit changePage={() => this.changePage('landing')} />
				<div className="skill-info-left">
					<img src={jsIcon} alt="skill" />
				</div>
				<div className="skill-info-right">
					<h2>JavaScript</h2>
					<div className="skill-info-projects">
						<ProjectItem 
							initProject={() => {}}
							projectImg={takeStand} 
							projectImgDesc={'take-stand project'}
							onProjectClick={() => this.changePage('projectInfo')}
							/>
						<ProjectItem 
							initProject={() => {}}
							projectImg={tablet} 
							projectImgDesc={'take-stand project'}
							onProjectClick={() => this.changePage('projectInfo')}
							/>
					</div>
				</div>
			</div>
		);
	}
}

export default SkillInfo;