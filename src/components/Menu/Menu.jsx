//Styles
import styles from './Menu.module.css'

//Routes
import { Link } from 'react-router-dom'

//Hooks
import { useState, useEffect } from 'react'

//Icons
import user from './images/usuario.png'
import logout from './images/switch.png'


export const Menu = () => {
  const [open, setOpen] = useState(false)

  //Handle Logout
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

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
      <div className={styles.menu_container} >
        <div className={styles.menu_trigger} onClick={()=>{setOpen(!open)}}>
          <img src={localStorage.getItem('avatar')} alt='avatar'/>
        </div>

        <div>
          <div className={`${styles.dropdown_menu} ${open?  styles.active : styles.inactive}`} >
            <h3>{localStorage.getItem('userName')}</h3>

            <ul>
                <li className={styles.dropdownItem}>
                  <img src={user} alt='user' className={styles.dropdownItemimg} />
                  <Link className={styles.a_menu} to='/profile'>My Profile</Link>
                </li>
              <li className={styles.dropdownItem} onClick={handleLogout}>
                <img src={logout} alt='switch' className={styles.dropdownItemimg} />
                <Link className={styles.a_menu} to='/'>Logout</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

