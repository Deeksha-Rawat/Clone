// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
// const Title = () => (
//   <a href="/">
//     <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
//     <img
//       className="logo"
//       src="/Users/deeksha.rawat/Desktop/sw/public/Images/foodFireLogo.png"
//       alt="Food Fire Logo"
//     />
//   </a>
// );

// Restaurant card component: Image, name, cuisine

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
// const appRouter = createBrowserRouter([
// {
//   path: "/", // show path for routing
//   element: <AppLayout />, // show component for particular path
//   errorElement: <Error />, // show error component for path is different
// children: [
//   // show children component for routing
//   {
//     path: "/",
//     element: <Body />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// {
//   path: "/contact",
//   element: <Contact />,
// },
// {
//   path: "/restaurant/:resId",
//   element: <RestaurantMenu />,
// },
//   ],
// },
// {
//   path: "/login",
//   element: <Login />,
// },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
