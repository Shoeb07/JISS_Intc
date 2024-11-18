import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="flex items-center gap-5">
          <h1 className="part1">JISS</h1>
          <p>
            INTERNATIONAL CORPORATE
            <br />
            SERVICES{" "}
          </p>
        </div>
        <div className="part2">
          <h6>Services</h6>
          <h6>About us</h6>
          <h6>Contacts</h6>
          <h6>Privacy policy</h6>
        </div>
        <div className="part3">
          <h6>Industries</h6>
          <h6>E-commerce</h6>
          <h6>AI implementation</h6>
          <h6>Edtech</h6>
        </div>
        <div className="part4">
          <h6> </h6>
          <h6>sales@jissint.com</h6>
          <h6>info@jissint.com</h6>
        </div>
      </div>
      <div className="flex items-center">
        <div className="para">
          <p>© 2024 JISS. All rights reserved.</p>
        </div>
        <div className="name"></div>
      </div>
    </div>
  );
};
export default Footer;
