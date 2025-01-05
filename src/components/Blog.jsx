import Navbar from "./Navbar";
import Footer from "./Footer";

const MOCK_BLOGS = [
  {
    id: "1",
    imageUrl: "/hero.png",
    title: "Test title 1",
    description: "Test description",
    date: "1991-01-01",
  },
  {
    id: "2",
    imageUrl: "/hero.png",
    title: "Test title 2",
    description: "Test description",
    date: "1991-01-01",
  },
  {
    id: "3",
    imageUrl: "/hero.png",
    title: "Test title 3",
    description: "Test description",
    date: "1991-01-01",
  },
  {
    id: "4",
    imageUrl: "/hero.png",
    title: "Test title 4",
    description: "Test description",
    date: "1991-01-01",
  },
  {
    id: "5",
    imageUrl: "/hero.png",
    title: "Test title 5",
    description: "Test description",
    date: "1991-01-01",
  },
  {
    id: "6",
    imageUrl: "/hero.png",
    title: "Test title 6",
    description: "Test description",
    date: "1991-01-01",
  },
];

function Blog() {
  return (
    <div className="bg-[#282c33] h-screen">
      <div className="max-w-[1100px] mx-auto">
        <Navbar />
        <div className="pt-32">
          <h1 className="text-6xl text-white">BLOG</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {MOCK_BLOGS.map((i) => (
              <a key={i.id} href={`/blog/${i.id}`}>
                <div className=" border-1 rounded-lg bg-white">
                  <img
                    src={i.imageUrl}
                    alt=""
                    className="rounded-t-lg h-[250px] bg-gray-400"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-xl">{i.title}</h3>
                    <p>{i.description}</p>

                    <p>{i.date}</p>
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
