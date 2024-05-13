import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <>
      <div className="flex justify-center py-6 hover:rounded-md hover:shadow-2xl relative">
        <Link to={`/products/${product.id}`}>
        <div className="lg:w-60 w-40">
          <img
            src={product.image}
            alt="Clothing"
            className="lg:h-60 h-40 w-auto flex justify-center object-cover"
          />
          <div className="p-2 flex flex-col bg-white">
            <div className="text-sm font-medium text-gray-600">
              {product.name}
            </div>
            <div className="text-md mt-3 font-semibold text-center text-black">
              Rp. {product.harga.toLocaleString("id-ID")}
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Card;