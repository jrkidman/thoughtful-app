import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Axios from './utils/Axios';


// need to get random prompts from db to  here

export default function PromptCard(props) {

    const { promptData } = props;

    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: 700,
            backgroundColor: "#63694e",
            borderRadius: 6,
            boxShadow: 10,
            m: 2,
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Prompt of the Day
                </Typography>
                <Typography
                    variant="h2"
                    component="div"
                    fontFamily="oswald"
                    fontSize={70}>
                        {promptData}
                </Typography>
            </CardContent>
        </Card>
    );
}
