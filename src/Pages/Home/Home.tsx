import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
       }
}));

const Home:React.FC = ()=>{
       const classes = useStyles();
       return (
              <Grid container className={classes.root}>
                     <Grid item xs={12} lg={6}>
                            <img alt="home-page-cover-image" className={classes.coverImage} src="./images/home_cover.svg"/>
                     </Grid>
              </Grid>
       );
}

export default Home;