import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../interface/GridInputFormCenter';
import GridSelectFormCenter from '../interface/GridSelectFormCenter';
import ButtonSubmit from '../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import { useEffect } from 'react';
import Api from '../api/pet/PetApi'

function PetRegister() {

    const [name, setName] = React.useState('Teste');
    const [specie, setSpecie] = React.useState();
    const [race, setRace] = React.useState();
    const [age, setAge] = React.useState(11);
    const [speciesOptions, setSpeciesOptions] = React.useState([]);
    const [racesOptions, setRacesOptions] = React.useState([]);

    useEffect(() => {
            const species_list = Api.SpeciesListGet(setSpeciesOptions)
            const races_list = Api.RacesListGet(setRacesOptions)
        }, [])
        
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

                        <Typography align='center' variant='h4' >Cadastro de Pet</Typography>
                        <GridInputFormCenter id="outlined-basic"
                            label="Nome"
                            variant='outlined'
                            style='spacing:50%'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <GridSelectFormCenter id="outlined-basic"
                            label="Espécie"
                            variant='outlined'
                            onChange={setSpecie}
                            state={specie}
                            options={speciesOptions ? speciesOptions : []} 
                            inputLabel="Selecione uma espécie" />

                        <GridSelectFormCenter id="outlined-basic"
                            label="Raça"
                            variant='outlined'
                            onChange={setRace}
                            options={racesOptions} 
                            inputLabel="Selecione uma raça" />

                        <GridInputFormCenter id="outlined-basic"
                            label="Idade"
                            variant='outlined'
                            onChange={(e) => setAge(e.target.value)}
                        />
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
