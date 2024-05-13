import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    product: null,
    newProduct: null,
    param: null,
    page: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setNewProduct: (state, action) => {
      state.newProduct = action.payload;
    },
    setParam: (state, action) => {
      state.param = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setProducts,
  setProductDetail,
  setNewProduct,
  setParam,
  setPage,
} = productSlice.actions;

export const fetchProducts = (param) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:3000/products",
        params: param,
      });
      dispatch(setProducts(data.data));
      dispatch(setPage(data.totalPage));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDetailProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${id}`,
      });

      dispatch(setProductDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (data, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/products",
        data: data,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      dispatch(setNewProduct(response.data));
      navigate("/products");
      Swal.fire({
        title: "Product Added",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      dispatch(fetchProducts());
      Swal.fire({
        title: "Product Deleted",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
};

export const editProduct = (data, id, navigate) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "PUT",
        url: `http://localhost:3000/products/${id}`,
        data: data,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });
      navigate("/products");
      Swal.fire({
        title: "Product Updated",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
};

export default productSlice.reducer;
