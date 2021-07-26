import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"5vw",
       },
       coverImage:{
              width:"100%",
              height:"100%",
              [theme.breakpoints.down('md')]:{
                     display:"none"
              }
       },
       title:{
              color:theme.palette.primary.main,
       },
       subHeading:{
              color:"rgba(0,0,0,0.7)",
              fontFamily:"sans-serif",
       }
}))

const About:React.FC = ()=>{
       const classes = useStyles();
       return (
              <Grid container className={classes.root}>
                     <Grid item lg={6}>
                            <img className={classes.coverImage} src="./images/about_cover.svg" alt="about-page-cover"/>
                     </Grid>
                     <Grid item lg={5}>
                            <Typography variant="h3" className={classes.title}>
                                   About us
                            </Typography>
                            <Typography variant="h6" className={classes.subHeading}>
                                   J-Weather built using open weather api. We help you to get detailed weather reports of about 2,00,000+ cities up-to-date.
                            </Typography>
                     </Grid>
              </Grid>
       );
}

export default About;