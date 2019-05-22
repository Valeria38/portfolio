import React from 'react';
import Project from './Project';

class JSPage extends React.Component {
  render() {
    return (
      <div className="js-page">
        <h2>JavaScript Projects</h2>
        <div className="js-page__project-container">
        <Project 
          projectType="js"
          link="https://valeria38.github.io/Tic-tac-toe/"
          ghLink="https://github.com/Valeria38/Tic-tac-toe/tree/gh-pages"
        />
        
        <Project 
          projectType="js"
          link="https://valeria38.github.io/15-puzzle/"
          ghLink="https://github.com/Valeria38/15-puzzle/tree/gh-pages"
        />

        <Project 
          projectType="js"
          link="https://codepen.io/Valeria38/pen/NezmKB?editors=0010"
        />

        <Project 
          projectType="js"
          link="https://codepen.io/Valeria38/pen/wRYZrq"
        />

        <Project 
          projectType="js"
          link="https://codepen.io/Valeria38/pen/qgbXKo?editors=0010"
        />

        <Project 
          projectType="js"
          link="https://codepen.io/Valeria38/pen/RvKqEm?editors=0011"
        />
        </div>  
      </div>
    )
  }
};

export default JSPage;