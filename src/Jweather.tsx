import React from 'react';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/Theme';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Pages/about/About';
import Contact from './Pages/Contact/Contact';
import Weather from './Pages/Weather/Weather';

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
                                   <Route exact path="/">
                                          <Home/>
                                   </Route>
                                   <Route exact path="/about">
                                          <About/>
                                   </Route>
                                   <Route exact path="/contact">
                                          <Contact/>
                                   </Route>
                                   <Route exact path="/weather">
                                          <Weather/>
                                   </Route>
                            </Switch>
                     </Router>
              </ThemeProvider>
              </>
       );
}

export default Jweather;