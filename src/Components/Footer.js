const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://myportfolio-9.netlify.app/" target="_blank">
        Deeksha
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Order<span>it</span>
      </strong>
    </div>
  );
};

export default Footer;
