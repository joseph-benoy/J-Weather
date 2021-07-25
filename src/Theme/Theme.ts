import { createTheme} from '@material-ui/core/styles';
import "@fontsource/hammersmith-one"

declare module "@material-ui/core/styles/createPalette" {
       interface Palette {
              lightGreen: Palette['primary'];
       }
       interface PaletteOptions {
              lightGreen: PaletteOptions['primary'];
       }
}
declare module "@material-ui/core/styles/createPalette" {
       interface Palette {
              lightYellow: Palette['primary'];
       }
       interface PaletteOptions {
              lightYellow: PaletteOptions['primary'];
       }
}
/*declare module "@material-ui/core/styles/createBreakpoints" {
       interface BreakpointOverrides {
         xs: false; // removes the `xs` breakpoint
         sm: false;
         md: false;
         lg: false;
         xl: false;
         tablet: true; // adds the `tablet` breakpoint
         laptop: true;
         desktop: true;
       }
     }*/
const theme = createTheme({
       palette:{
              primary:{
                     main:'#206A5D'
              },
              secondary:{
                     main:'#F58634'
              },
              lightGreen:{
                     main:'#81B214'
              },
              lightYellow:{
                     main:'#F58634'
              }
       },
       typography:{
              fontFamily: [
                     'Hammersmith One',
                     'serif',
                     ].join(','),
       },
       /*breakpoints:{
              values:{
                     tablet: 640,
                     laptop: 1024,
                     desktop: 1200,
              }
       }*/
});

export default theme;