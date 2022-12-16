//Styles
import styles from './NewPost.module.css'

//Hooks
import { useState } from "react"



export const NewPost = ({publish}) => {
 const [text, setText] = useState('')


//Submit
  const handleSubmit = (e) => {
    publish()
    e.preventDefault()
    localStorage.setItem('text', text)
    setText('')
  }


  return(
    <form >
      <div className={styles.post}>
        <textarea 
          className={styles.textArea}
          value={text}
          name='newPost' 
          id='newPost' 
          cols="30" 
          rows="5"
          onChange={(e) => {setText(e.target.value)}}
          placeholder='Share your ideas...'
        />
        <button onClick={handleSubmit}  type='submit' className={styles.postButton} id='npb'>Post</button>
      </div>
    </form>
  )
}


