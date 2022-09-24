import "styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css"
import 'boxicons/css/boxicons.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("public/js/main.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
