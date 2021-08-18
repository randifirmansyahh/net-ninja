const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.judul}</h2>
          <img
            style={{ height: 150, width: 100 }}
            src={blog.foto}
            alt="Buku"
          ></img>
          {/* <p>Written by {blog.pener}</p> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
