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
                    <FormControl fullWidth style={{ marginLeft: '2.5%', marginTop: '2%'}}>
                        <InputLabel id="select-label" style={{ marginLeft: '2%'}}> {props.inputLabel}</InputLabel>
                        <Select labelId="select-label" onChange={(e) => props.onChange(e.target.value)} variant={props.variant}>
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