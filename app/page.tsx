"use client";
// import { useState } from 'react';
import StacksSection from './components/stack-section';
import ContactLinks from './components/contact-links';
import ProjectsSection from './components/project-section';
import Navbar from './components/navbar-component';

export default function LandingPage() {

  return (
    <main>
      <Navbar/>
      <section
  id="home"
  className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white scroll-mt-20 px-4"
>
  <img
    src="assets/eu.jpg"
    alt="Foto de Natã"
    className="w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mb-6"
  />
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
    Olá, me chamo Natã
  </h1>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
  Desenvolvedor Full-Stack
  </h1>
  <div className="flex flex-wrap justify-center gap-4 mt-4">
    <ContactLinks />
  </div>
</section>


<section id="about" className="min-h-screen flex flex-col items-center bg-gray-800 text-white px-6 lg:px-16 py-24">
  <div className="w-full max-w-4xl my-auto">
    <div className="mb-8">
      <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
      <p className="text-gray-400 mb-4 text-lg">
        Sou Natã Tidioli Girotto, um desenvolvedor formado em Gestão de Tecnologia da Informação pela FATEC São Sebastião e com formação técnica em Informática pelo Instituto Federal de São Paulo (IFSP). Comecei minha jornada na programação em 2019, motivado pela curiosidade e pelo desejo de transformar ideias em soluções práticas e inovadoras.
      </p>
      <p className="text-gray-400 mb-4 text-lg">
        Desde então, venho acumulando experiências significativas, como:
      </p>
      <ul className="text-gray-400 mb-4 text-lg list-disc list-inside">
        <li>Ensino de informática na Prefeitura de Caraguatatuba, onde contribuí para o desenvolvimento de novas habilidades e incentivei o interesse pela área de TI.</li>
        <li>Desenvolvimento mobile na Hens Software, onde participei da criação de aplicativos utilizando Flutter, aplicando padrões como MVVM e Clean Code. Um dos destaques foi o NeoSIGA, um aplicativo acadêmico que otimizou a gestão acadêmica da FATEC São Sebastião.</li>
      </ul>
      <p className="text-gray-400 mb-4 text-lg">
        Minhas principais habilidades incluem:
      </p>
      <ul className="text-gray-400 mb-4 text-lg list-disc list-inside">
        <li>Desenvolvimento back-end com Node.js, Nest.js, PostgreSQL/MongoDB, Prisma e configuração de ambiente com Docker.</li>
        <li>Criação de interfaces front-end com React.js, Next.js e Flutter, além de desenvolvimento de widgets personalizados.</li>
        <li>Aplicação de boas práticas como Clean Code, MVVM e BLoC, garantindo projetos de alta qualidade e fácil manutenção.</li>
      </ul>
      <p className="text-gray-400 mb-4 text-lg">
        Minha formação e experiência refletem meu compromisso em entregar soluções inovadoras e eficientes. Programar é mais do que uma profissão para mim; é uma paixão que guia meu trabalho e me inspira a buscar novos desafios e conquistas.
      </p>
    </div>

    <div className="py-5">
      <StacksSection />
    </div>
  </div>
</section>



<section>
        <ProjectsSection/>
      </section>
    </main>
  );
}
