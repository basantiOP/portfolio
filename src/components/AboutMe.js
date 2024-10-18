import React from 'react';

const Skills = () => {
  return (
    <>
      {/* <h3>Skills</h3> */}
      <div className="skills-grid">
        <div className="skill">
          <span className="skill-name">C++</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-95">95%</div>
          </div>
        </div>

        <div className="skill">
          <span className="skill-name">Python</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-90">70%</div>
          </div>
        </div>

        <div className="skill">
          <span className="skill-name">Dart</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-90">90%</div>
          </div>
        </div>

        <div className="skill">
          <span className="skill-name">JavaScript</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-90">90%</div>
          </div>
        </div>

        <div className="skill">
          <span className="skill-name">Rest API</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-95">80%</div>
          </div>
        </div>

        <div className="skill">
          <span className="skill-name">Problem Solving</span>
          <div className="skill-bar">
            <div className="skill-level skill-level-90">90%</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
