import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../interface/GridInputFormCenter';
import ButtonSubmit from '../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';
import PetRegister from '../api/pet';

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
                            onChange={setName}
                        />

                        <GridInputFormCenter id="outlined-basic"
                            label="Espécie"
                            variant='outlined'
                            onChange={setSpecie} />

                        <GridInputFormCenter id="outlined-basic"
                            label="Raça"
                            variant='outlined'
                            onChange={setRace} />

                        <GridInputFormCenter id="outlined-basic"
                            label="Idade"
                            variant='outlined'
                            onChange={setAge}
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
