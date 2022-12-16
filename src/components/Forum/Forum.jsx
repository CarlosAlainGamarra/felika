//Styles
import styles from './Forum.module.css'

//Hooks
import { useEffect, useState } from "react"

//Infinite scroll
import InfiniteScroll from 'react-infinite-scroll-component'

//Components
import { Post } from '../Post/Post'
import { Spinner } from "../Spinner/Spinner"
import { Search } from "../Search/Search"
import { NewPost } from '../NewPost.jsx/NewPost'


//Ipsum
import { LoremIpsum } from 'react-lorem-ipsum'




export const Forum = () => {
const [posts, setPosts] = useState([])
const [page, setPage] = useState(1)
const [hasMore, setHasMore] = useState(true)
const [searchValue, setSearchValue] = useState('')
const searchValueCapitalize = searchValue.charAt(0).toUpperCase() + searchValue.slice(1)


//API Request
useEffect(() => {
  fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
  .then(response => response.json())
  .then(data => {
    setPosts(prevPosts => prevPosts.concat(data.results))
    if(posts.length === 100){
      setHasMore(false)
    }   
  })
  .catch((error) => {
    console.log(error)
  })
}, [page]);


//Search
  const handleSearch = (valor) => { 
    setSearchValue(valor) 
    setHasMore(false)  
  }

//Filter
  let searchPost = posts.find(elemento => elemento.name.first === searchValueCapitalize)

//Show All
  const showAll = () => {
    setSearchValue('')
    setHasMore(true)
  }

//Lorem
const [lorem, setLorem] = useState('')

useEffect(() => {
  setLorem (<LoremIpsum p={1}/>)
}, []);

//Publish
const [image, setImage] = useState('')
const [name, setName] = useState('')
const [text, setText] = useState('')

const publish = () => {
  setImage(localStorage.getItem('avatar'))
  setName(localStorage.getItem('userName'))
  setText(localStorage.getItem('text'))
}


//style={{ textAlign: 'center', color: 'red'}}
  return (
    <div className={styles.forumContainer}>
      <Search handleSearch={handleSearch} showAll={showAll} searchPost={searchPost} />
        {localStorage.getItem('userName')? <NewPost publish={publish} /> : ''}     
         
        <InfiniteScroll 
          dataLength={posts.length}
          next={() => setPage( (prevPage) => prevPage + 1 )}
          hasMore={hasMore}
          endMessage={
            <p style={{ textAlign: 'center', color: 'red', paddingBottom: '64px'}}>
              <b>Yay! You have seen it all</b>
            </p>          
          }
          loader={ <div style={{paddingBottom: '40px'}}><Spinner /></div> }
          >  
          
          
          {localStorage.getItem('userName') && localStorage.getItem('text')? 
            <div className={styles.mypost}>
              <Post  style={styles.mypost} name={localStorage.getItem('userName')} text={localStorage.getItem('text')} image={localStorage.getItem('avatar')} key={localStorage.getItem('userName')} id='1500'/>

            </div>
          : '' }
            
        
          {searchPost? <Post key={searchPost.id.value} image={searchPost.picture.medium} id={searchPost.id.value} text={lorem} name={searchPost.name.first}/>:
                   
          <div>
            <ul> 
              {posts.map((post) => {
                return (<Post key={post.id.value} image={post.picture.medium} id={post.id.value} text={lorem} name={post.name.first}/> )
              })}
            </ul>
          </div>
          
        }
      </InfiniteScroll>
    </div>   
      
  )
}