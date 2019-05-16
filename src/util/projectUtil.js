//images
import takeStand from '../App/components/sections/Projects/assets/takeStand.jpg';
import stats from '../App/components/sections/Projects/assets/stats.jpg';
import tablet from '../App/components/sections/Projects/assets/tablet.jpg';
import twoPhones from '../App/components/sections/Projects/assets/two-phones.jpg';
import numbers from '../App/components/sections/Projects/assets/numbers.jpg';
import phones from '../App/components/sections/Projects/assets/phones.jpg';

//components
import ProjectItem from '../App/components/sections/Projects/ProjectsList/ProjectItem/ProjectItem';

const dummyData = [
	{
		title: 'Take Stand',
		img: takeStand,
		desc: 'Take stand project'
	},
	{
		title: 'stats',
		img: stats,
		desc: 'stats project'
	},
	{
		title: 'tablet proj',
		img: tablet,
		desc: 'Tablet project'
	},
	{
		title: 'Two phone',
		img: twoPhones,
		desc: 'Two phon project'
	},
	{
		title: 'numbers',
		img: numbers,
		desc: 'numbers proj'
	},
	{
		title: 'phones',
		img: phones,
		desc: 'phones project'
	},
	{
		title: 'numbers',
		img: numbers,
		desc: 'numbers proj'
	},
		{
		title: 'numbers',
		img: numbers,
		desc: 'numbers proj'
	}
];

const projectList;

export class projectUtil{
	currentPos = 0;
	endPos = 5;
	//Returns list of Project Items filled with data
	generateProjectList = (props) => {
		return dummyData.map(project, index => (
				<ProjectItem 
					key={index}
					initProject={props[0]}
					projectImg={project.img}
					projectImgDesc={project.desc}
				/>
			)
		);
	}

	generateFirstRow = (list) => {
		const newList = [];
		if((this.currentPos + 3) < list.length){
			for(let i = currentPos; i < currentPos + 3; i++){
				newList.push(list[this.currentPos]);
			}
		} else {
			for(let i = currentPos; i < list.length; i++){
				newList.push(list[this.currentPos]);
			}
		}
	}

	generateSecondRow = (list) => {
		const newList = [];
		if((this.endPos >= list.length ))
	}

}