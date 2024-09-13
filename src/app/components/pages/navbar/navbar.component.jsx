import React, { useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "../navbar/submenu/Submenu";
import "../navbar/navbar.component.css";
import "../../../../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const submenuItems = {
    videos: [
      { label: "Gameplays", link: "/videos" },
      { label: "Programação", link: "/programacao" },
    ],
    news: [
      { label: "News sobre Games", link: "/news/games" },
      { label: "News sobre Programação", link: "/news/programacao" },
    ],
    podcasts: [
      { label: "Podcasts sobre Games", link: "/podcasts/games" },
      { label: "Podcasts sobre Programação", link: "/podcasts/programacao" },
    ],
    playlists: [
      { label: "Gameplays", link: "/playlists/gameplays" },
      { label: "Programação", link: "/playlists/programacao" },
      { label: "Podcasts", link: "/playlists/podcasts" },
      { label: "Lives", link: "/playlists/lives" },
    ],
    lives: [
      { label: "Gameplays", link: "/lives/gameplays" },
      { label: "Programação", link: "/lives/programacao" },
      { label: "Podcasts", link: "/lives/podcasts" },
    ],
    redesSociais: [
      { label: "Instagram", link: "/redes/instagram" },
      { label: "YouTube", link: "/redes/youtube" },
      { label: "X", link: "/redes/x" },
    ],
  };

  return (
    <header>
      <div className="topbar">
        <nav>
          <ul>
            <li>
              <a href="https://youtube.theNettko.com">youtube.theNettko.com</a>
            </li>
          </ul>
        </nav>
        <div className="account">
          <a href="#assine">Assine Já</a>
          <a href="#conta">Conta theNettko</a>
        </div>
      </div>

      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span>
          <span className="menu-text">Menu</span>
        </div>
        <div className="brand">
          <h1>THENETTKO</h1>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>

            <Submenu title="Vídeos" items={submenuItems.videos} />
            <Submenu title="News" items={submenuItems.news} />
            <Submenu title="Podcasts" items={submenuItems.podcasts} />
            <Submenu title="Playlists" items={submenuItems.playlists} />
            <Submenu title="Lives" items={submenuItems.lives} />
            <Submenu title="Redes Sociais" items={submenuItems.redesSociais} />

            {/* Outros itens sem submenu */}
            <li>
              <Link to="/member" onClick={closeMenu}>
                Seja Membro
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Sobre Nós
              </Link>
            </li>
            <li className="sidebar-special">
              <a href="#assine">Assine Já</a>
            </li>
            <li className="sidebar-special">
              <a href="#conta">Conta theNettko</a>
            </li>
            <li className="sidebar-special">
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
