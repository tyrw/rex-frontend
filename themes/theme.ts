import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    fonts: {
      body: "Barracuda",
    },
    radii: {
        none: "1px",
        sm: "1px",
        base: "1px",
        md: "1px",
        lg: "1px",
        xl: "1px",
        "2xl": "1px",
        "3xl": "1px",
        full: "1px",
      },

  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: "beige.300",
        color: "charcoal.500",
        //fontFamily: "Lexend", //["Prompt","Rubik"]
      },
      // styles for the `a`
      a: {
        color: "neon.400",
        _hover: {
          textDecoration: "underline",
        },
      },

      
      // p, span: {
      //   color: "blue.900",
      // },
    },
  },
  colors: {
      lemon:{
        400: "#FCFFBF",
          500: '#F7FE72'
      },
      green:{
          500: '#8FF7A7'
      },
      blue:{
        100: '#F2FFFF',
        300: "#CACBE6",
          500: '#B9C0DA'
      },
      ruby:{
        300: '#F2CDBD',
          500: '#F09873'
      },

      charcoal:{
          500: '#313335'
      },

      grey:{
        100:"#FAFAFA",
          300:'#CACCCE'
      }


  },
  })


  