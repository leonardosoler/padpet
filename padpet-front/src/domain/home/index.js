import ButtonAppBar from '../interface/AppBar'
import img_head from '../../img/image10-1024x474.png'
import { Card , CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';
 import React from "react";

function Home() {
    return (
        <div className="App">
            <img src={img_head} alt="Logo" style={{ 'width':'100%'}}/>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Card >
                        <CardContent>
                                <Typography>Teste</Typography>
                        </CardContent> 
                    </Card>          
                </Grid>
                <Grid xs={6}>    
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                                <Typography> Teste 2 </Typography>
                        </CardContent> 
                    </Card>
                </Grid>
            </Grid>        
        </div>
    );
 };

export default Home;
    