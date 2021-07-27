import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

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
                     textAlign:"justify",
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
              display:"flex",
              marginTop:theme.spacing(-2),
              [theme.breakpoints.down('md')]:{
                     justifyContent:"flex-start",
                     marginTop:theme.spacing(-3),
              }
       },
       divide:{
              background:theme.palette.primary.main,
              height:"0.7vh",
              marginTop:theme.spacing(5),
       },
       title:{
              textAlign:"center"
       }
}));


const Weather:React.FC = ()=>{
       const classes = useStyles();
       return(
              <Grid container spacing={2} className={classes.root}>
                     <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>
                                   Let's know about your city
                            </Typography>
                     </Grid>
                     <Grid item xs={12} lg={10}>
                            <TextField fullWidth  variant="outlined" type="text" placeholder="eg. Mumbai" name="city"/>
                     </Grid>
                     <Grid item xs={12} container lg={2} className={classes.buttonGrid} alignItems="stretch">
                            <MainButton text="search" icon={<SearchOutlinedIcon/>}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Weather);