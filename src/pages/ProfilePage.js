import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import ProfileCard from '../components/ProfileCard'


//what is going to go on this page anyway?

const ProfilePage = () => {
    return (
        <div >
            <Header />
                <ProfileCard />










            
            {/* <div id="profile-main-container">
                <Box mt={6}>
                    <Typography
                        mt="30px"
                        fontFamily="oswald"
                        fontSize="30px"
                        >
                        Your Profile
                    </Typography>
                </Box>

                <Box>
                    <Typography mt={3}>
                        Fucking first and last name from db here.
                    </Typography>
                </Box>

                <Box>
                    <Typography mt={3}>
                        Fucking email from database here.
                    </Typography>
                </Box>

                <Box>
                    <Typography mt={3}>
                        Fucking photo from database here.
                    </Typography>
                </Box>

                <Box>
                    <Typography mt={3} mb={3}>
                        Fucking prompt selections from database here.
                    </Typography>
                </Box>

 */}
            {/* </div> */}
            
            <Box display="flex" justifyContent="center">
                    <Link to="/edit-profile" >
                        <Button>Edit Profile</Button>
                    </Link>
                </Box>
            <Footer />
        </div>
    )
}

export default ProfilePage
