import React from 'react';

//components
import SkillsIconList from './SkillsIconList/SkillsIconList';
import SkillsHeader from './SkillsHeader/SkillsHeader';

const SkillsRight = (props) => {
	const { initIconList, initHeader, onViewMore, onSkillClick } = props;

	return (
		<div className="skills-right">
			<SkillsHeader initHeader={initHeader} />
			<SkillsIconList 
				initIconList={initIconList} 
				onSkillClick={onSkillClick}
			/>
			<button onClick={() => onViewMore()}>View More</button>
		</div>
	);
}

export default SkillsRight;