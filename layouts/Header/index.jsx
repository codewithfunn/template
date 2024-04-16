import React from 'react';
import styles from './styles.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";

const index = () => {
    const headerData = {
        logo:{
            src:"/logo.png",
            alt:"logo"
        },
        nav:[
            {
                name:"Home",
                href:"/"
            },
            {
                name:"About",
                href:"/about"
            },
            {
                name:"Contact",
                href:"/contact"
            },
            {
                name:"Blog",
                href:"/blog"
            }
        ]
    }
  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            LOGO
        </div>
        <div className={styles.header__hamburger}>
            <GiHamburgerMenu/>
        </div>
    </div>
  )
}

export default index