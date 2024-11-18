import "./Middle.css";
const Middle = () => {
  const scrollToContact = () => {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="body">
      <div className="Gradient">
        <p>Transform Your Business</p>
      </div>
      <p>
        with Tailored Software Solutions That Drive Innovation and Growth.
        {/* WITH INNOVATIVE<br></br>
        SOFTWARE SOLUTIONS<br></br>TAILORED TO YOUR NEEDS */}
      </p>
      <p>
        Partner with Our Expert Team for Customized Software Development and
        Reliable Outsourcing Services.
        {/* team of <br></br>
        experts. */}
      </p>
      <button onClick={scrollToContact}>Contact us</button>
    </div>
  );
};
export default Middle;
