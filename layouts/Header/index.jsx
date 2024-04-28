import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/router';
const Index = () => {
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
    const router = useRouter();
    console.log(router.pathname)
  return (
    <div className={styles.container}>

    <div className={styles.header}>
        <div className={styles.header__logo}>
            <Image src={headerData.logo.src} alt={headerData.logo.alt} width={500} height={500}/>
        </div>
        <div className={styles.header__hamburger}>
            <GiHamburgerMenu/>
        </div>
        
    </div>
    {router.pathname != "/" && <div className={styles.__spotLight}>
            <Image src={"/image/spotLight/SPOTLIGHT_EFFECT.png"} alt="spotLight" width={800} height={800} />
          </div>}
    </div>
  )
}

export default Index