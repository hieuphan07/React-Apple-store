import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/Root';
import ErrorPage from "./pages/Error";
import HomePage, { loader as productsLoader } from "./pages/Home";
import ShopPage from "./pages/Shop";
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
        loader: productsLoader
      },
      {
        path: 'shop',
        element: <ShopPage />
      },
      { path: 'detail/:productId', element: <DetailPage /> },
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
