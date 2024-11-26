import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "./app/layout/UserLayout";
import { HomePage } from "./app/home/HomePage";
import { ProductPage } from "./app/product/ProductPage";
import { CheckoutPage } from "./app/checkout/CheckoutPage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "./app/login/LoginPage";
import { ProductDetailPage } from "./app/product-detail/ProductDetailPage";

const isAuthenticated = false;

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
        path: "/checkout",
        element: (
          <PrivateRoute
            element={<CheckoutPage />}
            isAuthenticated={isAuthenticated}
          />
        ),
      },
      {
        path:"/detail-product/:uuid",
        element:<ProductDetailPage/>
      }
    ],
  },
  {
    path:"/login",
    element:<LoginPage/>
  }
]);


