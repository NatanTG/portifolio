import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiDart, SiFlutter, SiNestjs, SiPrisma, SiMysql, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "NeoSIGA",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
    ],
    image: "assets/neosiga.png",
  },
  {
    id: 2,
    name: "Projeto 2",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> }, 
    ],
    image: "assets/neosiga.png",
  },
  {
    id: 3,
    name: "Projeto 2",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> }, 
    ],
    image: "assets/neosiga.png",
  },
  {
    id: 4,
    name: "Projeto 2",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> }, 
    ],
    image: "assets/neosiga.png",
  },
  {
    id: 5,
    name: "Projeto 2",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> }, 
    ],
    image: "assets/neosiga.png",
  },
  {
    id: 6,
    name: "Projeto 2",
    description: "Um aplicativo mobile criado com Flutter para gestão acadêmica.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> }, 
    ],
    image: "assets/neosiga.png",
  },
  
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-gray-700 text-white px-6 lg:px-16 py-20"
    >
      <h2 className="text-4xl font-bold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-lg shadow-md text-sm transition-all"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
