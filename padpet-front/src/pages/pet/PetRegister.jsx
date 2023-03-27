import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../../interface/GridInputFormCenter';
import ButtonSubmit from '../../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';








const baseURL = "http://localhost:8000/api/pet-register/";


function PetRegister() {

    // const [post_response, setPost] = React.useState(null);
    const [name, setName] = React.useState('');
    const [specie, setSpecie] = React.useState('');
    const [race, setRace] = React.useState('');
    const [age, setAge] = React.useState('');

    function PostAnimalRegisterApi() {
        const body = {'name': name,
                'specie': specie,
                'race': race,
                'age': age }
        axios.post(baseURL, body)
                // .then(response => setPost(response.data));
        
    }

    return (
        <Box component="form"
         sx={{
            '& .MuiTextField-root': { m: 2 },
          }}>        
            <div className="UserRegister formLabel" align='center' >
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Cadastro de Pet</Typography>
                   
                        <GridInputFormCenter id="outlined-basic" label="Nome" variant='outlined' style='spacing:50%' onChange={setName}/>
                        <GridInputFormCenter id="outlined-basic" label="Espécie" variant='outlined' onChange={setSpecie}/>
                        <GridInputFormCenter id="outlined-basic" label="Raça" variant='outlined' onChange={setRace}/>
                        <GridInputFormCenter id="outlined-basic" label="Idade" variant='outlined' onChange={setAge}/>
                    </CardContent>
                </Card>
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Vincular a uma casa de adoção</Typography>
                        <GridInputFormCenter id="outlined-basic" label="lista de casas" variant='outlined' style='spacing:50%'/>
                    </CardContent>
                </Card>
                {/* <button onClick={createPost}>Create Post</button> */}

                <ButtonSubmit id="button-submit" value='Cadastrar' variant="contained" onClick={PostAnimalRegisterApi}/>
            </div>

        </Box>
        
    );
 };

export default PetRegister;
    