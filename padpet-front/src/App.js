import ButtonAppBar from './components/interface/app_bar';
import TemporaryDrawer from './components/interface/drawer.';
import { Card , CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';



function App() {
  return (
    <div className="App">
        <ButtonAppBar/>
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
}

export default App;
