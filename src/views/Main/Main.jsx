//Styles
import styles from './Main.module.css'

//Components
import { Header } from '../../components/Header/Header'
import { Social } from '../../components/Social/Social'
import { Locations } from '../../components/Locations/Locations.jsx'
import { Footer } from '../../components/Footer/Footer'
import { NewArticle } from '../../components/NewArticle/NewArticle'
import { Forum } from '../../components/Forum/Forum'
import { Carousel } from '../../components/Carousel/Carousel'

//Hooks
import { useState } from 'react'
import Slider from 'react-slick'


export const Main = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(<NewArticle />)
  
  const [classNews, setClassNews] = useState(styles.navItemActive)
  const [classCaracters, setClassCaracters] = useState(styles.navItem)
  const [classLocations, setClassLocations] = useState(styles.navItem)
  const [classForum, setClassForum] = useState(styles.navItem)


//Handle Tabs
  const handleClick = (e) => {
    const tab = e.target.id
    switch (tab) {      

      case 'tab1':
        setOpen(true)
        setClassNews(styles.navItemActive)
        setClassCaracters(styles.navItem)
        setClassLocations(styles.navItem)
        setClassForum(styles.navItem)
        setValue(<NewArticle />)
        setOpen(false)
        break;
      
      case 'tab2':
        setOpen(true)
        setClassCaracters(styles.navItemActive)
        setClassNews(styles.navItem)
        setClassLocations(styles.navItem)
        setClassForum(styles.navItem)
        setValue(<Social />)
        setOpen(false)
        break;

      case 'tab3':
        setOpen(true)
        setClassLocations(styles.navItemActive) 
        setClassCaracters(styles.navItem)
        setClassNews(styles.navItem)
        setClassForum(styles.navItem)
        setValue(<Locations />)
        setOpen(false)
        break;

      case 'tab4':
        setOpen(true)
        setClassForum(styles.navItemActive) 
        setClassLocations(styles.navItem)  
        setClassCaracters(styles.navItem)
        setClassNews(styles.navItem)
        setValue(<Forum />)
        setOpen(false)
        break;

      default:
        setValue(<NewArticle />)
    }
  }


  return (
    <div className={styles.container}>  
      <Header />    
      <div className={styles.navContainer}>    
        <ul className={styles.navList}>
          <li className={classNews} onClick={handleClick} id='tab1'>What's new?</li>
          <li className={classCaracters} onClick={handleClick} id='tab2'>Characters</li>
          <li className={classLocations} onClick={handleClick} id='tab3'>Locations</li>
          <li className={classForum} onClick={handleClick} id='tab4'>Forum</li>
        </ul>
      </div>  

      <Carousel />
      {true ? value : <NewArticle />}
      <Footer />
    </div>
  )
}