import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import {Theme} from '@material-ui/core'
//import './Header.scss';


const Header:React.FC = () =>{
       const useStyles = makeStyles((theme:Theme) =>
              createStyles({
                     root: {
                            flexGrow: 1,
                     },
                     headerButtons: {
                            color:theme.palette.primary.main,
                            marginRight:theme.spacing(2)
                     },
                     title: {
                            flexGrow: 1,
                            color:theme.palette.primary.main,
                            fontWeight:"bolder"
                     },
              }),
       );
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static" elevation={0} color='transparent'>
        <Toolbar>
          <Typography variant="h4" className={classes.title} id="title">
            JWeather
          </Typography>
          <IconButton edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <HomeOutlinedIcon />
          </IconButton>          
          <IconButton edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <FilterDramaOutlinedIcon />
          </IconButton>          
          <IconButton edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <ContactSupportOutlinedIcon />
          </IconButton >         
          <IconButton edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <LocalPhoneOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;