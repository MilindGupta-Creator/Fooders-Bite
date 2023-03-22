import './App.css';
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Footer from './components/Footer';
import Body from './components/Body';
import Header from './components/Header';
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/",
        element:<Body/>,
      },
    ],
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


export default App;
