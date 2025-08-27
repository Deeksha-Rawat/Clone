import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page">
      <img
        className="errorimg web"
        src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/276a800e-cfbb-4297-9cad-49ca7ee1e1c7.png"
        alt="Error Image"
      />
      <img
        className="errorimg mob"
        src="https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/7f6c6761-05c0-4fb9-9896-148aa7112684.png"
        alt="error image"
      />
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;
