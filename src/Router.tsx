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
import { RegisterPage } from "./app/register/RegisterPage";
import { DetailHistoryOrderPage } from "./app/detail-history-order/DetailHistoryOrderPage";
import { ErrorPage } from "./app/Error/ErrorPage";
import { UnauthorizedPage } from "./app/Error/UnauthorizedPage";

export const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <UserLayout />,
      errorElement: <ErrorPage />,
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
            <PrivateRoute to={"/login"} requiredRoles={['admin']}>
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
          element: (
            <PrivateRoute to={"/login"} requiredRoles={['user']}>
              <CheckoutPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/history-order",
          element: <HistoryOrderPage />,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute to={"/login"} requiredRoles={['user']}>
              <ProfilePage />
            </PrivateRoute>
          ),
        },
        {
          path: "/detail-order",
          element: (
            <PrivateRoute to={"/login"} requiredRoles={['user']}>
              <HistoryOrderPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/order/:id",
          element: (
            <PrivateRoute to={"/login"} requiredRoles={['user']}>
              <DetailHistoryOrderPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/unauthorized",
      element: <UnauthorizedPage />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);
