import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="flex items-center gap-4 justify-center ">
        <div className="gradient">
          <h1>JISS</h1>
        </div>
        <div className="logo">
          <p>
            INTERNATIONAL CORPORATE
            <br />
            SERVICES{" "}
          </p>
        </div>
      </div>
      <div  className="flex items-center gap-7 justify-center " >
        <h3>About</h3>
        <h3>Services</h3>
        <h3>Industries</h3>
        <h3>Contacts</h3>

        <div className="color-button">
          <div className="color"></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
