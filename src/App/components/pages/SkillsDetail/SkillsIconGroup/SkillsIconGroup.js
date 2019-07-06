import React from 'react';

//components
import SkillsIconCol from './SkillsIconCol/SkillsIconCol';
import htmlIcon from '../../Landing/sections/Skills/assets/html-logo.png';
import cssIcon from '../../Landing/sections/Skills/assets/css-logo.png';
import jsIcon from '../../Landing/sections/Skills/assets/js-logo.png';
import expressIcon from '../../Landing/sections/Skills/assets/express-logo.png';
import githubIcon from '../../Landing/sections/Skills/assets/github-logo.png';
import gitIcon from '../../Landing/sections/Skills/assets/git-logo.png';
import nodeIcon from '../../Landing/sections/Skills/assets/node-logo.png';
import reactIcon from '../../Landing/sections/Skills/assets/react-logo.png';
import reduxIcon from '../../Landing/sections/Skills/assets/redux-logo.png';
import sassIcon from '../../Landing/sections/Skills/assets/sass-logo.png';
import bootstrapIcon from '../../Landing/sections/Skills/assets/bootstrap-logo.png';
import sqlIcon from '../../Landing/sections/Skills/assets/sql-logo.png';
import postgresIcon from '../../Landing/sections/Skills/assets/postgres-logo.png';
import mysqlIcon from '../../Landing/sections/Skills/assets/mysql-logo.png';
import nextIcon from '../../Landing/sections/Skills/assets/next-logo.png';
import jqueryIcon from '../../Landing/sections/Skills/assets/jQuery-logo.png';
import adobexdIcon from '../../Landing/sections/Skills/assets/adobexd-logo.png';
import jestIcon from '../../Landing/sections/Skills/assets/jest-logo.png';

const SkillsIconGroup = (props) => {
	const { initIconGroup } = props;

	return (
		<div className="skills-icon-group">
			<SkillsIconCol 
				imageList = {[htmlIcon, cssIcon, jsIcon]}
				hrefList ={["https://g.co/kgs/Px4Xts", "https://g.co/kgs/HcYpLi", "https://g.co/kgs/FPQFUy"]}
				initIconList={initIconGroup[0]}
			/>
			<SkillsIconCol 
				imageList = {[expressIcon, githubIcon, gitIcon]}
				initIconList={initIconGroup[1]}
				hrefList = {["https://g.co/kgs/xnVFSA", "https://g.co/kgs/T2vfTx", "https://g.co/kgs/zEvmRY"]}
			/>
			<SkillsIconCol 
				imageList = {[nodeIcon, reactIcon, reduxIcon]}
				initIconList={initIconGroup[2]}
				hrefList = {["https://g.co/kgs/FLpsxE", "https://g.co/kgs/7qYniw", "https://g.co/kgs/Q3qAsz"]}
			/>
			<SkillsIconCol 
				imageList = {[sassIcon, bootstrapIcon, sqlIcon]}
				initIconList={initIconGroup[3]}
				hrefList = {["https://g.co/kgs/QrUUpK", "https://g.co/kgs/g11a24", "https://g.co/kgs/HXi4ia"]}
			/>
			<SkillsIconCol 
				imageList = {[postgresIcon, mysqlIcon, nextIcon]}
				initIconList={initIconGroup[4]}
				hrefList = {["https://g.co/kgs/g77zMU", "https://g.co/kgs/fBEjVt", "https://nextjs.org/"]}
			/>
			<SkillsIconCol 
				imageList = {[jqueryIcon, adobexdIcon, jestIcon]}
				initIconList={initIconGroup[5]}
				hrefList = {["https://g.co/kgs/Cm3rAc", "https://g.co/kgs/iD26mV", "https://jestjs.io/"]}
			/>
		</div>
	);
}

export default SkillsIconGroup;