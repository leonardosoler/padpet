import ButtonAppBar from '../interface/AppBar'
import img_head from '../../img/image10-1024x474.png'
import { Card , CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';
import React from "react";
import TextField from '@mui/material/TextField';
import GridInputFormCenter from '../interface/grid_input_form_center';
import ButtonSubmit from '../interface/ButtonSubmit';


function UserRegister() {
    return (
        <div className="UserRegister top-div">
            <Typography align='center' variant='body1'>Cadastro de usuário</Typography>
            <GridInputFormCenter id="outlined-basic" label="Nome" variant='outlined'/>
            <GridInputFormCenter id="outlined-basic" label="Segundo Nome" variant='outlined'/>
            <GridInputFormCenter id="outlined-basic" label="Email" variant='outlined'/>
            <GridInputFormCenter id="outlined-basic" label="Telefone" variant='outlined'/>
            <GridInputFormCenter id="outlined-basic" label="CPF" variant='outlined'/>
            <ButtonSubmit id="button-submit" value='Cadastrar' variant="contained" onClick=''/>
        </div>
    );
 };

export default UserRegister;
    