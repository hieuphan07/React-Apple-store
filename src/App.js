import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/Root';
import ErrorPage from "./pages/Error";
import HomePage, { loader as homeProductsLoader } from "./pages/Home";
import ShopPage, { loader as shopProductsLoader } from "./pages/Shop";
import DetailPage from "./pages/Detail";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeProductsLoader
      },
      {
        path: 'shop',
        children: [
          {
            index: true,
            element: <ShopPage />,
            loader: shopProductsLoader,
          },
          { path: ':productId', element: <DetailPage /> },
        ]
      },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
