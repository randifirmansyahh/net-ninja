const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.body}</p>
          <button class="pointer" onClick={() => props.handleDelete(blog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

// TODO : Parameter pengganti props
// const BlogList = ({blogs,title})=>{};
// ! hooks berfungsi untuk merender sebagian komponen saja, tapa reload halaman
