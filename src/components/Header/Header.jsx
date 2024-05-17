import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../Assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [activeNav, setActiveNav] = useState("#home");
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.container} id="header">
      <div className={styles.logo}>
        <a href="#home">
          <img src={logo} alt="logo" className={styles.logoImg} />
        </a>
      </div>
      <div className={styles.options}>
        <ul className={styles.option}>
          <li>
            <a href="#about" onClick={() => setActiveNav("#about")}>
              <h3>Sobre nós</h3>
            </a>
          </li>
        </ul>

        <ul className={styles.option}>
          <li>
            <a href="#menu" onClick={() => setActiveNav("#menu")}>
              <h3>Cardápio</h3>
            </a>
          </li>
        </ul>

        <ul className={styles.option}>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              <h3>Contato</h3>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.menuContainer}>
        <IoMenuSharp className={styles.menuIcon} onClick={toggleMenu} />
      </div>
      <div
        className={classNames(styles.menuContent, {
          [styles.showMenuContent]: openMenu,
        })}
      >
        <div className={styles.menuOptions}>
          <div className={styles.close}>
            <IoMdClose className={styles.closeIcon} onClick={toggleMenu} />
          </div>
          <ul className={styles.option}>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                  setOpenMenu(false);
                }}
              >
                <h3>Sobre nós</h3>
              </a>
            </li>
          </ul>

          <ul className={styles.option}>
            <li>
              <a
                href="#menu"
                onClick={() => {
                  setActiveNav("#menu");
                  setOpenMenu(false);
                }}
              >
                <h3>Cardápio</h3>
              </a>
            </li>
          </ul>

          <ul className={styles.option}>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                  setOpenMenu(false);
                }}
              >
                <h3>Contato</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
