import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Footer from '../components/layoutComponents/Footer';
import Header from '../components/layoutComponents/Header';


// need a header and footer, possibly put into layout?
// text inputs for: firstname, lastname, email, password
// checkboxes for love language options
// input for photo url

function RegistrationPage() {

    //stuff for registration form
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



// stuff for checkboxes
    const [checkbox, setCheckbox] = useState({
        wordsOfAffirmation: false,
        actsOfService: false,
        qualityTime: false,
        physicalTouch: false,
        giftGiving: false,
    });
    const handleChange = (event) => {
        setCheckbox({
            ...checkbox,
            [event.target.name]: event.target.checked,
        });
    };
    const { wordsOfAffirmation, actsOfService, qualityTime, physicalTouch, giftGiving } = checkbox;



    return (
        <div>
            <Header />
            <form
                id="registration-form"
                action="submit"
                onSubmit={handleSubmit}
            >
                <Typography
                    mt="30px"
                    fontFamily="oswald"
                    fontSize="30px"
                >Create Your Account</Typography>

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


                <Box
                    sx={{ display: 'flex' }}
                    id="checkbox-group">
                    <FormControl sx={{ m: 3, }} component="fieldset" variant="standard">
                        <FormLabel
                            component="legend"
                            // fontFamily="oswald"
                        >Which prompts would you like to receive?</FormLabel>
                        <FormGroup>

                            <FormControlLabel
                                control={
                                    <Checkbox checked={wordsOfAffirmation} onChange={handleChange} name="words-of-affirmation" />
                                }
                                label="Words of Affirmation"

                            />

                            <FormControlLabel
                                control={
                                    <Checkbox checked={actsOfService} onChange={handleChange} name="acts-of-service" />
                                }
                                label="Acts of Service"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox checked={qualityTime} onChange={handleChange} name="quality-time" />
                                }
                                label="Quality Time"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox checked={physicalTouch} onChange={handleChange} name="physical-touch" />
                                }
                                label="Physical Touch"
                            />

                            <FormControlLabel
                                control={
                                    <Checkbox checked={giftGiving} onChange={handleChange} name="gift-giving" />
                                }
                                label="Gift Giving"
                            />
                        </FormGroup>
                    </FormControl>
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
