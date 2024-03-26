import banner from "./Assets/banner__1.webp";
import banner2 from "./Assets/banner__2.webp";
const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className=" overflow-hidden rounded-lg">
          <img src={banner} alt="banner" />
        </div>
        <div className=" overflow-hidden rounded-lg">
          <img
            src={banner2}
            alt=""
            className=" hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
