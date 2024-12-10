import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#282c33]">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
