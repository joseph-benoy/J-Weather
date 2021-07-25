import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloudIcon from '@material-ui/icons/Cloud';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';




const Header:React.FC = () =>{
       const useStyles = makeStyles((theme:any) =>
              createStyles({
                     root: {
                            flexGrow: 1,
                     },
                     menuButton: {
                            marginRight: theme.spacing(2),
                     },
                     title: {
                            flexGrow: 1,
                     },
              }),
       );
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            JWeather
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>          
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <CloudIcon />
          </IconButton>          
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <InfoIcon />
          </IconButton >         
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <PhoneIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;