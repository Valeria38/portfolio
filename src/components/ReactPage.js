import React from 'react';
import Project from './Project';

class ReactPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="react-page">
        <h2>React Projects</h2>
        <div className="react-page__project-container">
          <Project 
            projectType="react" 
            link="https://valeria38.github.io/react-tic-tac-toe/"
            ghLink="https://github.com/Valeria38/react-tic-tac-toe/tree/develop"
          />

          <Project 
            projectType="react" 
            link="https://valeria38.github.io/react-todo-list/"
            ghLink="https://github.com/Valeria38/react-todo-list/tree/develop"
          />

          <Project 
            projectType="react" 
            link="https://valeria38.github.io/react-weather-app/"
            ghLink="https://github.com/Valeria38/react-weather-app/tree/develop"
          />
        </div>  
      </div>
    )
  }
};

export default ReactPage;