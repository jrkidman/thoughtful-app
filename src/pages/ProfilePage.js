import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import ProfileCard from '../components/ProfileCard'
import { signOut } from '../reduxState/userSlice'


//what is going to go on this page anyway?
// needs to have a signout button somewhere

const ProfilePage = (e) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    console.log("user: ", user);
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
        // const response = await Axios.post('/login', {credentials: loginForm});
        // console.log("api response: ", response);
        
        dispatch(signOut(user));
        navigate('/login');
    };


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


            </div>
            
 */}

<Box display="flex" justifyContent="center">
                        <Button 
                            onClick={handleClick}
                            
                        >Log Out</Button>
                </Box>


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
