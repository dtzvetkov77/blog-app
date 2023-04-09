import axios from "axios";
import {  useNavigate } from "react-router-dom";
import "./register.css";
  import {useFormik} from 'formik';
  import * as Yup from 'yup';

export default function Register() {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '' 
    },

    validationSchema: Yup.object({
      username: Yup.string()
      .max(20, 'Name should be 20 characters or less!')
      .required('Username is required'),
      email: Yup.string()
      .matches(/^[a-zA-Z0-9_!#$%&amp;'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/, 'Email is not valid!')
      .required('Email is required'),
      password: Yup.string()
      .min(4, 'Password must be at least 4 characters')
      .max(12, 'Password should be 12 characters or less')
      .required('Password is required')

    }),


    onSubmit: (values) => {
      axios.post('/auth/register',values)
      navigate('/login')
    }
    });

  return (
    <div className="register">
      <h2 className="register-title">Register</h2>
      <form onSubmit={formik.handleSubmit} className="register-form">
        <label>Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your username..."
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? 
          <p className="error">{formik.errors.username }</p>
          : null
        }
        <label>Email</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your email..."
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         {formik.touched.email && formik.errors.email ? 
          <p className="error">{formik.errors.email }</p>
          : null
        }
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password..."
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}  
          onBlur={formik.handleBlur}        
        />
       {formik.touched.password && formik.errors.password ? 
          <p className="error">{formik.errors.password }</p>
          : null
        }
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}