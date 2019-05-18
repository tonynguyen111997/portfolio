import React from 'react';

//images
import jsIcon from '../../assets/js-icon.svg';

//components
import SkillsIcon from '../../../Landing/sections/Skills/SkillsRight/SkillsIconList/SkillsIcon/SkillsIcon';

const SkillsIconCol = (props) => {
	const { initIconList, changePage } = props;
	return (
		<div className="skills-icon-col">
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
				onSkillClick={changePage}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
				onSkillClick={changePage}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={jsIcon}
				imageDesc={'js-icon'}
				onSkillClick={changePage}
			/>
		</div>
	);
}

export default SkillsIconCol;