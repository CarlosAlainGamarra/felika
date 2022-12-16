//Styles
import styles from './Social.module.css'

//Hooks
import { useState } from 'react'


export const Character = ({name, image, quote, description}) => {
  const [readMore, setReadMore] = useState('false')
  const [containerClass, setContainerClass] = useState('false')


  //handleClick
   const handleClick = () => {
    
    setContainerClass(!containerClass)
    setReadMore(!readMore)
  }


  return (
<>
    <div className={readMore? styles.characterContainer : styles.characterContainer2}>    
      <div className={readMore? styles.containerClass : styles.containerClass2}>
        <img className={styles.image} src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{quote}</p>
        </div>      
      </div>
      <div className={readMore? styles.contenido : styles.contenido2}>
        <img className={styles.imageThumb} src={image} alt={name} />
            
        <h4>{description.title}</h4>
        <br />
        <span>Height: {description.height}</span>
        <br />
        <span>Strength: {description.strength}</span>
        <p>{description.text}</p>
      </div> 
    </div> 
    <button onClick={handleClick} className={styles.btn}>{readMore? 'More' : 'Less'}</button>
</>
  )
}