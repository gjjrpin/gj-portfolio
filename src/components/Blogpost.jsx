import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="bg-[#282c33] h-screen">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <div className="pt-32">
          <h1>BLOG for ID: {id}</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPost;
