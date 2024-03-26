import DataBlog from "./DataBlog";

const data = [
  {
    id: 0,
    name: "Healthy Food Healthy Life",
    count: "34",
    img: "./Assets/post__1.webp",
  },
  {
    id: 1,
    name: "Healthy Food Healthy Life",
    count: "54",
    img: "./Assets/post__2.webp",
  },
  {
    id: 2,
    name: "Healthy Food Healthy Life",
    count: "77",
    img: "./Assets/post__3.webp",
  },
];

const Blog = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <DataBlog key={el.id} img={el.img} title={el.name} date={el.count} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
