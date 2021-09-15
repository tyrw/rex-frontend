import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Barracuda';
        font-style: light;
        font-weight: 300;
        font-display: swap;
        src: url("/fonts/barracuda/Barracuda-Light.ttf"); format('ttf');
        
      }

      @font-face {
        font-family: 'Barracuda';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url("/fonts/barracuda/Barracuda-regular.ttf"); format('ttf');
        
      }

      @font-face {
        font-family: 'Barracuda';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url("/fonts/barracuda/Barracuda-Bold.ttf"); format('ttf');
        
      }
      `}
  />
)

export default Fonts