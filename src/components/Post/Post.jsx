//Styles
import styles from './Post.module.css'

//Hooks
import { useState } from 'react'

//Images
import like from './images/like.png'
import dislike from './images/dislike.png'

export const Post = ({image, name, id, clase, text, style}) => {
  const [liked, setLiked] = useState(false)
  const [classLike, setClassLike] = useState(true)


  const handleLike = (e) => { 
    const up = e.currentTarget.parentElement
    setLiked(!liked)
    setClassLike(!classLike)
    if(classLike === true){
      localStorage.setItem(`${up.id}`, up.id)
    }if(classLike === false){
      localStorage.removeItem(`${up.id}`) 
    }
  }



  return (
   
    <div className={`${styles.post_container} ${classLike} ${style}`} id={id}>
      <div className={styles.user_container}>
        <img src={image} alt='avatar' className={styles.avatar} />
        <h4 className={styles.name}>{name}</h4>
      </div>
      <div> 
        <span>{text}</span>
      </div>
      <div onClick={handleLike}>
        {liked === true || clase ==='yes'?
          <img src={like} className={styles.like} alt='like' /> : 
          <img src={dislike} className={styles.like} alt='dislike' />}
      </div>
    </div>
  )
}



