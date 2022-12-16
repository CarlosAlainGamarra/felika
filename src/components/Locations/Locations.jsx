//Styles
import styles from './Locations.module.css'

//Locations
import { Location } from './Location.jsx'
import {locations} from './locations.js'

//Slider
import Slider from "react-slick"
import {settings} from '../../assets/slider'


export const Locations = () => {
  return(
    <div>
      <Slider {...settings}>    
        
        {locations.map(location => {
          return(
          <div className={styles.locationsContainer}>
          <div className={styles.location}>
          <Location key={location.id} name={location.name} text={location.text} image={location.image}/>  
          </div>
        </div>
          )
        })}
      
      </Slider>
    </div>   
  )
}    

