import hero1 from "./Assets/hero__1.webp";
import hero2 from "./Assets/hero__2.webp";
import hero3 from "./Assets/hero__3.webp";

const Hero = () => {
  return (
    <div className=" container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className=" relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={hero1}
            alt="hero image"
          />

          <div className=" absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className=" text-gray-500 text-xl pt-4 sm:pt-8">String At</p>
            <div className=" font-medium  text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className=" flex bg-accent hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now
            </div>
          </div>
        </div>
        <div className=" relative">
          <img className=" w-full h-full rounded-lg " src={hero2} alt="" />
          <div className=" absolute max-w-[470px] sm:ml-12 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Best Yummy Pizza
            </h2>
            <p className=" text-gray-500 text-xl pt-4 sm:pt-8">String At</p>
            <div className=" font-medium  text-red-600 text-2xl sm:text-4xl pb-8">
              $15
            </div>
            <div className=" flex bg-accent hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-4 cursor-pointer">
              Shop Now
            </div>
          </div>
        </div>
        <div className=" relative">
          <img className=" w-full h-full rounded-lg " src={hero3} alt="" />
          <div className=" absolute max-w-[470px] sm:ml-12 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Best Yummy Chips
            </h2>
            <p className=" text-gray-500 text-xl pt-4 sm:pt-8">String At</p>
            <div className=" font-medium  text-red-600 text-2xl sm:text-4xl pb-8">
              $10
            </div>
            <div className=" flex bg-accent hover:bg-accentDark text-white rounded-full w-fit items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-4 cursor-pointer">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
