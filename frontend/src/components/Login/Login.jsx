import React from 'react'
import TextField from "@mui/material/TextField";
import { Alert, Button } from '@mui/material';
import '../.Signup/Signup.css'

const Login = () => {


    const [formData, setFormData] = React.useState({

        email: "",
        password: "",

    });
    const [formError, setFormError] = React.useState('')
    const [msg, setMsg] = React.useState('')


    const ValidateFrom = () => {
        if (formData.email === "") {
            setFormError('email')
            setMsg('Please Enter Your Email')
        }
        else if (formData.email.includes("@") === false && formData.email.includes(".com") === false) {

            setFormError('email')
            setMsg('Please Enter Valid Email')

        }
        else if (formData.password === "") {
            setFormError("password")
            setMsg('Please Enter Your Password')
        }
        else if (formData.password.length > 6 && formData.password.length < 20) {

            setFormError('password')
            setMsg('Password must be 6 to 20 characters')

        }
        else {
            setFormError('')
            setMsg('')
        }
    }


    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const HandleSubmitForm = (e) => {
        e.preventDefault();
        if (msg === '' && formError === '') {
            console.log(formData)
        }

    }
    return (
        <div className="signupDiv">
            <h1>Signup</h1>
            {msg && <Alert variant="filled" severity="error">{msg}</Alert>}
            <form action="">
                <div className="signupdata">
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"

                        onChange={(e) => handleFormData(e)}
                        onBlur={ValidateFrom}
                        variant="outlined"
                        style={{ width: "735px" }}
                        error={formError === 'email' ? true : false}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        name="password"

                        onChange={(e) => handleFormData(e)}
                        onBlur={ValidateFrom}
                        variant="outlined"
                        style={{ width: "735px" }}
                        error={formError === 'password' ? true : false}
                    />

                    <Button variant="contained" onClick={HandleSubmitForm}>SignUp</Button>
                </div>
            </form>
        </div>

    )
}

export default Login;