//Styles
import styles from './Locations.module.css'


export const Location = ({name, text, image}) => {
  return (
    <div>
      <img src={image} alt={name} className={styles.image}/>
      <div>
        <h3>{name}</h3>
        <span>
          {text}
        </span>
        <br />
        <br />
        <br />
        .
        <br />
        .
        <br />
        .
        <br />  
      </div>
    </div>
  )
}





