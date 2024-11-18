import "./Bottom.css";
const Bottom = () => {
  return (
    <div className="w-full h-full items-center justify-center">
      <div className="Bottom">
        <h5 className="" >Our core services</h5>
        <div className="ourServices" id="box1">
          <div className="flex gap-11 w-[30%] ">
            <h1>01</h1>
            <p>
              Web & mobile app<br></br> development
            </p>
          </div>

          <div className="w-[70%]" id="innerbox1">
            <p>
              Optimize your business and turn your ideas into reality with our
              custom web and mobile app development.We develop user-centric
              solutions that get results.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="ourServices" id="box2">
          <div className="flex gap-11 w-[30%] ">
            <h1>02</h1>
            <p>
              Quality Assurance & <br></br>Testing
            </p>
          </div>
          <div className="w-[70%]" id="innerbox2">
            <p>
              Comprehensive quality assuarance and testing finds and eliminates
              bugs before they go to market.This saves your time and
              money,ensuring your software stable,secure,and adheres to the
              highest quality standards.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="ourServices" id="box3">
        <div className="flex gap-11 w-[30%] ">
          <h1>03</h1>
          <p>UX/UI Design</p>
          </div>
          <div className="w-[70%]" id="innerbox3">
            <p>
              {" "}
              We provide UI/UX design to transform complex ideas into
              user-friendly interfaces,maximizing usability and impact to drive
              engagement and user satisfaction.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="ourServices" id="box4">
        <div className="flex gap-11 w-[30%] ">
          <h1>04</h1>
          <p>Technical Support</p>
          </div>
          <div className="w-[70%]"  id="innerbox4">
            <p>
              Our reliable technical support provides expert assistance to
              quickly and effectively resolve issues,maximize user
              satisfaction,and keep your systems running smoothly.
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="ourServices" id="box5">
        <div className="flex gap-11 w-[30%] ">
          <h1>05</h1>
          <p>
            Artificial Intelligence <br></br>Applications and<br></br>
            Integrations
          </p>
          </div>
          <div className="w-[70%]" id="innerbox5">
            <p>
              Join us to build and integrate custom AI capability and solutions
              to automate tasks,personalize experiences,drive results,transform
              workflows,and increase efficiency.
            </p>
          </div>{" "}
        </div>
        <hr></hr>
      </div>
    </div>
  );
};
export default Bottom;
