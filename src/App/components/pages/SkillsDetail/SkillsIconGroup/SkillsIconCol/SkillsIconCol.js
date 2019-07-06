import React from 'react';

//images
import jsIcon from '../../assets/js-icon.png';

//components
import SkillsIcon from '../../../Landing/sections/Skills/SkillsRight/SkillsIconList/SkillsIcon/SkillsIcon';

const SkillsIconCol = (props) => {
	const { initIconList, imageList, hrefList } = props;
	return (
		<div className="skills-icon-col">
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[0]}
				imageDesc={'skill icon'}
				skillHref={hrefList[0]}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[1]}
				imageDesc={'skill icon'}
				skillHref={hrefList[1]}
			/>
			<SkillsIcon 
				initIconList={initIconList}
				imageIcon={imageList[2]}
				imageDesc={'skill icon'}
				skillHref={hrefList[2]}
			/>
		</div>
	);
}

export default SkillsIconCol;