//Styles
import styles from './Carousel.module.css'

//Slider
import Slider from "react-slick"
import {carouselSettings} from '../../assets/slider'


export const Carousel = () => {

  return (
 
  <div className={styles.carousel_container}>
        <Slider {...carouselSettings}>
            <a href="#" className={styles.bandLink}><span>Check some news now!</span></a>
            
            <a href="#" className={styles.bandLink}><span>Promotions</span></a>
            
            <a href="#" className={styles.bandLink}><span>Fanzine and moore</span></a>
            
        </Slider>
  </div>



  )
}