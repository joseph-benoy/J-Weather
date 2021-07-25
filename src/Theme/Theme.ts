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
       }
});

export default theme;