import React from 'react';

const Project = ({ projectType, link, ghLink }) => {

  return (
    <>
      {projectType === 'react' ? (
        <a href={link} target="_blank">
          <div className="react-page__project">
            <div className="layer">
              <a href={link} target="_blank">Preview</a>
              <a href={ghLink} target="_blank">Github</a>
            </div>
          </div>
        </a>
      ) : projectType === 'js' ? (
        <a href={link} target="_blank">
          <div className="js-page__project">
            <div className="layer">
              <a href={link} target="_blank">Preview</a>
              {ghLink ? <a href={ghLink} target="_blank">Github</a> : ""}
            </div>
          </div>
        </a>
      ) : (
        <a href={link} target="_blank">
          <div className="layout-page__project">
            <div className="layer">
              <a href={link} target="_blank">Preview</a>
            </div>
          </div>
        </a>
      )}
    </>
  )
};

export default Project;