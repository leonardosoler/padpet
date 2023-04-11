import Typography from '@mui/material/Typography';
import React from "react";
import GridInputFormCenter from '../interface/GridInputFormCenter';
import GridSelectFormCenter from '../interface/GridSelectFormCenter';
import ButtonSubmit from '../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';
import Api from '../api/pet/PetApi'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TableList from '../interface/TableList';

function PetList() {

    // const [speciesOptions, setSpeciesOptions] = React.useState([]);
    const [petOptions, setPetOptions] = React.useState([]);

    useEffect(() => {
        const pet_list = Api.PetListGet(setPetOptions)
    }, [])


    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 2 },
            }}>
            <div className="UserRegister formLabel" align='center' >
                <Card variant="outlined" sx={{ maxWidth: 1000, marginTop: 5 }}>
                    <CardContent>
                        <TableList dados={petOptions} />
                    </CardContent>
                </Card>
            </div>

        </Box>

    );
};

export default PetList;
