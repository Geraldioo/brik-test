import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../redux/productSlicer";
import { Link, useNavigate } from "react-router-dom";

const FormProduct = ({ editData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: editData ? editData.name : "",
    description: editData ? editData.description : "",
    image: editData ? editData.image : "",
    sku: editData ? editData.sku : "",
    weight: editData ? editData.weight : "",
    width: editData ? editData.width : "",
    height: editData ? editData.height : "",
    length: editData ? editData.length : "",
    harga: editData ? editData.harga : "",
    CategoryId: editData ? editData.CategoryId : "",
  });


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(editProduct( formData, editData.id, navigate ));
    } else {
      dispatch(addProduct(formData, navigate));
    }
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="fName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Name
              </label>
              <input
                onChange={handleInputChange}
                value={formData.name}
                type="text"
                name="name"
                id="fName"
                placeholder="Product Name..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Price
              </label>
              <input
                onChange={handleInputChange}
                value={formData.harga}
                type="number"
                name="harga"
                id="lName"
                placeholder="Product Price..."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Product Description
          </label>
          <input
            onChange={handleInputChange}
            value={formData.description}
            type="text"
            name="description"
            id="guest"
            placeholder="Product Description..."
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="guest"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Product Image
          </label>
          <input
            onChange={handleInputChange}
            value={formData.image}
            type="text"
            name="image"
            id="guest"
            placeholder="Product Image..."
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product SKU
              </label>
              <input
                onChange={handleInputChange}
                value={formData.sku}
                type="text"
                placeholder="Product SKU..."
                name="sku"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Category
              </label>
              <select
                name="CategoryId"
                id="category"
                onChange={handleInputChange}
                value={formData.CategoryId}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="">Select a category...</option>
                <option value="1">Snack</option>
                <option value="2">Drink</option>
                <option value="3">Instant Food</option>
                <option value="4">Ingredients</option>
                <option value="5">Home and Living</option>
              </select>
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Height
              </label>
              <input
                onChange={handleInputChange}
                value={formData.height}
                type="number"
                placeholder="Product Height..."
                name="height"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Weight
              </label>
              <input
                onChange={handleInputChange}
                value={formData.weight}
                type="number"
                placeholder="Product Weight..."
                name="weight"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Width
              </label>
              <input
                onChange={handleInputChange}
                value={formData.width}
                type="number"
                placeholder="Product Width..."
                name="width"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Length
              </label>
              <input
                onChange={handleInputChange}
                value={formData.length}
                type="number"
                placeholder="Product Length..."
                name="length"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-4">
          <button className="hover:shadow-form rounded-md btn btn-outline btn-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
            {editData ? "Edit Product" : "Add Product"}
          </button>
          {editData ? (
            <Link to={"/products/" + editData.id}>
              <button className="hover:shadow-form rounded-md btn btn-outline btn-error py-3 px-8 text-center text-base font-semibold text-white outline-none ml-4">
                Cancel
              </button>
            </Link>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default FormProduct;
