import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';


export default function ProfileCard() {
    const user = useSelector(state => state.user);
    // console.log("user: ", user);

    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: "cover",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#63694e",
            padding: 5,
            borderRadius: 6
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 32, fontFamily: 'oswald', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    Your Profile
                </Typography>

                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    Your name is:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    {user.firstName} {user.lastName}
                </Typography>


                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    Your email is:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    {user.email}
                </Typography>



                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    Your profile photo URL is:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    {user.profilePicture}
                </Typography>
                <Box>
                    <img style={{ width: '200px', height: '200px', objectFit: 'cover' }} src={user.profilePicture} alt="user" />
                </Box>




                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    You've chosen to receive prompts from the following love language categories:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald">
                    Choices go here.
                </Typography>






            </CardContent>
        </Card>
    );
}
