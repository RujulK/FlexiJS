import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Stuff I have done</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Obsticle Avoiding Car</h3>
            <p>I have made a car, which goes around a specified track
                and avoids the objects that may come in its path.
            </p>
          </div>
          <div className="project-card">
            <h3>Pill Dispenser for Elderly</h3>
            <p>This was a pill dispenser project, made for
                elderly or specially abled people who have
                a hard time remembering, and eating the exact
                amount of pills which are to be consumed on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
