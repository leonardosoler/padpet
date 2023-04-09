import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../interface/GridInputFormCenter';
import ButtonSubmit from '../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';
import Api from '../api/pet/PetApi'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';




function PetRegister() {
    const baseURL = "http://localhost:8000/api/pet-register/";

    const [pet, setPet] = React.useState(null);
    const [name, setName] = React.useState('Teste');
    const [specie, setSpecie] = React.useState(1);
    const [race, setRace] = React.useState(0);
    const [age, setAge] = React.useState(11);
    const [speciesOptions, setSpeciesOptions] = React.useState([]);
    const [racesOptions, setRacesOptions] = React.useState([]);

    useEffect(() => {
        let a = Api.SpeciesListGet(setSpeciesOptions)
        let b = Api.RacesListGet(setRacesOptions)
      }, ['sua-api.com/options']);


    const handlerPostPet = async () => {
        const pet_data = {
            "name": name,
            "specie": specie,
            "race": race,
            "age": age,
        };
        Api.PetRegisterPost(pet_data)
    }

    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 2 },
            }}>
            <div className="UserRegister formLabel" align='center' >
                <Card variant="outlined" sx={{ maxWidth: 1000, marginTop: 5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Cadastro de Pet</Typography>
                        <GridInputFormCenter id="outlined-basic"
                            label="Nome"
                            variant='outlined'
                            style='spacing:50%'
                            onChange={(e) => setName(e.target.value)}
                        />
{/* 
                        <GridInputFormCenter id="outlined-basic"
                            label="Espécie"
                            variant='outlined'
                            onChange={setSpecie} />
 */}
                         <FormControl fullWidth>
                            <InputLabel id="select-label">Selecione</InputLabel>
                            <Select labelId="select-label" onChange={(e) => setRace(e.target.value)}>
                                {speciesOptions.map((option, index) => (
                                    <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        {/* <GridInputFormCenter id="outlined-basic"
                            label="Raça"
                            variant='outlined'
                            onChange={setRace} /> */}
                            <InputLabel id="select-label">Selecione</InputLabel>
                            <Select labelId="select-label" onChange={(e) => setRace(e.target.value)}>
                                {racesOptions.map((option, index) => (
                                    <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl> 

                        <GridInputFormCenter id="outlined-basic"
                            label="Idade"
                            variant='outlined'
                            onChange={(e) => setAge(e.target.value)}
                        />

                </CardContent>
                </Card>
                <Card variant="outlined" sx={{ maxWidth: 1000, marginTop: 5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Vincular a uma casa de adoção</Typography>
                        <GridInputFormCenter id="outlined-basic" label="lista de casas" variant='outlined' style='spacing:50%' />
                    </CardContent>
                </Card>


                <ButtonSubmit id="button-submit" value='Cadastrar' variant="contained" onClick={handlerPostPet}
                />
            </div>

        </Box>

    );
};

export default PetRegister;
