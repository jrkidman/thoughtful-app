import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../components/layoutComponents/Footer';
import Header from '../components/layoutComponents/Header';


// need a header and footer, possibly put into layout?
// text inputs for: firstname, lastname, email, password
// select input for love language options
// input for photo url

function RegistrationPage() {

    const [userRegistrationForm, setUserRegistrationForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePicture: '',
        loveLanguageOptions: [],
    });

    const handleSubmit = async (event) => {
        // make sure form is correct, validation
        event.preventDefault();
    };


    return (
        <div>
            <Header />
            <form
                id="registration-form"
                action="submit"
                onSubmit={handleSubmit}
            >
                <Box mb={4}>
                    <TextField
                        id="firstName"
                        label="first name"
                        autoComplete="given-name"
                        sx={{ mt: "40px" }}
                        value={userRegistrationForm.firstName}
                        onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, firstName: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <TextField
                        id="lastName"
                        label="last name"
                        autoComplete="family-name"
                        value={userRegistrationForm.lastName}
                        onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, lastName: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <TextField
                        id="email"
                        label="email"
                        autoComplete="email"
                        value={userRegistrationForm.email}
                        onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, email: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <TextField
                        id="password"
                        label="password"
                        type="password"
                        value={userRegistrationForm.password}
                        onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, password: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <TextField
                        id="profilePicture"
                        label="profilePicture"
                        value={userRegistrationForm.profilePicture}
                        onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, profilePicture: event.target.value })}
                        required
                    />
                </Box>

                <Box mb={4}>
                    <Typography>What prompts would you like to receive?</Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Words of Affirmation" />
                        <FormControlLabel control={<Checkbox />} label="Acts of Service" />
                        <FormControlLabel control={<Checkbox />} label="Quality Time" />
                        <FormControlLabel control={<Checkbox />} label="Physical Touch" />
                        <FormControlLabel control={<Checkbox />} label="Gift Giving" />
                    </FormGroup>
                </Box>


                {/* {error && (
                    <Box border="1px solid red" borderRadius="5px" p={3} pb={2}>
                        <Typography textAlign="center">{error}</Typography>

                    </Box>
                )} */}
                <Box>
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
            <Footer />
        </div>
    );

}

export default RegistrationPage;
