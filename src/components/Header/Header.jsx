//Styles
import styles from './Header.module.css'

//Components
import { Menu } from '../Menu/Menu'
import { Menu2 } from '../Menu2/Menu2'

//logo
import logo from './logo/logo.png'




export const Header = () => {


  return(
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img src={ logo } alt='logo' />
          <span>Felika</span>
        </div>
        
        {localStorage.getItem('userName')? <Menu /> : <Menu2 /> }     
      </div>    
  )
}