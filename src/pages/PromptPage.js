import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import PromptCard from '../components/PromptCard'

// this page needs to connect to database to retrieve prompts and display them
// need a button to refresh the prompt?  or should it automatically populate when page is loaded?


const PromptPage = () => {
    return (
        <div>
            <Header />
            <Box id="prompt-main-container">
                <Typography mt={10} mb={6} fontFamily='oswald' fontSize={70}>
                    <PromptCard />
                </Typography>


            {/* this button when clicked should generate a new prompt */}
                <Button type="submit">Get a new prompt!
                </Button>

            </Box>
            <Footer position="relative" mb="0px" />
        </div>
    )
}

export default PromptPage
