import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function PromptCard() {
  return (
    <Card sx={{ 
        minWidth: 275, 
        maxWidth: "cover", 
        marginLeft:20, 
        marginRight:20,  
        backgroundColor: "#63694e",
        padding: 10,
        borderRadius:6
        }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Prompt of the Day
        </Typography>
        <Typography variant="h2" component="div" fontFamily="oswald">
          Prompt from database goes here. It might get really really really really really really long so let's check the sizing.
        </Typography>
      </CardContent>
    </Card>
  );
}
