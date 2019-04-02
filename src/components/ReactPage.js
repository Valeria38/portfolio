import React from 'react';

class ReactPage extends React.Component {
  render() {
    return (
      <div className="react-page">
        <h2>My React Projects:</h2>
        <div className="react-page__project-container">
          <a href="https://valeria38.github.io/react-tic-tac-toe/" target="_blank">
            <div className="react-page__project">
              <div className="layer">
                <a href="https://valeria38.github.io/react-tic-tac-toe/" target="_blank">Preview</a>
                <a href="https://github.com/Valeria38/react-tic-tac-toe/tree/develop" target="_blank">Github</a>
              </div>
            </div>
          </a>
          <a href="https://valeria38.github.io/react-todo-list/" target="_blank">
            <div className="react-page__project">
              <div className="layer">
                <a href="https://valeria38.github.io/react-todo-list/" target="_blank">Preview</a>
                <a href="https://github.com/Valeria38/react-todo-list/tree/develop" target="_blank">Github</a>
              </div>
            </div>
          </a>
          <a href="https://valeria38.github.io/react-weather-app/" target="_blank">
            <div className="react-page__project">
              <div className="layer">
                <a href="https://valeria38.github.io/react-weather-app/" target="_blank">Preview</a>
                <a href="https://github.com/Valeria38/react-weather-app/tree/develop" target="_blank">Github</a>
              </div>
            </div>
          </a>
        </div>  
      </div>
    )
  }
};

export default ReactPage;