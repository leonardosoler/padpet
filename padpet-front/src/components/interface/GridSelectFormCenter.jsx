import * as React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function GridSelectFormCenter(props) {
    return (
        <div className="input-label">
            <Grid container spacing={2} >
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    {/* <TextField id={props.id} label={props.label} variant={props.variant} onChange={props.onChange}  style={{'width':'100%'}}/> */}
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Selecione</InputLabel>
                        <Select labelId="select-label" onChange={props.onChange((e) => (e.target ? e.target.value: 0 ))} variant={props.variant}>
                            {props.options.length > 0 ?
                                props.options.map((option, index) => (
                                    <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                                ))
                            :
                                []}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
};