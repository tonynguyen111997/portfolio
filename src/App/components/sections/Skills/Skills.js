import React from 'react';

//components
import SkillsLeft from './SkillsLeft/SkillsLeft';
import SkillsRight from './SkillsRight/SkillsRight';

const Skills = () => {
	return (
		<div id="skills" className="skills">
			<SkillsLeft />
			<SkillsRight />
		</div>
	);
}

export default Skills;