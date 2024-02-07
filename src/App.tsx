import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const user = true

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <ProductList />,
      children: [
        {
          path: ':category',
          element: <ProductList />
        }
      ]
    },
    {
      path: '/product',
      element: <Product />,
      children: [
        {
          path: ':id',
          element: <Product />
        }
      ]
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/login',
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: '/register',
      element: user ? <Navigate to="/" /> : <Register />,
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
