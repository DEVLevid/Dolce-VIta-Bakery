import React from "react";
import styles from "./styles.module.css";
import { CiChat1 } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Scrolly from "../Scroll/Scrolly";

const Contact = () => {
  return (
   
      <div className={styles.container}>
      <h3>Converse com a gente!</h3>
      <div className={styles.contactContainer}>
      <Scrolly>
        <div className={styles.contactContent}>
            <div className={styles.contactOptions}>
              <button className={styles.btnOptions}>
                Via Chat <CiChat1 className={styles.iconBtn} />
              </button>
              <button className={styles.btnOptions}>
                Via Call <IoCall className={styles.iconBtn} />
              </button>
            </div>
          <div className={styles.contactInptContainer}>
            <h4>Mande uma mensagem!</h4>
            <div className={styles.inptGroup}>
              <input type="text" className={styles.inpt} />
              <div className={styles.placeholder}>Name</div>
            </div>

            <div className={styles.inptGroup}>
              <input type="text" className={styles.inpt} />
              <div className={styles.placeholder}>E-mail</div>
            </div>
            <div className={styles.inptGroup}>
              <textarea
                name=""
                id=""
                className={styles.textarea}
                placeholder="escreva aqui..."
              ></textarea>
              <div className={styles.placeholder}>Mensagem</div>
            </div>
            <button className={styles.btnSubmit}>
              Submit <FaArrowRight className={styles.iconSubmit} />
            </button>
          </div>
        </div>
        </Scrolly>
        <div className={styles.imgContainer}>
          <img src={require("../../Assets/BakeryCall.jpg")} alt="bakery" />
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
