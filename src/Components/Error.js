import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  return (
    <div className="error-page">
      <img src="../../public/Images/errorImage.jpg" alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">Error: No route matches URL "/error"</h3>
      <h3 className="error-back-home">
        <a href="/">Back Home</a>
      </h3>
    </div>
  );
};

export default Error;
