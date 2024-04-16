import "@/styles/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
