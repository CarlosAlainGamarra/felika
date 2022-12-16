//Styles
import styles from './Search.module.css'

//Hooks
import { useState} from "react"




export const Search = ({handleSearch, showAll}) => {
  const [valor, setValor] = useState('')

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(valor)
    setValor('') 
  }


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}  className={styles.searchContainer} id='12345'>
        <input 
          type='text' 
          name='search' 
          placeholder='Find by user' 
          value={valor}  
          onChange={e => setValor(e.target.value)} 
          className={styles.searchInput}       
        />
        <button className={styles.searchButton}>Go!</button>
        
      </form>
      <button className={styles.showAll} onClick={showAll}>Show all</button>
    </div>
  )
}