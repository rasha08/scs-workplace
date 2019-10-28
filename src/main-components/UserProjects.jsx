import React from 'react';
import { map, isEmpty } from 'lodash';

import ProjectCard from '../helpers/ProjectCard';

const UserProjects = ({ projects }) => {
  return !isEmpty(projects) ? (
    <div className="container-fluid col-md-12">
      {map(projects, project => (
        <ProjectCard project={project} key={project.projectNameSlug} />
      ))}
    </div>
  ) : (
    <div />
  );
};

export default UserProjects;
