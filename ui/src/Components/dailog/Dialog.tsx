import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Props{
       open:boolean|  undefined ,
       message:string,
       type:"error" | "success" | "info" | "warning" | undefined,
       cb?:()=>void
}

function Dialog(props:Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean | undefined>(false);
       React.useEffect(()=>{
              setOpen(props.open)
       },[props.open]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    if(props?.cb!==undefined){
      props?.cb();
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default React.memo(Dialog);
