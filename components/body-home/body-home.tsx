import React from "react";
import "./body-home.css";
const Home: React.FC = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="image-container">
          <img
            src="assets/eu.jpg" 
            alt="Minha Foto"
            className="profile-image"
          />
        </div>
        <div className="text-container">
          <h2>Olá, eu sou Natã Girotto!</h2>
          <p>
            Sou desenvolvedor de software apaixonado por tecnologia e inovação.
            Tenho experiência em construir aplicações web modernas e
            responsivas. Meu foco é entregar interfaces que proporcionem uma
            ótima experiência ao usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
