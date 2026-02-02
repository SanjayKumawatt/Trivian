import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetails'
import PrivacyPolicy from './Pages/Privacy'
import TermsConditions from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/services",
          element:<Services/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/get-started",
          element:<Contact/>
        },
        {
          path:"/demo",
          element:<Contact/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/products/:id",
          element:<ProductDetail/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-conditions",
          element:<TermsConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App