//Styles
import styles from './Menu2.module.css'

//Routes
import { Link } from 'react-router-dom'

//Hooks
import { useState } from 'react'

//Icons
import user from './images/usuario.png'
import singup from './images/singup.png'
import login from './images/login.png'


export const Menu2 = () => {

  const [open, setOpen] = useState(false)

  //Close clicking outside
  const closeMenu = () => {
    const menuBox = document.getElementById('box')
    document.addEventListener('click', (e) => {
      if(!menuBox.contains(e.target)){
        setOpen(false)
      }
    })
  }
  closeMenu()

  return (
    <div className="App" id='box'>
      <div className={styles.menu_container }>

        <div className={styles.menu_trigger} onClick={()=>{setOpen(!open)}}>
          <img src={user} alt='avatar'/>
        </div>

        <div className={`${styles.dropdown_menu} ${open? styles.active : styles.inactive}`} >
          <h3>Guest</h3>

          <ul>
            <li className={styles.dropdownItem}>
              <img src={login} alt='user' className={styles.dropdownItemimg} />
              <Link className={styles.a_menu} to='/login'>Login</Link>
            </li>

            <li className={styles.dropdownItem}>
              <img src={singup} alt='user' className={styles.dropdownItemimg} />
              <Link className={styles.a_menu} to='/register'>Sign up</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

