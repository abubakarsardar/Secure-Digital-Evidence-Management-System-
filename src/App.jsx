import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import { ErrorPage } from "./UI/ErrorPage/ErrorPage";
import Home from "./UI/Home/Home";
import { AppLayout } from "./UI/AppLayout";
import { RBAC } from "./UI/RBAC/RBAC";
import { JUDGES } from "./UI/JUDGES/JUDGES";



const router = createBrowserRouter([
  {
    path: '/',
    element : <AppLayout />,
    errorElement : <ErrorPage />,
    children :[{
      path: '/',
      element: <Home />,
    }
    ,
    {
      path : '/RBAC',
      element : <RBAC />,
    }
    ,
    {
      path : '/RBAC/JUDGES',
      element : <JUDGES />,
    }
  ]
  }


])

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App