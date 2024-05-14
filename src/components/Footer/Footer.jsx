import React from "react";
import styles from "./styles.module.css";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.infoContainer}>
          <h3>Recursos</h3>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Entrega</a>
          </li>
          <li>
            <a href="">Preços</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.resources}>
          <h3>Empresa</h3>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>

      <div className={styles.mediaContainer}>
        <div className={styles.emailContainer}>
          <h4 className={styles.title}>
            Inscreva-se para saber das novidades!
          </h4>
          <div className={styles.inptContainer}>
            <input
              type="text"
              placeholder="Seu E-mail"
              className={styles.inpt}
            />
            <button className={styles.btn}>Inscreva-se</button>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h3>Redes Sociais</h3>
          <div className={styles.linkContainer}>
          <a href="">
            <RiInstagramFill />
          </a>
          <a href="">
            <SiFacebook />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          </div>
        </div>
      </div>
      <p>All rights reserved © DEVLevid</p>
    </div>
  );
};

export default Footer;
