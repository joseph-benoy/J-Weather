import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import { useForm,SubmitHandler } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import TextField from '@material-ui/core/TextField';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { FormHelperText } from '@material-ui/core';
import axios from 'axios';
import Dialog from '../../Components/dailog/Dialog';

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
            },
}))
interface contactFormInputs {
       fullName: string
       email: string
       message:string
     }
const validationObj = {
       fullName:{required:{value:true,message:"Please enter your name"},maxLength:{value:25,message:"Your name is too long"},minLength:{value:3,message:"Your name is too short"}},
       email:{required:{value:true,message:"Let us know your email"},maxLength:{value:255,message:"Your email is too long"},pattern:{value:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,message:"Please enter a valid email"}},
       message:{required:{value:true,message:"Please don't leave empty message"},minLength:{value:5,message:"Message is too short"}}
};
interface DialogType{
       open:boolean,
       message:string,
       type:"error" | "success" | "info" | "warning" | undefined,
}
const Contact:React.FC = ()=>{
       const classes = useStyles();
       const {handleSubmit,register,formState:{errors}} = useForm<contactFormInputs>();
       const [error,setError] = React.useState<DialogType | null>({type:"success",message:'',open:false});
       const onSubmit:SubmitHandler<contactFormInputs> = async (data)=>{
              try{
                     await axios.post("/message/save",{
                            fullName:data.fullName,
                            email:data.email,
                            message:data.message
                     })
                     setError({
                            open:true,
                            message:"Message is sent!",
                            type:"success"
                     });
              }
              catch(error){
                     setError({
                            open:true,
                            message:"Something went wrong!",
                            type:"error"
                     });
              }
       }; 
       const resetError = React.useCallback(()=>{
              setError({
                     open:false,
                     message:'',
                     type:undefined
              })
       },[]);
       return (
              <Grid container className={classes.root}>
                     <Grid item lg={7}>
                            <img src="./images/contact_us.svg" alt="contact-us" className={classes.coverImage}/>
                     </Grid>
                     <Grid item container lg={5}>
                            <form onSubmit={handleSubmit(onSubmit)} className={classes.formBase} noValidate autoComplete="off"> 
                                   <Grid container item xs={12} className={classes.formGrid}  spacing={3}>
                                          <Grid item xs={12}>
                                                 <Typography className={classes.title} variant="h4">Contact Us</Typography>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel  htmlFor="fullName">Name</InputLabel>
                                                        <OutlinedInput 
                                                               error={errors.fullName!==undefined}
                                                               {...register('fullName',validationObj.fullName)}
                                                               type="email"
                                                               fullWidth={true}
                                                               startAdornment={
                                                                      <InputAdornment position="start">
                                                                             <PermIdentityOutlinedIcon/>
                                                                      </InputAdornment>
                                                               }
                                                               id="fullName"
                                                               label="Name"
                                                               placeholder="John Doe"
                                                        />
                                                          <FormHelperText id="full-helper-text">{errors.fullName?.message}</FormHelperText>
                                                 </FormControl>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel className={classes.formLabel} htmlFor="email">Email</InputLabel>
                                                        <OutlinedInput 
                                                        {...register('email',validationObj.email)}
                                                        startAdornment={
                                                               <InputAdornment position="start">
                                                                      <EmailOutlinedIcon />
                                                               </InputAdornment>
                                                        }
                                                        error={errors.email!==undefined}
                                                         id="email" placeholder="johndoe@example.com" label="email" />
                                                         <FormHelperText id="email-helper-text">{errors.email?.message}</FormHelperText>
                                                 </FormControl>
                                          </Grid>
                                          <Grid item xs={12}>
                                                 <TextField
                                                        {...register('message',validationObj.message)}
                                                        id="message"
                                                        label="message"
                                                        multiline
                                                        rows={4}
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        error={(errors.message!==undefined)}
                                                        helperText={errors.message?.message}
                                                 />
                                          </Grid>
                                          <Grid item xs={12}  style={{marginTop:"-5vh"}}>
                                                 <MainButton type="submit" text="message" icon={<SendOutlinedIcon/>}/>
                                          </Grid>
                                   </Grid>
                            </form>
                     </Grid>
                     <Grid item xs={12}>
                            <Dialog cb={resetError} message={error?.message as string} type={error?.type} open={error?.open}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Contact);