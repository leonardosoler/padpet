import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function GridInputFormCenter(props)  {
    const [name,setName] = React.useState('');

    return (
      <div className="input-label">
        <Grid container spacing={2} >
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <TextField id={props.id} label={props.label} variant={props.variant} onClick={props.onClick} onChange={(e) => props.onChange(e.target.value)}  style={{'width':'100%'}}/>
            </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>    
    </div>
)};