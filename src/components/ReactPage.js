import React from 'react';

class ReactPage extends React.Component {
  render() {
    return (
      <div className="react-page">
        <h2>My React Projects:</h2>
        <div className="react-page__project-container">
          <a href="https://valeria38.github.io/react-tic-tac-toe/" target="_blank">
            <div className="react-page__project">
              <img src="https://github.com/Valeria38/portfolio/tree/develop/img/tictactoe.jpg" />
            </div>
          </a>
          <div className="react-page__project">To do application</div>
          <div className="react-page__project">Weather forecast</div>
        </div>  
      </div>
    )
  }
};

export default ReactPage;