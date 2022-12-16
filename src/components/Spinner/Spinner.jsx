//Styles
import styles from './Spinner.module.css'

//Icon
import spinner from './images/spinner.png'


export const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <img className={styles.spinner} src={spinner} alt='spinner' />
      <span>Loading...</span> 
    </div>
  )
}