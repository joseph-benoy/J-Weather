import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useSelector,useDispatch } from 'react-redux';
import {RootState} from '../../Redux/Store';
import { useForm,SubmitHandler } from 'react-hook-form';

const useStyles = makeStyles((theme:Theme)=>createStyles({
       root:{
              padding:"3vw",
              paddingTop:"2vw",
              [theme.breakpoints.down('md')]:{
                     padding:"3vh",
              }              
       },
       coverImage:{
              width:"50%",
              height:"50%",
              opacity:"90%",
              marginTop:"7vh",
              [theme.breakpoints.down('md')]:{
                     width:"75%",
                     height:"75%",
              }
       },
       buttonGrid:{
              display:"flex",
              marginTop:theme.spacing(-2),
              [theme.breakpoints.down('md')]:{
                     justifyContent:"flex-start",
                     marginTop:theme.spacing(-1),
              }
       },
       title:{
              textAlign:"center"
       }
}));

interface weatherForm{
       city:string
}
const Weather:React.FC = ()=>{
       const classes = useStyles();
       const dispatch = useDispatch();
       const queryCity = useSelector((state:RootState)=>state.weather.city);
       console.log(queryCity);
       const {handleSubmit,register,formState:{errors}} = useForm<weatherForm>();
       const onSubmit:SubmitHandler<weatherForm> = (data)=>console.log(data); 
       return(
              <Grid container className={classes.root}>
                     <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>
                                   Let's know about your city
                            </Typography>
                     </Grid>
                     <Grid item xs={12}>
                            <form>
                                   <Grid container item xs={12} spacing={2}>
                                   <Grid item xs={12} lg={10}>
                                          <TextField {...register('city')} fullWidth  variant="outlined" type="text" placeholder="eg. Mumbai" name="city"/>
                                   </Grid>
                                   <Grid item xs={12} container lg={2} className={classes.buttonGrid} alignItems="stretch">
                                          <MainButton type="submit" text="search" icon={<SearchOutlinedIcon/>}/>
                                   </Grid>
                                   </Grid>
                            </form>
                     </Grid>
                     <Grid item xs={12} container justifyContent="center">
                            <img src="./images/city.svg" alt="city" className={classes.coverImage}/>
                     </Grid>
              </Grid>
       );
}

export default React.memo(Weather);