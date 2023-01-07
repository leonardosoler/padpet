import * as React from 'react';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function ButtonSubmit(props)  {
  return (
    <div className="button-submit center">
        <Button id={props.id} 
                variant={props.variant} 
                onClick={props.onClick} 
                align="center"> 
            {props.value}
        </Button>
    </div>
)};