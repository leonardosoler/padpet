import { Card , CardContent, Typography} from '@mui/material';
import React from "react";


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
    