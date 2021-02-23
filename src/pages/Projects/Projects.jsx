import "./Projects.css";

import Project from "../../components/Project/Project";
import { projects } from "../../projects";

export default function Projects() {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
