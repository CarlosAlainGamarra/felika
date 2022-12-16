//Styles
import styles from '../Auth.module.css'

//Router
import { Link } from 'react-router-dom'

//Yup
import * as Yup from 'yup'

//Formik
import { useFormik } from "formik"



export const Register = () => {
  
  //Initial Values
  const initialValues = {
    userName: '',
    password: '',
    passwordRepeat: '',
    email: ''
  }

  //Submit
  const onSubmit = () => {

    fetch('https://reqres.in/api/users', {
      method: 'POST',
     
      body: JSON.stringify({
        username: values.userName,
        email: values.email,
        password: values.password,
        
      })
    })
      .then(response => response.json())
      .then(data => {
        alert('registered')  
      })
    resetForm()
  }

  //Validation

  const required = 'Required field'

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .min(4, 'Min 4 caracters')
      .required(required),
    password: Yup.string()
      .min(6, 'Min 6 caracters')
      .required(required),
    passwordRepeat: Yup.string().required(required),
    email: Yup.string().email('Enter a valid e-mail').required(required)
  })


  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const { handleSubmit, handleChange, handleBlur, touched, values, errors, resetForm } = formik


  return(
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>

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
            <label>E-mail</label>
            <input 
              type='email' 
              name='email' 
              className={errors.email && touched.email ? styles.input_error : ''} 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          {errors.email && touched.email && 
                <span className={styles.span_error}>{errors.email}</span>
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

          {/*<div>
            <label>Confirm Password</label>
            <input 
              type='password' 
              name='passwordRepeat' 
              value={values.passwordRepeat}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>*/}

          <div>
            <button type='submit'>Send</button>
          </div>

          <div>
            <span>Already a member? <Link to='/login'>Login</Link></span>
          </div>

          <div>
            <span>◄ Or go <Link to='/'>back</Link> to main </span>
          </div>
        </form>
      </div>
    </div>
  )
}