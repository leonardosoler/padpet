import Typography from '@mui/material/Typography';
import React , {useState} from "react";
import GridInputFormCenter from '../../interface/GridInputFormCenter';
import ButtonSubmit from '../../interface/ButtonSubmit';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';

function LocalRegister() {
    const [local_name, set_local_name] = useState([])
    const [local, set_local] = useState([])

    const handleForm = async () => {
        set_local([])
    }

    return (
        <Box component="form"
         sx={{
            '& .MuiTextField-root': { m: 2 },
          }}>        
            <div className="UserRegister formLabel" align='center' >
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Cadastro de locais</Typography>
                        <GridInputFormCenter id="outlined-basic" label="Nome Completo" variant='outlined' style='spacing:50%'/>
                        <GridInputFormCenter id="outlined-basic" label="Email" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="Telefone" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="CPF" variant='outlined'/>
                    </CardContent>
                </Card>
                <Card  variant="outlined" sx={{ maxWidth: 1000, marginTop:5 }}>
                    <CardContent>
                        <Typography align='center' variant='h4' >Endereço</Typography>
                        <GridInputFormCenter id="outlined-basic" label="Rua e Número" variant='outlined' style='spacing:50%'/>
                        <GridInputFormCenter id="outlined-basic" label="Cidade" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="Estado" variant='outlined'/>
                        <GridInputFormCenter id="outlined-basic" label="CEP" variant='outlined'/>
                    </CardContent>
                </Card>

                <ButtonSubmit id="button-submit" value='Cadastrar' variant="contained" onClick={handleForm}/>
            </div>
        </Box>
    );
 };

export default LocalRegister;
    