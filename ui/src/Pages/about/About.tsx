import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import { useHistory } from 'react-router';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"5vw",
       },
       coverImage:{
              width:"100%",
              height:"100%",
              marginBottom:"5vh",
       },
       title:{
              marginTop:"5vh",
              [theme.breakpoints.down('md')]:{
                     textAlign:"center"
              }              
       },
       subHeading:{
              color:"rgba(0,0,0,0.7)",
              fontFamily:"sans-serif",
              textAlign:"justify"
       },
       textGrid:{
              marginLeft:"5vw",
              [theme.breakpoints.down('md')]:{
                     marginLeft:"0vw",
              }
       },
       buttonGrid:{
              justifyContent:"center",
              [theme.breakpoints.up('md')]:{
                     justifyContent:"flex-start"
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
       coverImageMob:{
              width:"100%",
              height:"100%",
              display:"none",
              marginTop:"-10vh",
              [theme.breakpoints.down('md')]:{
                     display:"block"
              }
       },
}))

const About:React.FC = ()=>{
       const classes = useStyles();
       const history = useHistory();
       const navigateTo = React.useRef(history.push).current;
       const routeToContact = React.useCallback(()=>{
              navigateTo("contact");
       },[navigateTo])
       return (
              <Grid container className={classes.root}>
                     <Grid item lg={6}>
                            <img className={classes.coverImage} src="./images/about_cover.svg" alt="about-page-cover"/>
                     </Grid>
                     <Grid item lg={5} className={classes.textGrid}>
                            <Typography variant="h4" className={classes.title}>
                                   About us
                            </Typography>
                            <Typography variant="h6" className={classes.subHeading}>
                                   J-Weather built using open weather api. We help you to get detailed weather reports of about 2,00,000+ cities up-to-date.
                            </Typography>
                            <MainButton text="say hello!" icon={<LocalPhoneOutlinedIcon/>} click={routeToContact}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(About);