import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./login.css";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '' 
    },

    validationSchema: Yup.object({
      username: Yup.string()
      .max(20, 'Name should be 20 characters or less!')
      .required('Username is required'),
      password: Yup.string()
      .min(4, 'Password must be at least 4 characters long')
      .max(12, 'Password should be 12 characters or less')
      .required('Password is required')
    }),

    

    onSubmit: (values) => {
      axios.post('/auth/login',values)
      .then(res => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      navigate('/')
    }
    });

  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="login-input"
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
        <label>Password</label>
        <input
          type="password"
          className="login-input"
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
        <button className="login-button" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}