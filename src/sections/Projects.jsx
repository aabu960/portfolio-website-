import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Task Manager API",
    description: "A REST API for managing tasks with authentication.",
    image: "https://via.placeholder.com/300", // Replace with actual project image
    link: "https://github.com/aabu960/task-manager-api",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    image: "https://via.placeholder.com/300",
    link: "https://yourportfolio.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
