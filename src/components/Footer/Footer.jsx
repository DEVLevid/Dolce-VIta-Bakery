import { useState } from "react";
import styles from "./styles.module.css";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [activeNav, setActiveNav] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
  };
  return (
    <div className={styles.container} id="footer">
      <div>
        <ul className={styles.infoContainer}>
          <h3>Recursos</h3>
          <li>
            <a>Perguntas Frequentes</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Entrega</a>
          </li>
          <li>
            <a>Preços</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.resources}>
          <h3>Empresa</h3>
          <li>
            <a href="#home" onClick={() => setActiveNav("#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveNav("#about")}>
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setActiveNav("#menu")}>
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              Contato
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.mediaContainer}>
        <div className={styles.emailContainer}>
          <h4 className={styles.title}>
            Inscreva-se para saber das novidades!
          </h4>
          <form onSubmit={handleSubmit}>
            <div className={styles.inptContainer}>
              <input
                type="text"
                placeholder="Seu E-mail"
                className={styles.inpt}
                required={true}
              />
              <button className={styles.btn} type="submit">Inscreva-se</button>
            </div>
            {!isEmailValid && (
              <div className={styles.emailValidation}>
                <p className={styles.emailMessage}>
                  Por favor digite um email válido!
                </p>
              </div>
            )}
          </form>
        </div>

        <div className={styles.socialMedia}>
          <h3>Redes Sociais</h3>
          <div className={styles.linkContainer}>
            <a>
              <RiInstagramFill />
            </a>
            <a>
              <SiFacebook />
            </a>
            <a>
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
