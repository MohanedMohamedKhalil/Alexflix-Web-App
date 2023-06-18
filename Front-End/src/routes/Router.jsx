import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdminGaurdRouter from "./AdminGaurdRouter.jsx";
import NotFound from "./../components/NotFound";

import Login from "./../pages/AccountPages/Login";
import Register from "./../pages/AccountPages/Register";
import RecoverPassword from "./../pages/AccountPages/RecoverPassword";
import ChangePassword from "./../pages/AccountPages/ChangePassword";
import Profile from "./../pages/AccountPages/Profile";
import ResetPassword from "./../pages/AccountPages/ResetPassword";
import ConfirmEmail from "../components/ConfirmEmail";
import UserGaurdRouter from "./UserGaurdRouter.jsx";
import { Home } from "../components/Home Component/Home";
import { UserGuard } from "../guards/AuthGuards.js";

export default function Router() {
  const AddUser = lazy(() => import("../pages/AdminPages/AddUser"));
  const AddMovie = lazy(() => import("../pages/AdminPages/AddMovie"));
  const AddProduct = lazy(() => import("../pages/AdminPages/AddProduct"));
  const UserList = lazy(() => import("../pages/AdminPages/UserList"));
  const MoviesList = lazy(() => import("../pages/AdminPages/MoviesList"));
  const ProductsList = lazy(() => import("../pages/AdminPages/ProductsList"));
  const OrdersList = lazy(() => import("../pages/AdminPages/OrdersList"));
  const ReviewsList = lazy(() => import("../pages/AdminPages/ReviewsList"));

  // E-Commerce
  const Cart = lazy(() => import("./../pages/ProductPages/Cart"));
  const Store = lazy(() => import("./../pages/ProductPages/Store"));
  const ProductDetails = lazy(() =>
    import("./../pages/ProductPages/ProductDetails")
  );
  //Stream
  const Movies = lazy(() =>
    import("../components/Streaming Components/Movies Component/Movies")
  );
  const MovieDetails = lazy(() =>
    import("../components/Streaming Components/Movie page component/Movie")
  );
  const Favorites = lazy(() =>
    import("../components/Streaming Components/Favorites component/Favorites")
  );
  const Animes = lazy(() =>
    import("../components/Streaming Components/Anime Component/Anime")
  );
  const Series = lazy(() =>
    import("../components/Streaming Components/Series Component/Series")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminGaurdRouter />}>
          <Route path="/" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/moviesList" element={<MoviesList />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/ordersList" element={<OrdersList />} />
          <Route path="/reviewsList" element={<ReviewsList />} />
        </Route>
        {/* E-Commerce */}
        <Route path="/store" element={<UserGaurdRouter />}>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/cart" element={<Cart />}></Route>
          <Route path="/store/product/:id" element={<ProductDetails />}></Route>
          <Route path="/store/search" element={<Store />}></Route>
        </Route>

        {/* Stream */}
        <Route element={<UserGaurdRouter />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/anime" element={<Animes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/home" element={<UserGuard><Home /></UserGuard>} />
        <Route path="/changePassword" element={<UserGuard><ChangePassword /></UserGuard>} />
        <Route path="/profile" element={<UserGuard><Profile /></UserGuard>} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />  
        <Route path="/resetPassword/:id" element={<ResetPassword />} />
        <Route path="/confirmEmail" element={<ConfirmEmail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
