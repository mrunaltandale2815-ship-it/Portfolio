
const projects = [
  {
    title: "DailyDish",
    description: "A recipe website where users can explore and share recipes.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    liveLink: "https://mrunaltandale2815-ship-it.github.io/DaliyDish/",
    githubLink: "https://github.com/mrunaltandale2815-ship-it",
  },
  {
    title: "QuizMaster",
    description: "An interactive quiz website with categories, scores, and results.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    liveLink: "https://mrunaltandale2815-ship-it.github.io/QuizMaster/",
    githubLink: "https://github.com/mrunaltandale2815-ship-it",
  },
  {
    title: "ChaloChale",
    description: "An online travel booking interface built using bootstrap.",
    image: "https://www.shutterstock.com/image-photo/airplanes-bus-train-ships-travel-260nw-2748873761.jpg",
    liveLink: "https://mrunaltandale2815-ship-it.github.io/ChaloChale/",
    githubLink: "https://github.com/mrunaltandale2815-ship-it",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Live Demo
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
