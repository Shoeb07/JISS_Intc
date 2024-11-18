import Header from "./HEADER/Header.jsx";
import Middle from "./Middle/Middle.jsx";
import Bottom from "./Bottom/Bottom.jsx";
import Footer from "./Footer/Footer.jsx";
import Ccards from "../Ccards.jsx";
import "./index.css";
import "./App.css";
function App() {
  return (
    <>
      <Header />

      <Middle />

      <Bottom />
      {/* <h1 className="bg-slate-600 text-white">hello</h1> */}
      <Ccards id = "contact-form" />
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}

export default App;
