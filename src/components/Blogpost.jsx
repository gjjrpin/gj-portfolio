import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mock_data } from "../data/blog/data";

function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(mock_data[0]);
  useEffect(() => {
    const currBlog = mock_data.find((i) => i.id === id);
    setBlog(currBlog);
  }, [id]);

  return (
    <div className="bg-[#282c33] h-screen">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <div className="mt-32 bg-neutral-300 rounded-lg py-16 px-2 md:px-32">
          <b>
            <h1 className="text-5xl mb-8">{blog.title}</h1>
          </b>
          <div className="flex items-center justify-center bg-gray-50 border-solid">
            <img src={blog.imageUrl} alt="" className=" h-[400px]" />
          </div>
          <b>
            <p className="mb-8">{blog.date} by: Gj Pineda</p>
          </b>
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPost;
