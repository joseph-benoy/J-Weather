import React from 'react';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/Theme';

const Jweather:React.FC = ()=>{
       return (
              <ThemeProvider theme={theme}>
                     <Home/>
              </ThemeProvider>
       );
}

export default Jweather;