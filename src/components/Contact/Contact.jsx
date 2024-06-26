import React, { useState } from "react";
import styles from "./styles.module.css";
import { CiChat1 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Scrolly from "../Scroll/Scrolly";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const toastify = () => {
    toast.success('Recebemos sua mensagem!', {
    });
  };

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
    toastify();
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className={styles.container} id="contact">
      <h3>Converse com a gente!</h3>
      <div className={styles.contactContainer}>
        <Scrolly>
          <div className={styles.contactContent}>
            <div className={styles.contactOptions}>
              <button className={styles.btnOptions}>
                <p>Via Chat</p> <CiChat1 className={styles.iconBtn} />
              </button>
              <button className={styles.btnOptions}>
                <p>Via Call</p> <IoCall className={styles.iconBtn} />
              </button>
            </div>
            <div className={styles.contactInptContainer}>
              <h4>Mande uma mensagem!</h4>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.inptGroup}>
                  <input
                    type="text"
                    className={styles.inpt}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required={true}
                  />
                  <div className={styles.placeholder}>Nome</div>
                </div>

                <div className={styles.inptGroup}>
                  <input
                    type="text"
                    className={styles.inpt}
                    value={email}
                    onChange={handleEmailChange}
                    required={true}
                  />
                  <div className={styles.placeholder}>E-mail</div>
                  {!isEmailValid && (
                    <div className={styles.emailValidation}>
                      <p className={styles.emailMessage}>
                        Por favor digite um email válido!
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.inptGroup}>
                  <textarea
                    className={styles.textarea}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Escreva aqui..."
                    required={true}
                  ></textarea>
                  <div className={styles.placeholder}>Mensagem</div>
                </div>
                <button className={styles.btnSubmit} type="submit">
                  Enviar <FaArrowRight className={styles.iconSubmit} />
                </button>
              </form>
            </div>
          </div>
        </Scrolly>
        <div className={styles.imgContainer}>
          <img
            src={require("../../Assets/BakeryCall.jpg")}
            alt="bakery"
          />
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
