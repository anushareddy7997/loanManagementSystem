import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signup.css';
import { Box } from "@mui/material";

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/home", { state: { id: email } })
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
        <div className="signup-form-container">
            <h1>Signup</h1>
            <form action="POST" className="signup-form">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />

            <Link to="/login" className="link">Login Page</Link>

        </div>
        </Box>
    )
}

export default Signup