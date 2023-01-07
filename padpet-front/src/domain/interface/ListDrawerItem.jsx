import * as React from 'react';
import { List, ListItem, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function ListDrawerItem(props)  {

    return (
        <div className="button-submit center">
            <List>
                <ListItem key={props.text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {props.icon}
                    </ListItemIcon>
                    <ListItemText primary={props.text} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
)};


