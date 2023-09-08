import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './pages/Root';
// import ErrorPage from "./pages/Error";
import HomePage, { loader as homeProductsLoader } from "./pages/Home";
// import ShopPage, { loader as shopProductsLoader } from "./pages/Shop";
// import DetailPage from "./pages/Detail";
// import CartPage from "./pages/Cart";
// import CheckoutPage from "./pages/Checkout";
// import LoginPage from "./pages/Login";
// import RegisterPage from "./pages/Register";

const Shop = lazy(() => import('./pages/Shop'));
const Detail = lazy(() => import('./pages/Detail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Error = lazy(() => import('./pages/Error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Suspense><Error /></Suspense>,
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
            element: <Suspense><Shop /></Suspense>,
            loader: () => import('./pages/Shop').then(module => module.loader()),
          },
          { path: ':productId', element: <Suspense><Detail /></Suspense> },
        ]
      },
      {
        path: 'cart',
        children: [
          {
            index: true,
            element: <Suspense><Cart /></Suspense>
          },
          { path: 'checkout', element: <Suspense><Checkout /></Suspense> },
        ]
      },
      { path: 'login', element: <Suspense><Login /></Suspense> },
      { path: 'register', element: <Suspense><Register /></Suspense> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
