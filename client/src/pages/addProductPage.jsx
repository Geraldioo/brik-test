import FormProduct from "../components/form";

const AddProduct = () => {
    
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
      <div className="mb-16">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-black mb-5 text-center pt-14">
            ADD NEW PRODUCT
          </h1>
        </div>
      </div>
        <FormProduct />
      </div>
    </div>
  );
};

export default AddProduct;
