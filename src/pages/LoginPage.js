import { Box, Button, Typography, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import Axios from '../components/utils/Axios'

// login a user
//      get email and password
//      send login request
//          handle response from api


const LoginPage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSubmit = async (event) => {
        // make sure form is correct, validation
        event.preventDefault();
        console.log('button clicked')
        // send email and password
        const response = await Axios.post('/login', {credentials: loginForm});
        
        
        setIsSignedIn(true);
        console.log("is signed in: ", isSignedIn);
    };

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });



    return (
        <div>
            <Header />

            <form
                id="login"
                action="submit"
                onSubmit={handleSubmit}
            >
                <Typography
                    mt="30px"
                    fontFamily="oswald"
                    fontSize="30px"
                >Login</Typography>


                <Box mb={4}>
                    <TextField
                        id="email"
                        label="email"
                        autoComplete="email"
                        value={loginForm.email}
                        onChange={(event) => setLoginForm({ ...loginForm, email: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <TextField
                        id="password"
                        label="password"
                        type="password"
                        value={loginForm.password}
                        onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })}
                        required
                    />
                </Box>

                <Box>
                    <Button type="submit" onClick={handleSubmit}>Login</Button>
                </Box>

                <Box>
                    <Link to="/register-user">
                        <Button
                            type="submit"
                        >Create Account</Button>
                    </Link>
                </Box>





                {/* {error && (
                    <Box border="1px solid red" borderRadius="5px" p={3} pb={2}>
                        <Typography textAlign="center">{error}</Typography>

                    </Box>
                )} */}
            </form>





            <Footer position="static" mb="0px" />
        </div>
    )
}

export default LoginPage
