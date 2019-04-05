import React from 'react';

class LayoutPage extends React.Component {
  render() {
    return (
      <div className="layout-page">
        <h2>Layouts</h2>
        <div className="layout-page__project-container">
          <a href="" target="_blank">
            <div className="layout-page__project">
              <div className="layer">
                <a href="" target="_blank">Preview</a>
              </div>
            </div>
          </a>
          <a href="" target="_blank">
            <div className="layout-page__project">
              <div className="layer">
                <a href="" target="_blank">Preview</a>
              </div>
            </div>
          </a>
          <a href="" target="_blank">
            <div className="layout-page__project">
              <div className="layer">
                <a href="" target="_blank">Preview</a>
              </div>
            </div>
          </a>
        </div>  
      </div>
    )
  }
};

export default LayoutPage;