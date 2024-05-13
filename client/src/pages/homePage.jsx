import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, setParam } from "../redux/productSlicer";
import Card from "../components/card";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const param = useSelector((state) => state.products.param);
  const page = useSelector((state) => state.products.page);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    dispatch(setParam({ ...param, search: value }));
  };

  const handlePage = (number) => {
    dispatch(setParam({ ...param, "page[number]": number }));
  };

  let totalPage = [];
  for (let i = 1; i <= page; i++) {
    totalPage.push(i);
  }

  useEffect(() => {
    dispatch(fetchProducts(param));
  }, [param, dispatch]);

  return (
    <>
      {products ? (
        <div className="bg-white">
          <div className="mx-28">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-black mb-5 text-center pt-14">
                LIST PRODUCTS
              </h1>
            </div>
          </div>
          <div className="flex flex-col px-10 py-6">
            <form className="lg:mx-80 mx-10 border rounded-md mb-14">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                  className="pl-5 w-full md:w-full my-2 bg-white text-black"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <MdSearch size={24} />
                </button>
              </div>
            </form>

            {/* Product Display */}
            <div className="border justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full items-center">
                {/* Card Section */}
                {products &&
                  products.map((product, idx) => (
                    <Card key={idx} product={product} />
                  ))}
                {/* Card Section done */}
              </div>

              {/* Pagination */}
              <div className="join flex justify-center my-10 ">
                <button
                  className="join-item btn border border-white bg-gray-200 hover:bg-gray-300 text-black"
                  onClick={() => handlePage(1)}
                >
                  «
                </button>
                {totalPage.map((number) => (
                  <button
                    key={number}
                    className="join-item btn border border-white bg-gray-200 hover:bg-gray-300 text-black"
                    onClick={() => handlePage(number)}
                  >
                    Page {number}
                  </button>
                ))}
                <button
                  className="join-item btn border border-white bg-gray-200 hover:bg-gray-300 text-black"
                  onClick={() => handlePage(totalPage.length)}
                >
                  »
                </button>
              </div>
              {/* Pagination End */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-white">
          <span className="loading loading-spinner flex items-center loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default HomePage;
