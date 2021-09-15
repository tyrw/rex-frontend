import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../themes/theme";
import BaseLayout from "../layout/BaseLayout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Userfront from "@userfront/react";
//export default theme

function MyApp({ Component, pageProps }: AppProps) {

    Userfront.init("9ny4gdbd");
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
