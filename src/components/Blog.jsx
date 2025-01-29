import Navbar from "./Navbar";
import Footer from "./Footer";

import { mock_data } from "../data/blog/data.js";

function Blog() {
  return (
    <div className="bg-[#282c33] h-screen">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <div className="pt-32">
          <h1 className="text-6xl text-white">BLOG</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {mock_data.map((i) => (
              <a key={i.id} href={`/blog/${i.id}`}>
                <div className=" border-1 rounded-lg bg-white">
                  <img
                    src={i.imageUrl}
                    alt=""
                    className="rounded-t-lg h-[250px] bg-gray-400 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-xl">{i.title}</h3>
                    <p className="mt-4">{i.date}</p>
                    <p className="line-clamp-3 mt-4">{i.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
