import React from 'react';

//components
import SkillsIconCol from './SkillsIconCol/SkillsIconCol';

const SkillsIconGroup = (props) => {
	const { initIconGroup } = props;

	return (
		<div className="skills-icon-group">
			<SkillsIconCol initIconList={initIconGroup[0]}/>
			<SkillsIconCol initIconList={initIconGroup[1]}/>
			<SkillsIconCol initIconList={initIconGroup[2]}/>
			<SkillsIconCol initIconList={initIconGroup[3]}/>
			<SkillsIconCol initIconList={initIconGroup[4]}/>
			<SkillsIconCol initIconList={initIconGroup[5]}/>
		</div>
	);
}

export default SkillsIconGroup;