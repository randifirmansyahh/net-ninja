import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost/Mine/PerpusPASIM/ScanBuku/ApiBuku.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.data.result);
        setBlogs(json.data.result);
      });
  });

  return <div className="home">{blogs && <BlogList blogs={blogs} />}</div>;
};

export default Home;
