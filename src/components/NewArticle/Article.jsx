//Styles
import styles from './Article.module.css'

export const Article = ({ image, text, title }) => {
  return (
    <div>
      <img src={image} alt={title} className={styles.image}/>
      <div>
        <h3>{title}</h3>
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