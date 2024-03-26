interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
}
const BlogData: React.FC<propsType> = ({ img, title, comment, date }) => {
  return (
    <div className=" space-y-4">
      <img src={img} alt="post" />
      <div className=" text-accent font-medium">
        <span>{date}</span>
        <span>{comment} Comments</span>
      </div>
      <h3 className=" font-bold text-xl">{title}</h3>
    </div>
  );
};

export default BlogData;
