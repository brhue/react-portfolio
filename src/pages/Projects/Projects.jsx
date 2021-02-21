import "./Projects.css";

import Project from "../../components/Project/Project";
import jsQuizImage from "../../images/code-quiz.gif";
import weatherImage from "../../images/weather.png";
import cobaltImage from "../../images/cobalt.png";
import literateImage from "../../images/literate-listener.png";
import employeeImage from "../../images/employee-manager.png";
import workoutImage from "../../images/workout.png";

const projects = [
  {
    title: "Cobalt Canvas",
    github: "https://github.com/brhue/Cobalt",
    deployed: "https://cobalt-canvas.herokuapp.com/",
    image: cobaltImage,
  },
  {
    title: "Literate Listener",
    github: "https://github.com/brhue/literate-listener",
    deployed: "https://brhue.github.io/literate-listener/",
    image: literateImage,
  },
  {
    title: "Employee Manager",
    github: "https://github.com/brhue/employee-tracker",
    deployed: "",
    image: employeeImage,
  },
  {
    title: "Workout Tracker",
    github: "https://github.com/brhue/nosql-workout-tracker",
    deployed: "https://shielded-plains-15530.herokuapp.com/",
    image: workoutImage,
  },
  {
    title: "Weather Dashboard",
    github: "https://github.com/brhue/weather-dashboard",
    deployed: "https://brhue.github.io/weather-dashboard/",
    image: weatherImage,
  },
  {
    title: "JS Code Quiz",
    github: "https://github.com/brhue/js-code-quiz",
    deployed: "https://brhue.github.io/js-code-quiz",
    image: jsQuizImage,
  },
];

export default function Projects() {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}
