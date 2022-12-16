//Styles
import styles from '../Auth.module.css'

//Router
import { Link, useNavigate } from 'react-router-dom'

//Formik-Yup
import { useFormik } from "formik"
import * as Yup from 'yup'

//Sweet Alert
import Swal from 'sweetalert2'

//UUID
import { v4 as uuidv4 } from 'uuid'


export const Login = () => {
  const navigate = useNavigate()
  
  //Submit
  const onSubmit = () => {
    const { userName, password } = values

    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(dat => { 
        let user = dat.data.find(elemento => elemento.first_name === userName)     
        let pass = dat.data.find(elemento => elemento.first_name === password)    
        if(user && pass){
          localStorage.setItem('token', uuidv4())
          localStorage.setItem('userName', userName)
          localStorage.setItem('avatar', user.avatar)
          localStorage.setItem('profile', JSON.stringify(user))
          navigate('/logged', { replace: true })
        }   
        else{
          Swal.fire({
            title: 'Oops! Wrong credentials',
            html: 'Try again',
            timer: 3000,
            timerProgressBar: true   
          })
        }     
    })
    resetForm()
  }


  //InitialValues
  const initialValues = {
    userName: '',
    password: ''
  }

  //Validation
  const required = 'Required field'

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required(required),
    password: Yup.string().required(required)
  })

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleSubmit, handleChange, handleBlur, touched, values, errors, resetForm } = formik



  return(  
    <div className={styles.fullContainer}>
      <div className={styles.container}>  
        <form onSubmit={handleSubmit} >
          <h1>Login</h1>

          <div>
            <label>User Name</label>
            <input 
              type='text' 
              name='userName'
              className={errors.userName && touched.userName ? styles.input_error : ''} 
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.userName && touched.userName &&
              <span className={styles.span_error}>{errors.userName}</span>
            }
          </div>

          <div>
            <label>Password</label>
            <input 
              type='password' 
              name='password'
              className={errors.password && touched.password ? styles.input_error : ''}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password &&
              <span className={styles.span_error}>{errors.password}</span>
            }
          </div>

          <div>
            <button type='submit'>Send</button>
          </div>

          <div>
            <span>Not a member yet? <Link to='/register'>Sign up</Link></span>
          </div>

          <div>
            <span>◄ Or go <Link to='/'>back</Link> to main </span>
          </div>

          <div>
            <p>
            User: Janet
            <br />
            Password: Janet 
            <br />
            Or any user from this <a href="https://reqres.in/api/users">list</a> /  Password = User name selected
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}