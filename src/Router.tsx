import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./app/layout/UserLayout";
import { HomePage } from "./app/home/HomePage";
import { ProductPage } from "./app/product/ProductPage";
import { CheckoutPage } from "./app/checkout/CheckoutPage";
import { LoginPage } from "./app/login/LoginPage";
import { ProductDetailPage } from "./app/product-detail/ProductDetailPage";
import { DashboardPage } from "./app/dashboard/DashboardPage";
import { HistoryOrderPage } from "./app/history-order/HistoryOrderPage";
import { ProfilePage } from "./app/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute to={"/login"}>
            <DashboardPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/detail-product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "history-order",
        element: <HistoryOrderPage />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute to={"/login"}>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
