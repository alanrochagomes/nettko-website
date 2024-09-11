import React from "react";
import banner from "../../../../assets/images/channel_banner.jpg";
import "../home/home.component.css";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <img src={banner} alt="Banner" className="banner" />
        <div className="hero-text">
          <h1 className="hero-title">Welcome to theNettko WebSite!</h1>
          <p className="hero-subtitle">Vídeos Exclusivos para Membros!</p>
          <a href="#games" className="cta-button">
            Assine Já
          </a>
        </div>
      </header>

      <section id="games" className="games-section">
        <h2 className="section-title">Trending Games</h2>
        <div className="game-grid">
          <div className="game-card">
            <img
              src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Valhalla</h3>
            <p className="game-description">
              Sinopse. O movimento do Grande Exército Pagão na Inglaterra
              durante as expansoes Vikings. O mapa mostra alguns dos reinos que
              o jogador pode explorar em Valhalla. Em Assassin's Creed Valhalla,
              a história acontece perto do final do século IX, em 873, durante
              as Invasões Vikings da Grã Bretanha.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4RKia895j9bcLcVEsLL1PB/dbd31dfe5049a8b65abbe13727d113ef/ac-rogue-heroBanner.jpg"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Assassin's Creed Rogue</h3>
            <p className="game-description">
              Também é o único Assassin's Creed a estrelar um Templário, pois o
              ex-Assassino Shay Cormac troca de lado e vivencia a outra ponta
              das táticas de Assassinos em um jogo contínuo de gato e rato.
              Lançado no mesmo ano que Rogue, Unity se passa durante a Revolução
              Francesa em um modelo de Paris em escala 1:1.
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://assets.nuuvem.com/image/upload/t_product_sharing_banner/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg"
              alt="Game 3"
              className="game-image"
            />
            <h3 className="game-title">Game Title 3</h3>
            <p className="game-description">
              Escrita por Sefton Hill, Martin Lancaster e Ian Ball, a história
              acontece um ano depois dos eventos de Arkham City, em que Batman,
              no pico máximo das suas habilidades, tem de defrontar o
              super-vilão Espantalho, que criou um ataque a Gotham City causando
              a evacuação da cidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
