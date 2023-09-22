import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';


// Input factory with grid

export default function GridInputFormCenter(props)  {
  return (
    <div className="input-label">
        <Grid container spacing={2} >
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <TextField id={props.id} label={props.label} variant={props.variant} onChange={props.onChange}  style={{'width':'100%'}}/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>    
    </div>
)};