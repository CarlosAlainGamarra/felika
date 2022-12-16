//Styles
import styles from './Profile.module.css'

//Icons
import home from './images/casa.png'

//Router
import { Link } from 'react-router-dom'

export const Profile = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))

  return (
    <div className={styles.profileContainer}>

      <div>
        <Link to='/' alt='Home'>
          <img src={home} className={styles.homeIcon} alt='home' />
        </Link>
      </div>   
      <div>
        <img src={localStorage.getItem('avatar')} className={styles.profileAvatar} alt="avatar" />
      </div>

      <div>
        <h2>First Name:</h2>
        <h1>{profile.first_name}</h1>
      </div>

      <div>
        <h2>Last Name:</h2>
        <h1>{profile.last_name}</h1>
      </div>

      <div>
        <h2>E-mail:</h2>
        <h1>{profile.email}</h1>
      </div>         
    </div>
  )
}
