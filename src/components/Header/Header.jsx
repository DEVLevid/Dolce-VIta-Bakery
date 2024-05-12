import React from 'react'
import styles from './styles.module.css'
import logo from '../../Assets/logo.png'

function Header() {
    return (
        <div className={styles.container}>  
            <div className={styles.logo}> <img src={logo} alt="logo" className={styles.logoImg}/></div>
            <div className={styles.options}>
                <ul className={styles.option}>
                    <li>
                        <h3>Sobre nós</h3>
                    </li>
                </ul>

                <ul className={styles.option}>
                    <li>
                        <h3>Cardápio</h3>
                    </li>
                </ul>

                <ul className={styles.option}>
                    <li>
                        <h3>Contato</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
