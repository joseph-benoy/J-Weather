import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import { useHistory } from 'react-router';
import { useForm,SubmitHandler } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import TextField from '@material-ui/core/TextField';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"5vw",
       },
       coverImage:{
              width:"85%",
              height:"85%",
              marginBottom:"5vh",
              [theme.breakpoints.down('md')]:{
                     display:"none"
              }  
       },
       title:{
              [theme.breakpoints.down('md')]:{
                     textAlign:"center"
              }              
       },
       formLabel:{
              fontFamily:"sans-serif",
       },
       formBase: {
            },
            formInput:{
            },
            formGrid:{
              [theme.breakpoints.down('md')]:{
                    width:"101.5vw"
              }
            }
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
       const onSubmit:SubmitHandler<contactFormInputs> = (data)=>console.log(data); 
       return (
              <Grid container className={classes.root}>
                     <Grid item lg={7}>
                            <img src="./images/contact_us.svg" alt="contact-us" className={classes.coverImage}/>
                     </Grid>
                     <Grid item container lg={5}>
                            <form className={classes.formBase} noValidate autoComplete="off"> 
                                   <Grid container xs={12} className={classes.formGrid}  spacing={3}>
                                          <Grid item xs={12}>
                                                 <Typography className={classes.title} variant="h4">Contact Us</Typography>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel  htmlFor="fullName">Name</InputLabel>
                                                        <OutlinedInput 
                                                               {...register('fullName')}
                                                               type="email"
                                                               fullWidth={true}
                                                               startAdornment={
                                                                      <InputAdornment position="start">
                                                                             <PermIdentityOutlinedIcon />
                                                                      </InputAdornment>
                                                               }
                                                               id="fullName"
                                                               label="Name"
                                                               placeholder="John Doe"
                                                        />
                                                 </FormControl>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel className={classes.formLabel} htmlFor="email">Email</InputLabel>
                                                        <OutlinedInput 
                                                        {...register('email')}
                                                        startAdornment={
                                                               <InputAdornment position="start">
                                                                      <EmailOutlinedIcon />
                                                               </InputAdornment>
                                                        }
                                                         id="email" placeholder="johndoe@example.com" label="email" />
                                                 </FormControl>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <TextField
                                                        {...register('message')}
                                                        id="message"
                                                        label="message"
                                                        multiline
                                                        rows={4}
                                                        variant="outlined"
                                                        fullWidth={true}
                                                 />
                                          </Grid>
                                          <Grid item xs={12}  style={{marginTop:"-5vh"}}>
                                                 <MainButton text="message" icon={<SendOutlinedIcon/>}/>
                                          </Grid>
                                   </Grid>
                            </form>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Contact);