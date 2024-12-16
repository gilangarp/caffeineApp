import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
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
  createRoutesFromElements(
    <>
    <Route path="/" element={<UserLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="product" element={<ProductPage />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute to="/login" requiredRoles={['admin']}>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route path="detail-product/:id" element={<ProductDetailPage />} />
      <Route
        path="checkout"
        element={
          <PrivateRoute to="/login" requiredRoles={['user']}>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path="history-order" element={<HistoryOrderPage />} />
      <Route
        path="profile"
        element={
          <PrivateRoute to="/login" requiredRoles={['user']}>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="detail-order"
        element={
          <PrivateRoute to="/login" requiredRoles={['user']}>
            <HistoryOrderPage />
          </PrivateRoute>
        }
      />
      <Route
        path="order/:id"
        element={
          <PrivateRoute to="/login" requiredRoles={['user']}>
            <DetailHistoryOrderPage />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/unauthorized" element={<UnauthorizedPage />} />
  </>
),
{
  future: {
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
}
);
