import CategoryCart from "./CategoryCart";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Product",
    img: "./Assets/category__1.jpg.webp",
  },
  {
    id: 1,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__2.jpg.webp",
  },
  {
    id: 2,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__3.jpg.webp",
  },
  {
    id: 3,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__4.jpg.webp",
  },
  {
    id: 4,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__5.jpg.webp",
  },
  {
    id: 5,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__6.jpg.webp",
  },
  {
    id: 6,
    name: "Fresh Vegetables",
    count: "7 Product",
    img: "./Assets/category__7.jpg.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Product",
    img: "./Assets/category__1.webp",
  },
];
console.log(data);

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCart
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
