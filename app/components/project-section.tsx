import { SiDart, SiFlutter, SiGoogleplay } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "NeoSIGA",
    description:
      "NeoSIGA é a solução definitiva para simplificar a vida acadêmica dos alunos. Com uma interface intuitiva e amigável, o aplicativo oferece acesso rápido e conveniente a uma série de recursos essenciais.",
    techStack: [
      { name: "Flutter", icon: <SiFlutter />, link: "https://flutter.dev/" },
      { name: "Dart", icon: <SiDart />, link: "https://dart.dev/" },
    ],
    youtubeLink: "https://www.youtube.com/embed/PD4X5gil1Dc", 
    thumbnail: "assets/projeto-images/neosiga.png", 
    storeLink: "https://play.google.com/store/apps/details?id=com.neosiga.neo_siga",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-gray-700 text-white px-6 lg:px-16 py-24"
    >
      <h2 className="text-4xl font-bold mb-6">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            {project.youtubeLink ? (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={project.youtubeLink}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-112 rounded-md" 
                ></iframe>
              </div>
            ) : (
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-lg shadow-md text-sm transition-all"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex gap-2">
                {project.storeLink && (
                  <a
                    href={project.storeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm shadow-md transition-all"
                  >
                    <SiGoogleplay />
                    Play Store
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
