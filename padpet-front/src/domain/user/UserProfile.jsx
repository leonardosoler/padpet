import ButtonAppBar from '../interface/AppBar'
import img_head from '../../img/image10-1024x474.png'
import { Card , CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';
import React from "react";
import TextField from '@mui/material/TextField';
import GridInputFormCenter from '../interface/grid_input_form_center';
import ButtonSubmit from '../interface/ButtonSubmit';


function UserProfile() {
    return (
        <div className="UserRegister top-div">
            <Card>
                <div class="user-information">
                    <Typography align='center' variant='h5'>Cadastro de usuário</Typography>
                    <Typography align='center' variant='body1'>Nome completo: Leonardo Soler</Typography>
                    <Typography align='center' variant='body1'>Nascimento: 01/01/2023</Typography>
                    <Typography align='center' variant='body1'>CPF:***.***.***-**</Typography>
                    <Typography align='center' variant='body1'>Email: leonardo-leoss@hotmail.com</Typography>
                </div>
            </Card>
            <Card>
                <div class="locals-information">
                    <Typography align='center' variant='h5'>Local</Typography>
                    <Typography align='center' variant='body1'>Nome: Anjos de patas</Typography>
                    <Typography align='center' variant='body1'>Tipo: Canil</Typography>
                    <Typography align='center' variant='body1'>Endereço: Rua x, 16, bairro, cidade, estado (RJ)</Typography>
                    <Typography align='center' variant='body1'>Quantidade de animais: 35</Typography>
                    <Typography align='center' variant='body1'></Typography>
                </div>
            </Card>
            
        </div>
    );
 };

export default UserProfile;
    