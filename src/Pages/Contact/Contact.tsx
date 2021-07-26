import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import { useHistory } from 'react-router';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"5vw",
       },
       coverImage:{
              width:"95%",
              height:"95%",
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
interface contactFormInputs {
       fullName: string
       email: string
       message:string
     }
const Contact:React.FC = ()=>{
       const classes = useStyles();
       const history = useHistory();
       const {handleSubmit,register,formState:{errors}} = useForm<contactFormInputs>();
       return (
              <Grid container className={classes.root}>
                     <Grid item lg={6}>
                            <img src="./images/contact_us.svg" alt="contact-us" className={classes.coverImage}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Contact);