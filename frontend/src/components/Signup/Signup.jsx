import React from 'react'
import TextField from "@mui/material/TextField";
import { Alert, Button } from '@mui/material';
import './Signup.css'

const Signup = () => {


    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const [formError, setFormError] = React.useState('')
    const [msg, setMsg] = React.useState('')


    const ValidateFrom = () => {
        if (formData.name === "") {
            setFormError('name')
            setMsg('Please Enter Your Name')
        }
        else if (formData.email === "") {
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
        else if (formData.cpassword === "") {
            setFormError("cpassword")
            setMsg('Please Enter Your Confirm Password')
        }

        else if (formData.password !== formData.cpassword) {
            setFormError("cpassword")
            setMsg('Password and Confirm Password Not Match')
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
                        label="Full Name"
                        name="name"

                        onChange={(e) => handleFormData(e)}
                        onBlur={ValidateFrom}
                        variant="outlined"
                        style={{ width: "735px" }}
                        error={formError === 'name' ? true : false}


                    />
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
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        name="cpassword"

                        onChange={(e) => handleFormData(e)}
                        onBlur={ValidateFrom}
                        variant="outlined"
                        style={{ width: "735px" }}
                        error={formError === 'cpassword' ? true : false}
                    />

                    <Button variant="contained" onClick={HandleSubmitForm}>SignUp</Button>
                </div>
            </form>
        </div>

    )
}

export default Signup