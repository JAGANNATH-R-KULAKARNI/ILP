import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import CancelIcon from '@mui/icons-material/Cancel';
import BodyUI from '../body/Body';
import HELP from '../utilities/help';
import Logo from '../../images/qtpi.png'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { height, width } = HELP();
  const ButtonsMenuHorrizontal=(
    <Stack spacing={2} direction="row">
    <Button variant="contained" style={{
      backgroundColor : '#FF5872',color : 'white',fontSize : '18px',fontFamily : 'roboto',
      }}><b>Buy Kit</b></Button>
    <Button variant="text" style={{color : 'black',fontSize : '18px',fontFamily : 'roboto'}}><b>Projects</b></Button>
    <Button variant="text" style={{color : 'black',fontSize : '18px',fontFamily : 'roboto'}}><b>Contact Us</b></Button>
  </Stack>
  );
  const ButtonsMenuVertical=(
    <Stack spacing={2} direction="column">
    <Button variant="contained" style={{
      backgroundColor : '#FF5872',color : 'white',fontSize : '18px',fontFamily : 'roboto',
      }}><b>Buy Kit</b></Button>
    <Button variant="text" style={{color : 'black',fontSize : '18px',fontFamily : 'roboto'}}><b>Projects</b></Button>
    <Button variant="text" style={{color : 'black',fontSize : '18px',fontFamily : 'roboto'}}><b>Contact Us</b></Button>
  </Stack>
  );

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : width }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        height: "200px",
        width: width,
        minHeight: "10em",
        paddingTop: height/3,
        display: 'table-cell',
        verticalAlign: 'middle'
      }}
    >
      {ButtonsMenuVertical}
    </Box>
  );

  const open=false;
  const menuButtonStatus =useMediaQuery('(min-width:600px)');

  const MenuI=(
    <IconButton
    aria-label="open drawer"
    edge="end"
    onClick={toggleDrawer("left", true)}
    style={{color : 'black'}}
  >
             <MenuIcon />
  </IconButton>
  );

  const CrossBut=(
    <IconButton
    aria-label="open drawer"
    edge="end"
    onClick={toggleDrawer("left", false)}
    style={{color : 'black'}}
  >
             <CancelIcon/>
  </IconButton>
  );
  return (
    <Box sx={{ display: 'flex' }}>
         <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <AppBar position="absolute" open={open} style={{background : '#FFFFFF',height : '60px'}} elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{paddingTop : '15px'}}>
            <img src={Logo} alt='Qtpi' style={{width : '70px',height : '41px'}}/>
          </Typography>
           {CrossBut}
        </Toolbar>
      </AppBar>
            {list("left")}
          </Drawer>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background : '#FFFFFF',height : '60px'}} elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" style={{paddingTop : '15px'}}>
            <img src={Logo} alt='Qtpi' style={{width : '70px',height : '41px'}}/>
          </Typography>
         
         {menuButtonStatus ? ButtonsMenuHorrizontal : MenuI}
        </Toolbar>
        
      </AppBar>
      <Main open={open}>
      <DrawerHeader />
        <BodyUI/>
        </Main>
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
      </Drawer>
    </Box>
  );
}
