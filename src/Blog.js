import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Blog() {
  return (
    <div className="bg-[#282c33] h-screen">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <h1>BLOG</h1>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
