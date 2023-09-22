import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import ListDrawerItem from './ListDrawerItem';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PetsIcon from'@mui/icons-material/Pets';

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = 
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((React.KeyboardEvent).key === 'Tab' ||
            (React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >      
      <ListDrawerItem text='Home' link='/' icon={<MailIcon/>}/>
      <ListDrawerItem text='Feed' link='/main-feed' icon={<PersonIcon/>}/>
      <ListDrawerItem text='Perfil' link='/user-profile' icon={<PersonIcon/>}/>
      <ListDrawerItem text='Cadastrar usuário' link='/register-user' icon={<PersonIcon/>}/>
      <ListDrawerItem text='PET' link='/pet' icon={<PetsIcon />}/>
      <ListDrawerItem text='Cadastro Pet' link='/register-pet' icon={<PetsIcon />}/>
      <ListDrawerItem text='Pagamentos' link='/register-pet' icon={<PetsIcon />}/>
      <ListDrawerItem text='Mensagens' link='/register-pet' icon={<PetsIcon />}/>
      <ListDrawerItem text='Sair' icon={<PetsIcon />}/>
      
      <Divider />
    </Box>
  );
  return (
    <Box class="top-div">
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </ Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PadPet
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}