import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { useAuth } from './hooks/useAuth'
import ProtectedRoute from './components/ProtectedRoute'
import SimpleDashboardPage from './pages/SimpleDashboardPage'


// const DashboardPage = () => {
//   const { user } = useAuth();

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <h1>{user.name}</h1>
//       <h1>{user.email}</h1>
//       <h1>{user.role}</h1>
//       <Outlet />
//     </div>
//   )
// }
const HomePage = () => <h1>Home Page</h1>
const UsersPage = () => <h1>Users Page</h1>
const ProductsPage = () => <h1>Product Page</h1>
const TransactionsPage = () => <h1>Transactions Page</h1>
const CounterPage = () => <h1>Counter Page</h1>


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>,
    children: [
      {
        path: "",
        element: <Navigate to={"dashboard"} />
      },
      {
        path: "/dashboard",
        element: <SimpleDashboardPage />,
        children: [
          {
            path: "",
            element: <HomePage />
          },
          {
            path: "users",
            element: <UsersPage />
          },
          {
            path: "products",
            element: <ProductsPage />
          },
          {
            path: "transactions",
            element: <TransactionsPage />
          },
          {
            path: "counter",
            element: <CounterPage />
          },
        ]
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },

])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
