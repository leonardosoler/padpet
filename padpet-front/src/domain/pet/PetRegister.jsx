import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../interface/GridInputFormCenter';
import ButtonSubmit from '../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';


const baseURL = "http://localhost:8000/api/register/";


function PetRegister() {

    // const [post_response, setPost] = React.useState(null);

    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     const article = {
    //         "username": "adminwewe",
    //         "email": "admewwein@bot.com",
    //         "password": "Password@123"
    //     };
    //     axios.post(baseURL, article)
    //         .then(response => setPost(response.data));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);


    return (
        <Box component="form"
         sx={{
            '& .MuiTextField-root': { m: 2 },
          }}>        
            <div className="UserRegister formLabel" align='center' >
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Cadastro de Pet</Typography>
                        <GridInputFormCenter id="outlined-basic" label="Nome" variant='outlined' style='spacing:50%'/>
                        <GridInputFormCenter id="outlined-basic" label="Espécie" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="Raça" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="Idade" variant='outlined'/>
                    </CardContent>
                </Card>
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Vincular a uma casa de adoção</Typography>
                        <GridInputFormCenter id="outlined-basic" label="lista de casas" variant='outlined' style='spacing:50%'/>
                    </CardContent>
                </Card>
                {/* <button onClick={createPost}>Create Post</button> */}

                <ButtonSubmit id="button-submit" value='Cadastrar' variant="contained" onClick=''/>
            </div>

        </Box>
        
    );
 };

export default PetRegister;
    