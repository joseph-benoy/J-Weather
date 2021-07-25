import React from 'react';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/Theme';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Components/Header/Header';

const Jweather:React.FC = ()=>{
       return (
              <>
              <ThemeProvider theme={theme}>
                     <Router>
                     <Header/>
                            <Switch>
                                   <Route exact path="/home">
                                          <Home/>
                                   </Route>
                            </Switch>
                     </Router>
              </ThemeProvider>
              </>
       );
}

export default Jweather;