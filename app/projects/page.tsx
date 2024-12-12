import { Navbar, ProjectCard } from "@/components";

const ProjectsPage = () => {
  const projects = [
    {
      imageSrc: '/images/project1.png',
      title: 'Projeto 1',
      description: 'Este é um breve resumo sobre o projeto 1.',
    },
    {
      imageSrc: '/images/project2.png',
      title: 'Projeto 2',
      description: 'Descrição do projeto 2 com mais detalhes.',
    },
    {
      imageSrc: '/images/project3.png',
      title: 'Projeto 3',
      description: 'Breve descrição do terceiro projeto.',
    },
  ];

  return (
  <main>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
    </main>
  );
};

export default ProjectsPage;
