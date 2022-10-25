import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import PromptCard from '../components/PromptCard'
import Axios from '../components/utils/Axios'

// need a button to refresh the prompt?  or should it automatically populate when page is loaded?


const PromptPage = () => {
    const [promptData, setPromptData] = useState();
    const [error, setError] = useState();
    console.log('error: ', error)


    const navigate= useNavigate();
    // const refreshPrompt = navigate('/prompt');
    
        useEffect(() => {
            const fetchData = async () => {
                    try{
                    const response = await Axios.get('/prompt');
                    console.log("api response: ", response.data);
                    const fetchedData = response.data;
                    setPromptData(fetchedData);
                } catch (err){
                    setError(err.message);
                }
                };
                fetchData();            
        }, []);
        
    if(error){
        return 'everything broke!!';
    }

    if(!promptData){
        return null;
    }


    return (
        <div>
            <Header />
            <Box id="prompt-main-container">
                <Box mt={10} mb={6} display="flex" justifyContent="center">
                    <PromptCard promptData={promptData} />
                </Box>


            {/* this button when clicked should generate a new prompt */}
                <Button type="submit" 
                // onClick={refreshPrompt}
                >
                    Get a new prompt!
                </Button>

            </Box>
            <Footer position="relative" mb="0px" />
        </div>
    )
}

export default PromptPage
