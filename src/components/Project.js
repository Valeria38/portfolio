import React from 'react';

const Project = ({ projectType, link, ghLink }) => {
  return (
    <>
      {projectType === 'react' ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div className='react-page__project'>
            <div className='layer'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                Preview
              </a>
              <a href={ghLink} target='_blank' rel='noopener noreferrer'>
                Github
              </a>
            </div>
          </div>
        </a>
      ) : projectType === 'js' ? (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div className='js-page__project'>
            <div className='layer'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                Preview
              </a>
              {ghLink ? (
                <a href={ghLink} target='_blank' rel='noopener noreferrer'>
                  Github
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        </a>
      ) : (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div className='layout-page__project'>
            <div className='layer'>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                Preview
              </a>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default Project;
