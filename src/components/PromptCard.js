import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Axios from './utils/Axios';


// need to get random prompts from db to display here

export default function PromptCard() {

    const getPrompt = async (event) => {
        event.preventDefault();
        const response = await Axios.get('/prompt', );
        // console.log("api response: ", response);
        const fetchedPrompt = response.data;
        
    };


    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: "cover",
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#63694e",
            padding: 10,
            borderRadius: 6,
            boxShadow: 10
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Prompt of the Day
                </Typography>
                <Typography variant="h2" component="div" fontFamily="oswald">
                    Random prompt from database will go here. It should also refresh with a new prompt if the button below is clicked.
                </Typography>
            </CardContent>
        </Card>
    );
}
