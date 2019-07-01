import React from 'react';

//images
import jsIcon from '../../assets/js-icon.png';

//components
import SkillsIcon from '../../../Landing/sections/Skills/SkillsRight/SkillsIconList/SkillsIcon/SkillsIcon';

const SkillsIconCol = (props) => {
	const { initIconList, changePage, imageList } = props;
	return (
		<div className="skills-icon-col">
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[0]}
				imageDesc={'skill icon'}
				onSkillClick={changePage}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[1]}
				imageDesc={'skill icon'}
				onSkillClick={changePage}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[2]}
				imageDesc={'skill icon'}
				onSkillClick={changePage}
			/>
		</div>
	);
}

export default SkillsIconCol;