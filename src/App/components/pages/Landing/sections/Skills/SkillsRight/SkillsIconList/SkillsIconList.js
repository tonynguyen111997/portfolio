import React from 'react';

//images
import htmlIcon from '../../assets/html-logo.png';
import cssIcon from '../../assets/css-logo.png';
import jsIcon from '../../assets/js-logo.png';
import expressIcon from '../../assets/express-logo.png';
import githubIcon from '../../assets/github-logo.png';
import gitIcon from '../../assets/git-logo.png';
import nodeIcon from '../../assets/node-logo.png';
import reactIcon from '../../assets/react-logo.png';
import reduxIcon from '../../assets/redux-logo.png';
import sassIcon from '../../assets/sass-logo.png';

//components
import SkillsIcon from './SkillsIcon/SkillsIcon';

const SkillsIconList = (props) => {
	const { initIconList, onSkillClick } = props;

	return (
		<div className="skills-icon-list">
			<ul>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={jsIcon} 
						imageDesc={'javascript icon btn'} 
						skillHref={'https://g.co/kgs/fLNmrw'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={htmlIcon} 
						imageDesc={'html icon btn'} 
						skillHref={'https://g.co/kgs/Y3EnJw'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[0]}
						imageIcon={cssIcon} 
						imageDesc={'css icon btn'} 
						skillHref={'https://g.co/kgs/kb8HBg'}
					/>
				</li>
			</ul>
			<ul className="skills-middle-column">
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={reduxIcon} 
						imageDesc={'redux icon btn'} 
						skillHref={'https://g.co/kgs/xw3k1c'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={expressIcon} 
						imageDesc={'express icon btn'} 
						skillHref={'https://g.co/kgs/5KJFmd'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[1]}
						imageIcon={githubIcon} 
						imageDesc={'github icon btn'}
						skillHref={'https://g.co/kgs/wgRJh7'}
					/>
				</li>
			</ul>
			<ul>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={gitIcon} 
						imageDesc={'git icon btn'} 
						skillHref={'https://g.co/kgs/HCEBRb'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={nodeIcon} 
						imageDesc={'node icon btn'} 
						skillHref={'https://g.co/kgs/iPcFNA'}
					/>
				</li>
				<li>
					<SkillsIcon 
						initIconList={initIconList[2]}
						imageIcon={reactIcon} 
						imageDesc={'react icon btn'} 
						skillHref={'https://g.co/kgs/CWEhJX'}
					/>
				</li>
			</ul>
		</div>
	);
}

export default SkillsIconList;