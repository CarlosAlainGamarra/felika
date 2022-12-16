//Styles
import styles from './Social.module.css'

//Caracters
import { Character,  } from './Character'
import { characters } from './characters'

//Slider
import Slider from "react-slick"
import {settings} from '../../assets/slider'


export const Social = () => {



  return(
    <>
    <div className={styles.container}>
      <Slider {...settings}>
        {characters.map(character => {
          return(
            <Character 
              key={character.id} 
              name={character.name} 
              quote={character.quote} 
              image={character.image}
              description={character.description}
            />
          )
        })}
      </Slider>  
    </div> 
    </>
  )
}