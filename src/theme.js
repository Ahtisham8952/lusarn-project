import "@fontsource/poppins"
import "@fontsource/raleway"
// import "@fontsource/oswald"
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

import "./Fonts"

import { extendTheme } from '@chakra-ui/react'

export const mynewtheme = extendTheme({
    colors:{
        primary:"#258CEC ",
        secondry:"#6943FF"
      },
      components: {
        Tabs: {
          variants: {
            'line': {
              tab: {
                color: "#FFFFFF",
                borderbottom:"none",
               
                _selected: {
                  borderColor: '#12BDF3',
                  borderbottom:"2px solid",
                  color: "#258CEC",
                  
                  }
              }
            }
          },
        }
      },
      breakpoints: {
        sm: "480px",
        xsm: "575px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
        xxl: "1440px",
        xxxl:"1680px",
      },
      fonts: {
        dinFonts: `"D-DIN", sans-serif`,
        nasalization: `"nasalization", sans-serif`,

        body: `"Poppins", sans-serif;`,
        raleway: `"Raleway", sans-serif;`,
        rajdhaniFont:`"Rajdhani", sans-serif;`,
        Oswald: `"Oswald", sans-serif;`,
        poppins: `"Poppins", sans-serif;`,
        saira: `"Saira", sans-serif;`,
      },
      
})
