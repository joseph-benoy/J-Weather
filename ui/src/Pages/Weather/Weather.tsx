import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import MainButton from '../../Components/MainButton/MainButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useSelector,useDispatch } from 'react-redux';
import {RootState} from '../../Redux/Store';
import { useForm,SubmitHandler } from 'react-hook-form';
import { setQueryCity, setWeatherData } from '../../Redux/Weather/WeatherSlice';
import axios from 'axios';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import { Paper } from '@material-ui/core';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import HdrWeakOutlinedIcon from '@material-ui/icons/HdrWeakOutlined';

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
       },
       dataContainer:{
              textAlign:"center"
       }
}));

interface weatherForm{
       city:string
}
const validationObj= {
       required:{
              value:true,
              message:"Please enter your city"
       },
       minLength:{
              value:2,
              message:"City name is too short"
       }
};
interface weather{
       temp:number,
       humidity:number,
       wind:number,
       weather:string,
       pressure:number
}
const Weather:React.FC = ()=>{
       const classes = useStyles();
       const dispatch = useDispatch();
       const queryCity = useSelector((state:RootState)=>state.weather.city);
       const weatherData:any = useSelector((state:RootState)=>state.weather.data);
       const {handleSubmit,register,formState:{errors}} = useForm<weatherForm>();
       const onSubmit:SubmitHandler<weatherForm> = async (data:weatherForm)=>{
              dispatch(setQueryCity(data.city));
              try{
                     let response = await axios.get(`/weather?city=${data.city}`);
                     dispatch(setWeatherData(response.data));
              }
              catch(error){
                     console.log(error.response.data);
              }
       }; 
       return(
              <Grid container className={classes.root}>
                     <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>
                                   Let's know about your city
                            </Typography>
                     </Grid>
                     <Grid item xs={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                   <Grid container item xs={12} spacing={2}>
                                   <Grid item xs={12} lg={10}>
                                          <TextField error={errors.city!==undefined} helperText={errors.city?.message} {...register('city',validationObj)} fullWidth  variant="outlined" type="text" placeholder="eg. Mumbai" name="city"/>
                                   </Grid>
                                   <Grid item xs={12} container lg={2} className={classes.buttonGrid} alignItems="stretch">
                                          <MainButton type="submit" text="search" icon={<SearchOutlinedIcon/>}/>
                                   </Grid>
                                   </Grid>
                            </form>
                     </Grid>
                     {
                            (weatherData===null)?(
                                   <Grid item xs={12} container justifyContent="center">
                                          <img src="./images/city.svg" alt="city" className={classes.coverImage}/>
                                   </Grid>
                            ):(
                                   <Grid item xs={12} container spacing={2} style={{margin:0}}>
                                          <Grid item xs={12} className={classes.dataContainer}>
                                                 <Typography variant="h4">{`${weatherData?.weather.slice(0,1).toUpperCase()}${weatherData?.weather.slice(1)}`}</Typography>
                                          </Grid>
                                          <Grid item xs={6} lg={6} className={classes.dataContainer}>
                                                 <Paper elevation={2}>
                                                        <Typography variant="h4">{weatherData?.temp}&#8451;</Typography>
                                                        <WhatshotOutlinedIcon/>
                                                        <Typography variant="body1">Temperature</Typography>
                                                 </Paper>
                                          </Grid>
                                          <Grid item xs={6} lg={6} className={classes.dataContainer}>
                                                 <Paper elevation={2}>
                                                        <Typography variant="h4">{weatherData?.humidity}%</Typography>
                                                        <AcUnitOutlinedIcon/>
                                                        <Typography variant="body1">Humidity</Typography>
                                                 </Paper>
                                          </Grid>
                                          <Grid item xs={6} lg={6} className={classes.dataContainer}>
                                                 <Paper elevation={2}>
                                                        <Typography variant="h4">{weatherData?.pressure}Pa</Typography>
                                                        <FilterTiltShiftOutlinedIcon/>
                                                        <Typography variant="body1">Pressure</Typography>
                                                 </Paper>
                                          </Grid>
                                          <Grid item xs={6} lg={6} className={classes.dataContainer}>
                                                 <Paper elevation={2}>
                                                        <Typography variant="h4">{weatherData?.wind}m/s</Typography>
                                                        <HdrWeakOutlinedIcon/>
                                                        <Typography variant="body1">Wind speed</Typography>
                                                 </Paper>
                                          </Grid>
                                   </Grid>
                            )
                     }
              </Grid>
       );
}

export default React.memo(Weather);