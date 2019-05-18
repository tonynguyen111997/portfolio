import React from 'react';

//components
import SkillsIconCol from './SkillsIconCol/SkillsIconCol';

const SkillsIconGroup = (props) => {
	const { initIconGroup, changePage } = props;

	return (
		<div className="skills-icon-group">
			<SkillsIconCol 
				initIconList={initIconGroup[0]}
				changePage={changePage}
			/>
			<SkillsIconCol 
				initIconList={initIconGroup[1]}
				changePage={changePage}
			/>
			<SkillsIconCol 
				initIconList={initIconGroup[2]}
				changePage={changePage}
			/>
			<SkillsIconCol 
				initIconList={initIconGroup[3]}
				changePage={changePage}
			/>
			<SkillsIconCol 
				initIconList={initIconGroup[4]}
				changePage={changePage}
			/>
			<SkillsIconCol 
				initIconList={initIconGroup[5]}
				changePage={changePage}
			/>
		</div>
	);
}

export default SkillsIconGroup;