import { useState } from "react";
// import contactUs from "../../../public/Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear input fields
    setName("");
    setEmail("");
    setText("");
    setMessage(true);
    console.log("clear it");
  };
  return (
    <div className="contact-container">
      <div className="contact-left">
        {/* <img src={contactUs} alt="Contact us" /> */}
      </div>
      <div className="contact-right">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Type your Message here..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          {message && (
            <span>Thanks for contacting OrderIt, We will reply ASAP.</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
