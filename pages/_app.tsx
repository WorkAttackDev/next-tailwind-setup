import { HiMenuAlt3 } from "react-icons/hi";

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return 
  <>
  <header>
    <h1>
      logo
    </h1>
    <HiMenuAlt3 />
  </header>
  <Component {...pageProps} />
  </>
}

export default MyApp
