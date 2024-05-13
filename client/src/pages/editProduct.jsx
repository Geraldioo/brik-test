import FormProduct from "../components/form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailProduct } from "../redux/productSlicer";

const EditProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.productDetail);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchDetailProduct(id));
      }, [dispatch, id]);
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
      <div className="mb-16">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-black mb-5 text-center pt-14">
            EDIT PRODUCT
          </h1>
        </div>
      </div>
        <FormProduct editData={product} />
      </div>
    </div>
  );
};

export default EditProduct;
