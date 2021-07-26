import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
              fontSize:"4.5em",
              color:theme.palette.primary.main,
              [theme.breakpoints.down('md')]:{
                     textAlign:"center",
                     fontSize:"4em",
              }
       }
}));

const Home:React.FC = ()=>{
       const classes = useStyles();
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
                     </Grid>
              </Grid>
       );
}

export default Home;