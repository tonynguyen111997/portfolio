import React from 'react';

//images
import jsIcon from '../../assets/js-icon.svg';

//components
import SkillsIcon from './SkillsIcon/SkillsIcon';

const SkillsIconList = (props) => {
	const { initIconList } = props;

	return (
		<div className="skills-icon-list">
			<ul>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
			</ul>
			<ul className="skills-middle-column">
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'}
					/>
				</li>
			</ul>
			<ul>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon'} 
					/>
				</li>
			</ul>
		</div>
	);
}

export default SkillsIconList;