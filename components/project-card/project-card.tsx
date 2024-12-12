import React from 'react';

interface ProjectCardProps {
  imageSrc: string; // Caminho da imagem
  title: string; // Título do projeto
  description: string; // Breve descrição do projeto
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Imagem */}
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      {/* Texto */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
