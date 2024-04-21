import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
const index = ({headingImage}) => {
    const {heading,heading_overlay} = headingImage;
  return (
    <div className={styles.heading}>
        <div className={styles.heading_overlay}>
        <Image src={heading_overlay} alt="heading_layer" width={700} height={700} />
        </div>
        <div className={styles.heading_text}>
        <Image src={heading} alt="heading_layer" width={700} height={700} />
        </div>
    </div>
  )
}

export default index