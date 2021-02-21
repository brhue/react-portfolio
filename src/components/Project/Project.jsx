import "./Project.css";

export default function Project({ title, github, deployed, image }) {
  return (
    <div className="project-card">
      <h2 className="title">{title}</h2>
      <img src={image} alt={title} />
      <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">On Github</a>
        {deployed && <a href={deployed} target="_blank" rel="noopener noreferrer">Live Site</a>}
      </div>
    </div>
  );
}
