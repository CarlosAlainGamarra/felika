//Views
import { Login } from './views/Auth/Login/Login'
import { Register } from './views/Auth/Register/Register'
import { Logged } from './views/Logged/Logged'
import { Main } from './views/Main/Main'
import { Profile } from './views/Profile/Profile'


//Router
import { Routes, Route, Navigate } from 'react-router-dom'

//Animation
import { AnimatePresence, motion } from 'framer-motion'


//Auth
const RequireAuth = ({ children }) => {
  if(!localStorage.getItem('token')){
    return(
      <Navigate to='/' replace={true} />
    )
  }else{
    return children
  }
}

//AlreadyLogged
const AlreadyLogged = ({ children }) => {
  if(localStorage.getItem('userName')){
    return(
      <Navigate to='/' replace={true} />
    )
  }else{
    return children
  }
}


//Transition
const pageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0.6
  }
}


export const App = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path='/login' 
            element={
              <motion.div
              className='page'
              transition={{ duration: 1 }}
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}
            >   
              <AlreadyLogged><Login/></AlreadyLogged> 
            </motion.div>
            
            }
          />

          <Route path='/register' 
            element={
              <motion.div
              className='page'
              transition={{ duration: 1 }}
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}
            >
              <Register/>
            </motion.div>
            }
          />

          <Route path='/logged' 
            element={
              <motion.div
              className='page'
              transition={{ duration: 1 }}
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}

            >
              <Logged/>
            </motion.div>
            }
          />

          <Route path='/' element={<Main/>} />
                          
          <Route path='/profile' 
            element={
              <motion.div
              className='page'
              transition={{ duration: 1 }}
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}
            >
              <RequireAuth><Profile/></RequireAuth> 
            </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}


