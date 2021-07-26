import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import { useHistory } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom:"10vh",
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(5),
      color:theme.palette.primary.main,
      display:"none",
      [theme.breakpoints.down('md')]:{
        display:"block"
      }
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    title:{
      color:theme.palette.primary.main,
      flexGrow:2,
    },
    rlinks:{
      marginRight: theme.spacing(2),
      color:theme.palette.primary.main,
      display:"block",
      [theme.breakpoints.down('md')]:{
        display:"none"
      }
    }
  }),
);

const Header = ()=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  const navigateTo = React.useRef(history.push).current;
  const routeHandler = React.useCallback<(event:React.MouseEvent) => void>((event:React.MouseEvent)=>{
    navigateTo((event.currentTarget as HTMLInputElement).name);
  },[navigateTo]);
  const routeHandlerL = React.useCallback<(route:string) => void>((route:string)=>{
    navigateTo((route));
  },[navigateTo]);
  return (
    <header className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
        color="transparent"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            style={{color:theme.palette.primary.main}}
          >
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Typography variant="h4" noWrap className={classes.title}>
            J-Weather
          </Typography>
          <IconButton edge="end" name="home" onClick={routeHandler} className={classes.rlinks} color="inherit" aria-label="menu">
              <HomeOutlinedIcon />
          </IconButton>
          <IconButton edge="end" name="weather" onClick={routeHandler} className={classes.rlinks} color="inherit" aria-label="menu">
              <FilterDramaOutlinedIcon />
          </IconButton>
          <IconButton edge="end" name="about" onClick={routeHandler} className={classes.rlinks} color="inherit" aria-label="menu">
              <ContactSupportOutlinedIcon />
          </IconButton>
          <IconButton edge="end" name="contact" onClick={routeHandler} className={classes.rlinks} color="inherit" aria-label="menu">
              <LocalPhoneOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick={()=>{routeHandlerL('home')}}>
              <ListItemIcon><HomeOutlinedIcon/></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={()=>{routeHandlerL('weather')}}>
              <ListItemIcon><FilterDramaOutlinedIcon/></ListItemIcon>
              <ListItemText primary="Weather" />
            </ListItem>
            <ListItem button onClick={()=>{routeHandlerL('about')}}>
              <ListItemIcon><ContactSupportOutlinedIcon/></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={()=>{routeHandlerL('contact')}}>
              <ListItemIcon><LocalPhoneOutlinedIcon/></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
        </List>
      </Drawer>
    </header>
  );
}


export default Header;