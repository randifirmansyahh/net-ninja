import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Cara membuat website React", body: "aa", author: "Randi", id: 1 },
    { title: "b", body: "bb", author: "Udin", id: 2 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((del) => del.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

//  TODO : Filter
//      <BlogList
//         blogs={blogs.filter((par) => par.author == "Randi")}
//         title="Randi's Blogs"
//       />
