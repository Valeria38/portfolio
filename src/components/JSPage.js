import React from 'react';

class JSPage extends React.Component {
  render() {
    return (
      <div className="js-page">
        <h2>My JavaScript Projects:</h2>
        <div className="js-page__project-container">
        <a href="https://valeria38.github.io/Tic-tac-toe/" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://valeria38.github.io/Tic-tac-toe/" target="_blank">Preview</a>
                <a href="https://github.com/Valeria38/Tic-tac-toe/tree/gh-pages">Github</a>
              </div>
            </div>
          </a>
          <a href="https://valeria38.github.io/15-puzzle/" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://valeria38.github.io/15-puzzle/" target="_blank">Preview</a>
                <a href="https://github.com/Valeria38/15-puzzle/tree/gh-pages" target="_blank">Github</a>
              </div>
            </div>
          </a>
          <a href="https://codepen.io/Valeria38/pen/NezmKB?editors=0010" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://codepen.io/Valeria38/pen/NezmKB?editors=0010">Preview</a>
              </div>
            </div>
          </a>
          {/* <a href="https://codepen.io/Valeria38/pen/wRYZrq" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://codepen.io/Valeria38/pen/wRYZrq">Preview</a>
              </div>
            </div>
          </a> */}
          {/* <a href="https://codepen.io/Valeria38/pen/qgbXKo?editors=0010" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://codepen.io/Valeria38/pen/qgbXKo?editors=0010">Preview</a>
              </div>
            </div>
          </a> */}
          {/* <a href="https://codepen.io/Valeria38/pen/RvKqEm?editors=0011" target="_blank">
            <div className="js-page__project">
              <div className="layer">
                <a href="https://codepen.io/Valeria38/pen/RvKqEm?editors=0011">Preview</a>
              </div>
            </div>
          </a> */}
        </div>  
      </div>
    )
  }
};

export default JSPage;