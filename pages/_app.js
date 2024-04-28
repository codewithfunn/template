import "@/styles/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="AppContainer">
      <div className="App">
      
      <Component {...pageProps} />
      
    </div>
    </div>
  );
}
