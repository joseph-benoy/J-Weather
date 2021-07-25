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
import {useHistory} from 'react-router';

const Header:React.FC = () =>{
       const useStyles = makeStyles((theme:Theme) =>
              createStyles({
                     root: {
                            flexGrow: 1,
                            marginTop:"2vh"
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
  const history = useHistory();
  const navigateTo = React.useRef(history.push).current;
  const routeHandler = React.useCallback<(event:React.MouseEvent) => void>((event:React.MouseEvent)=>{
    navigateTo((event.currentTarget as HTMLInputElement).name);
  },[navigateTo]);
  return (
    <header className={classes.root}>
      <AppBar position="static" elevation={0} color='transparent'>
        <Toolbar>
          <Typography variant="h3" className={classes.title} id="title">
            JWeather
          </Typography>
          <IconButton onClick={routeHandler} name="home" edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <HomeOutlinedIcon />
          </IconButton>          
          <IconButton onClick={routeHandler} name="weather" edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <FilterDramaOutlinedIcon />
          </IconButton>          
          <IconButton onClick={routeHandler} name="about" edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <ContactSupportOutlinedIcon />
          </IconButton >         
          <IconButton onClick={routeHandler} name="contact" edge="end" className={classes.headerButtons} color="inherit" aria-label="menu">
            <LocalPhoneOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;