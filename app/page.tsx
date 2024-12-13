"use client";
import { useState } from 'react';
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
    className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mb-6"
  />
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
    Olá, me chamo Natã.
  </h1>
  <div className="flex flex-wrap justify-center gap-4 mt-4">
    <ContactLinks />
  </div>
</section>


   <section id="about" className="min-h-screen flex flex-col items-center bg-gray-800 text-white px-6 lg:px-16 py-12">
  <div className="w-full max-w-4xl my-auto">
    <div className="mb-8">
      <h2 className="text-4xl font-bold mb-4">Sobre eu</h2>
      <p className="text-gray-400 mb-4 text-lg">
  Sou um entusiasta de tecnologia que encontrou na programação uma paixão que vai além da carreira – é um hobby que me inspira todos os dias. Minha jornada no mundo da programação começou em 2019, motivada pela curiosidade e pelo desejo de entender como a tecnologia pode transformar ideias em soluções reais.
</p>
<p className="text-gray-400 mb-4 text-lg">
  Desde então, venho me dedicando a aprender e aplicar meus conhecimentos em projetos desafiadores e inovadores. Minha trajetória inclui experiências como:
</p>
<ul className="text-gray-400 mb-4 text-lg list-disc list-inside">
  <li>Desenvolvimento de aplicativos completos: Participando de todas as etapas, desde a ideia inicial até a implementação final.</li>
  <li>Automação de processos: Explorando maneiras de simplificar tarefas complexas e aumentar a eficiência por meio de ferramentas e scripts personalizados.</li>
  <li>Trabalhos acadêmicos: Incluindo um TCC focado no desenvolvimento de software de gestão acadêmica moderna, que reforçou minha capacidade de resolver problemas práticos com tecnologia.</li>
</ul>
<p className="text-gray-400 mb-4 text-lg">
  Sou uma pessoa curiosa, que acredita no aprendizado contínuo e na importância de compartilhar conhecimento. Quando não estou codando, gosto de explorar novas tecnologias e acompanhar tendências no mundo da programação.
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
