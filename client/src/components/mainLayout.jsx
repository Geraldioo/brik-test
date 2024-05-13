import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaSquarePlus } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import Swal from "sweetalert2";

const MainLayout = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();

    navigate("/login");
    Swal.fire({
      title: "You've Been Log Out",
      icon: "warning",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handeleSidebar = () => {
    setHidden(!isHidden);
  };

  const handleHeaderClick = () => {
    setContentVisible(!isContentVisible);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <main
        className="min-h-screen w-full bg-white text-gray-700"
        x-data="layout"
      >
        <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
          <div className="flex items-center space-x-2">
            <button onClick={handeleSidebar} type="button" className="text-3xl">
              <i className="bx bx-menu" />
            </button>
            <div className="text-xl pl-5 font-semibold">Klontong</div>
          </div>
          <div>
            <button
              onClick={handleHeaderClick}
              type="button"
              className="h-12 w-12 rounded-full overflow-hidden"
            >
              <IoPersonCircleOutline className="object-cover w-full h-full" />
            </button>
            {isContentVisible && (
              <div
                className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
                x-show="profileOpen"
                x-transition=""
              >
                {localStorage.access_token ? (
                  <>
                    <div className="flex items-center space-x-2 p-2">
                      <div className="font-medium">{localStorage.username}</div>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 transition hover:text-blue-600"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <div>Log Out</div>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="p-2">
                    <Link to={"/login"}>
                      <button className="flex items-center space-x-2 transition hover:text-blue-600">
                        <MdSupervisorAccount className="h-5 w-5" />
                        <div>Log In</div>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
        <div className="flex">
          {isHidden && (
            <aside
              className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
              style={{ height: "90.5vh" }}
              x-show="asideOpen"
            >
              <Link to={"/"}>
                <button className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                  <span className="text-2xl">
                    <GoHomeFill />
                  </span>
                  <span>Home</span>
                </button>
              </Link>
              <Link to={"/add-product"}>
                <button className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                  <span className="text-2xl">
                    <FaSquarePlus />
                  </span>
                  <span>Add Product</span>
                </button>
              </Link>
            </aside>
          )}
          {/* main content page */}
          <div className="w-full p-4">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
