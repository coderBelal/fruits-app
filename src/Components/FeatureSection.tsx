import fea1 from "./Assets/feature__1.webp";
import ProductCard from "./ProductCard";
const data = [
  {
    id: 0,
    img: "./Assets/product__4.jpg.webp",
    name: "Dried Mango",
    price: "$400",
  },
  {
    id: 1,
    img: "./Assets/product__2.jpg.webp",
    name: "Dried Mango",
    price: "$400",
  },
  {
    id: 2,
    img: "./Assets/product__3.jpg.webp",
    name: "Dried Mango",
    price: "$400",
  },
  {
    id: 3,
    img: "./Assets/product__1.jpg.webp",
    name: "Dried Mango",
    price: "$400",
  },
];
const FeatureSection = () => {
  return (
    <div className=" container pt-6">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="  text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at the best prices
          </p>
        </div>
        <div className=" space-x-4 mt-8 lg:mt-3">
          <button className="feature_btn">Fruits</button>
          <button className="  text-gray-600 hover:text-accent">
            Vegetable
          </button>
          <button className="  text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4">
        <div>
          <img src={fea1} alt="" className="w-full h-full object-cover" />
        </div>
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
