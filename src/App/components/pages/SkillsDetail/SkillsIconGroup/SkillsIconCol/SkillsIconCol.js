import React from 'react';

//images
import jsIcon from '../../assets/js-icon.svg';

//components
import SkillsIcon from '../../../Landing/sections/Skills/SkillsRight/SkillsIconList/SkillsIcon/SkillsIcon';

const SkillsIconCol = (props) => {
	const { initIconList } = props;
	return (
		<div className="skills-icon-col">
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
			/>
		</div>
	);
}

export default SkillsIconCol;