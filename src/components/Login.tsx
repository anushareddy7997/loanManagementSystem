import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { toast } from 'react-toastify';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box } from "@mui/material";

function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:8000/", {
        email, password
      })
        .then(res => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } })
          }
          else if (res.data == "notexist") {
            toast.error('User have not Signed up', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  }


  return (
    <Box sx={{  
      backgroundImage:
        "linear-gradient(to right,#043324,#104131, #05402d)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "right",
      position: "relative",
      pb: { xs: 8, md: 10 },
      height:"662px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <div className="login-form-container">
        <ToastContainer />
        <h1>Login <LockOpenIcon /></h1>
        <form action="POST" className="login-form">
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" autoComplete="true" />
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
          <input type="submit" onClick={submit} />

        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup" className="link">Signup Page</Link>

      </div>
    </Box>
  )
}

export default Login