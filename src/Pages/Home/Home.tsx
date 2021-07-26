import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router';
import MainButton from '../../Components/MainButton/MainButton';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"5vh"
       },
       coverImage:{
              width:"100%",
              height:"100%",
              [theme.breakpoints.down('md')]:{
                     display:"none"
              }
       },
       subHeading:{
              fontSize:"1.5em",
              fontFamily:"sans-serif",
              color:"rgba(0,0,0,0.7)",
              [theme.breakpoints.down('md')]:{
                     textAlign:"justify"
              }

       },
       heading:{
              fontSize:"6em",
              color:theme.palette.primary.main,
              [theme.breakpoints.down('md')]:{
                     textAlign:"center",
                     fontSize:"4em",
                     marginTop:theme.spacing(2)
              }
       },
       button:{
              color:"white",
              margin: theme.spacing(1),
              marginTop:theme.spacing(3),
              width:"15vw",
              [theme.breakpoints.down('md')]:{
                     width:"50vw"
              }
       },
       buttonGrid:{
              justifyContent:"center",
              [theme.breakpoints.up('md')]:{
                     justifyContent:"flex-start"
              }
       },
       divide:{
              background:theme.palette.primary.main,
              height:"0.7vh",
              marginTop:theme.spacing(5),
       }
}));

const Home:React.FC = ()=>{
       const classes = useStyles();
       const history = useHistory();
       const navigateTo = React.useRef(history.push).current;
       const routeToWeather = React.useCallback(()=>{
              navigateTo("weather");
       },[navigateTo]);
       return (
              <Grid container className={classes.root}>
                     <Grid item xs={12} lg={6}>
                            <img alt="home-page-cover" className={classes.coverImage} src="./images/home_cover.svg"/>
                     </Grid>
                     <Grid item lg={5}>
                            <Typography variant="h1" className={classes.heading}>
                                   One-Touch weather
                            </Typography>
                            <Typography variant="body1" className={classes.subHeading}> 
                                   Get detailed weather updates of 2,00,000+ cities in few clicks. Plan your day with our weather reports  and prepare for anything
                            </Typography>
                            <MainButton text="checkout" icon={<FilterDramaOutlinedIcon/>} click={routeToWeather}/>
                            <Divider className={classes.divide}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Home);