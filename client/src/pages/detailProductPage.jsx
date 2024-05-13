import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, fetchDetailProduct } from "../redux/productSlicer";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const DetailProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
        navigate("/products");
        deleteProduct(id);
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your product is safe :)',
          'error'
        )
      }
    })
  }

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);
  return (
    <>
      {product ? (
        <div>
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-col lg:flex-row">
                <div className="lg:w-2/5 w-full order-first lg:order-first mb-6 lg:mb-0">
                  <img
                    alt="product"
                    className="w-full object-cover object-center rounded border border-gray-200"
                    src={product.image}
                  />
                </div>
                <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 lg:w-3/5">
                  <h1 className="text-gray-900 lg:text-3xl text-xl title-font font-medium mb-1">
                    {product.name}
                  </h1>
                  <h2 className="text-md font-semibold title-font text-gray-500 tracking-widest">
                    {product.Category.categoryName}
                  </h2>
                  <div className="flex">
                    <span className="title-font font-medium text-3xl text-orange-500 mt-5">
                      Rp. {product.harga.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="mt-10">
                    <h1 className="font-bold mb-2">Product Description :</h1>
                    <p className="leading-relaxed">{product.description}</p>
                    <h1 className="font-bold mb-2 mt-4">SKU :</h1>
                    <p className="leading-relaxed">{product.sku}</p>
                    <div className="flex flex-row mt-4">
                      <h1 className="font-semibold mr-4">
                        Weight : <span>{product.weight}</span>
                      </h1>
                      <h1 className="font-semibold mr-2">
                        Width : <span>{product.width}</span>
                      </h1>
                      <h1 className="font-semibold mx-2">
                        Height : <span>{product.height}</span>
                      </h1>
                      <h1 className="font-semibold mx-2">
                        Length : <span>{product.length}</span>
                      </h1>
                    </div>
                  </div>
                  {localStorage.access_token ? (
                    <div className="flex gap-2 lg:mt-16 mt-10">
                      <Link to={"/edit-product/" + product.id}>
                        <button className="btn btn-outline btn-info">
                          Edit Product
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(product.id);
                        }}
                        className="btn btn-outline btn-error"
                      >
                        Delete Product
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-white">
          <span className="loading loading-spinner flex items-center loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
