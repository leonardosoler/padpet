import React from "react";
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import { useEffect } from 'react';
import Api from '../api/pet/PetApi'
    import TableList from '../interface/TableList';

function PetList() {

    // const [speciesOptions, setSpeciesOptions] = React.useState([]);
    const [petOptions, setPetOptions] = React.useState([]);

    useEffect(() => {
        const pet_list = Api.PetListGet(setPetOptions)
    }, [])

    let head_list = ['Id', 'Nome', 'Especie', 'Raça', 'Idade']
    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 2 },
            }}>
            <div className="UserRegister formLabel" align='center' >
                <Card variant="outlined" sx={{ maxWidth: 1000, marginTop: 5 }}>
                    <CardContent>
                        <TableList dados={petOptions} header_list={head_list} />
                    </CardContent>
                </Card>
            </div>

        </Box>

    );
};

export default PetList;
