import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import "styles/globals.css";
import "styles/layout.css";
import "@/components/Navbar.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
// import "bootstrap/dist/css/bootstrap.min.css";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Khai Truong learn Nextjs</title>
        <meta name="description" content="Nice Try" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          {/* <Header /> */}

          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
