import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


export default function ProfileCard() {
    const user = useSelector(state => state.user);
    console.log("user: ", user);
   
    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: "cover",
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#63694e",
            padding: 10,
            borderRadius:6
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 32, fontFamily: 'oswald', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                    Your Profile
                </Typography>

                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    {/* Your name is: {user.firstName} */}
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    Name goes here.
                </Typography>


                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    Your email is:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    Email goes here.
                </Typography>



                <Typography variant="h5" component="div" fontFamily="oswald" fontWeight="bold">
                    Your profile photo URL is:
                </Typography>
                <Typography variant="h5" component="div" fontFamily="oswald" mb={2}>
                    URL goes here.
                </Typography>



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
