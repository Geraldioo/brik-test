import LoginPage from './pages/loginPage';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import RegisterPage from './pages/registerPage';
import { store } from './redux/store';
import { Provider } from "react-redux";
import MainLayout from './components/mainLayout';
import HomePage from './pages/homePage';
import DetailProduct from './pages/detailProductPage';
import AddProduct from './pages/addProductPage';
import EditProduct from './pages/editProduct';


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: () => {
      if (localStorage.access_token) {
        return null;
      }
      return redirect("/login");
    },
    children: [
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/edit-product/:id",
        element: <EditProduct />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <DetailProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}


export default App
