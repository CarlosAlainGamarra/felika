//Styles
import styles from './Footer.module.css'

//images
import facebook from './images/facebook.png'
import tiktok from './images/tik-tok.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'


export const Footer = () => {
  return(
    <div className={styles.footer_container}>
      <div className={styles.iconContainer}>
        <a href='#'><img src={instagram} alt='instagram' className={styles.icon}/></a>
        <a href='#'><img src={twitter} alt='twitter' className={styles.icon}/></a>
        <a href='#'><img src={facebook} alt='facebook' className={styles.icon}/></a>
        <a href='#'><img src={tiktok} alt='tiktok' className={styles.icon}/></a>
      </div>    
      <div className={styles.text}>
        Alain Gamarov 2022 All Rights Reserved ©
      </div>
    </div>
  )
}