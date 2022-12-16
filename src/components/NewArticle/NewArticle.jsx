//Styles
import styles from './Article.module.css'

//Slider
import Slider from "react-slick"
//import {settings} from '../../assets/slider'

//Articles
import { Article } from './Article.jsx'
import { articles } from './articles'


export const NewArticle = () => {

  return(
    <div>
      {articles.map(article => {
        return(
          <Slider>
            <div className={styles.newsContainer}>
              <div className={styles.article}>
              <Article key={article.id} title={article.title} text={article.text} image={article.image}/>  
            </div>
            </div>
          </Slider>
        )
      })}
    </div>
  )
}