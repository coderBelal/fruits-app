interface propsType {
  size: string;
}
const CartCount: React.FC<propsType> = ({ size }) => {
  return (
    <div
      className={`absolute bg-red-600 text-white text-[14px] ${size}-right-8 top-6 rounded-full grid place-content-center`}
    >
      3
    </div>
  );
};

export default CartCount;
