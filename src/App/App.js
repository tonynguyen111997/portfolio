import React, { Component }  from 'react';

//components
import Overlay from './components/Overlay/Overlay';

//pages
import Landing from './components/pages/Landing/Landing';
import SkillsDetail from './components/pages/SkillsDetail/SkillsDetail';
import SkillInfo from './components/pages/SkillInfo/SkillInfo';

class App extends Component{
  constructor(){
    super();

    this.state={
      page: 'landing'
    }
  }

  //changes current page
  changePage = (page) => {
    this.setState({
      page: page
    });
  }

  render(){
    let currentPage = '';
    switch(this.state.page){
      case 'landing':
        currentPage = <Landing changePage={this.changePage}/>
        break;
      case 'skillsDetail':
        currentPage = <SkillsDetail changePage={this.changePage}/>
        break;
       case 'skillInfo':
         currentPage = <SkillInfo changePage={this.changePage}/>
         break;
      default:
        currentPage = <Landing />
        break;
    }

    return (
      <div id="App" className="App">
        <Overlay />
        {currentPage}
      </div>
    );
  }
}

export default App;
