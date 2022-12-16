//Styles
import styles from './Logged.module.css'

//Router
import { useNavigate } from 'react-router-dom'


export const Logged = () => {
  const navigate = useNavigate()
  const userName = localStorage.getItem('userName')

  const redirect = setTimeout(() => {
    navigate('/', { replace: true, })
  }, 2000)

  return(
    <div className={styles.container}>
      <img src={localStorage.getItem('avatar')} className={styles.avatar} alt="avatar" />
      <h1 className={styles.welcome}>{`Welcome ${userName}!`}</h1>
    </div>
  )
}