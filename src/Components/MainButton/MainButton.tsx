import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme:Theme)=>createStyles({
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
              justifyContent:"center",
              [theme.breakpoints.up('md')]:{
                     justifyContent:"flex-start"
              }
       },
}));

interface Props{
       click:()=>void,
       icon:JSX.Element,
       text:string
}

const MainButton:(props: Props) => JSX.Element= (props:Props)=>{
       const classes = useStyles();
       return(
              <>
              <Grid item container className={classes.buttonGrid}>
                     <Button onClick={props.click} startIcon={props.icon} size="large" className={classes.button} variant="contained" color="secondary">
                            <Typography>{props.text}</Typography>
                     </Button>
              </Grid>
              </>
       );
}

export default React.memo(MainButton);