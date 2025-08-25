import { Outlet } from "react-router";

const About = () => {
  return (
    <>
      <div className="about-container">
        <br></br>
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Order<span>it</span> healthy
            meal"
          </h4>
          <Outlet />
        </div>
        <div className="about-right">
          {/* <img src="" alt="Food Image" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
