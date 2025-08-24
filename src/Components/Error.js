import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <img
        className="errorimg web"
        src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/513dfe74-c8f9-4120-8381-58e375454304.png?utm_source=perplexity"
        alt="Error Image"
      />
      <img
        className="errorimg mob"
        src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/39c62546-c405-45cb-9930-470493961df8.png"
        alt="error image"
      />
      {/* <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">Error: No route matches URL "/error"</h3>
      <h3 className="error-back-home">
        <a href="/">Back Home</a>
      </h3> */}
    </div>
  );
};

export default Error;
