import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#282c33]">
      <div className="max-w-[1100px] mx-auto p-4">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;
