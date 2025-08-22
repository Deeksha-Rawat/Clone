// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
// import foodFireLogo from "./public/Images/foodFireLogo.png";
import { IMG_CDN_URL } from "/public/Common/constants";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Body from "./Components/Body";
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
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
