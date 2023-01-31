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
                <Grid xs={3}>
                    <Card sx={{maxWidth:600}}  variant="outlined">
                        <CardContent >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                teste
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                            </Typography>                        
                        </CardContent> 

                    </Card>          
                </Grid>
                <Grid xs={3}>    
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                teste
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                            </Typography>                           
                        </CardContent> 
                    </Card>
                </Grid>
                <Grid xs={3}>    
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                teste
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                            </Typography>                         
                        </CardContent> 
                    </Card>
                </Grid>
                <Grid xs={3}>    
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                teste
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                            </Typography>                         
                        </CardContent> 
                    </Card>
                </Grid>
            </Grid>   
            <Grid container>
                <Grid item>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        teste
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                    </Typography>                         
                </Grid>
                <Grid item>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        teste
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adote um cachorro, um gato, um coelho, você não tem limite de pets que você poderá ajudar
                    </Typography>                         
                </Grid>
            </Grid>     
        </div>
    );
 };

export default Home;
    