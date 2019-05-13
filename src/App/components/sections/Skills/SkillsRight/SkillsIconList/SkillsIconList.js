import React from 'react';

//images
import jsIcon from '../../assets/js-icon.svg';

//components
import SkillsIcon from './SkillsIcon/SkillsIcon';

const SkillsIconList = () => {
	return (
		<div className="skills-icon-list">
			<ul>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
			</ul>
			<ul className="skills-middle-column">
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
			</ul>
			<ul>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
				<li>
					<SkillsIcon imageIcon={jsIcon} imageDesc={'javascript icon'} />
				</li>
			</ul>
		</div>
	);
}

export default SkillsIconList;