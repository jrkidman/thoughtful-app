import { Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/layoutComponents/Footer'
import Header from '../components/layoutComponents/Header'
import Axios from '../components/utils/Axios'

// add a prompt
//      get prompt and category
//      send request via api

// need backend route to add prompt


const AddPromptPage = (e) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        // send prompt and category, will be an axios.post call
        const response = await Axios.post('/add-prompt', newPrompt);
        console.log("api response: ", response);
        console.log("newPrompt.prompt: ", newPrompt.prompt);
        console.log("newPrompt.category: ", newPrompt.category);

    };

    //get category selection from dropdown
    // const [category, setCategory] = useState("");
    // const handleChange = (event) => {
    //     setCategory(event.target.value);
    //     console.log("category inside handleChange: ", category);
    // };


    const [newPrompt, setNewPrompt] = useState({
        prompt: '',
        category: '',
    });
    // console.log("category after: ", category);



    return (
        <div>
            <Header />

            <form
                id="new-prompt"
                action="submit"
                onSubmit={handleSubmit}
            >
                <Typography
                    mt="30px"
                    fontFamily="oswald"
                    fontSize="30px"
                >Add A New Prompt</Typography>


                <Box mb={4}>
                    <TextField
                        id="prompt"
                        multiline
                        minRows={3}
                        maxRows={Infinity}
                        width={8}
                        label="prompt"
                        value={newPrompt.prompt}
                        onChange={(event) => setNewPrompt({ ...newPrompt, prompt: event.target.value })}
                        required
                    />
                </Box>


                <Box>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 230}}>
                            <InputLabel id="category-label">Love Language Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={newPrompt.category}
                                label="Category"
                                // onChange={handleChange}
                                onChange={(event) => setNewPrompt({ ...newPrompt, category: event.target.value })}


                            >
                                <MenuItem
                                    value="words of affirmation"

                                >
                                    Words of Affirmation
                                </MenuItem>

                                <MenuItem
                                    value="physical touch"
                                >
                                    Physical Touch
                                </MenuItem>

                                <MenuItem
                                    value="acts of service"
                                >
                                    Acts of Service
                                </MenuItem>

                                <MenuItem
                                    value="quality time"
                                >
                                    Quality Time
                                </MenuItem>

                                <MenuItem
                                    value="gift giving"
                                >
                                    Gift Giving
                                </MenuItem>
                                {/* {console.log("category value: ", category)} */}
                            </Select>
                        </FormControl>
                    </div>

                </Box>

                <Box>
                    <Button type="submit" onClick={handleSubmit}>Add Prompt</Button>
                </Box>






            </form>





            <Footer position="static" mb="0px" />
        </div>
    )
}

export default AddPromptPage
