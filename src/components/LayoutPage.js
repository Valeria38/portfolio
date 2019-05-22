import React from 'react';
import Project from './Project';

class LayoutPage extends React.Component {
  render() {
    return (
      <div className="layout-page">
        <h2>Layouts</h2>
        <div className="layout-page__project-container">
        <Project
          projectType="layout"
          link=""
        />

        <Project
          projectType="layout"
          link=""
        />

        <Project
          projectType="layout"
          link=""
        />
        </div>  
      </div>
    )
  }
};

export default LayoutPage;