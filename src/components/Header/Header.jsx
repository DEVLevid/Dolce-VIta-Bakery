import React, { useState } from 'react';
import styles from './styles.module.css';
import logo from '../../Assets/logo.png';

function Header() {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <div className={styles.container} id='header'>  
            <div className={styles.logo}>
                <a href="">
                    <img src={logo} alt="logo" className={styles.logoImg}/>
                </a>
            </div>
            <div className={styles.options}>
                <ul className={styles.option}>
                    <li>
                        <a href="#about" onClick={() => { setActiveNav("#about")}}>
                            <h3>Sobre nós</h3>
                        </a>
                    </li>
                </ul>

                <ul className={styles.option}>
                    <li>
                        <a href="#menu" onClick={() => { setActiveNav("#menu")}}>
                            <h3>Cardápio</h3>
                        </a>
                    </li>
                </ul>

                <ul className={styles.option}>
                    <li>
                        <a href="#contact" onClick={() => { setActiveNav("#contact")}}>
                            <h3>Contato</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
