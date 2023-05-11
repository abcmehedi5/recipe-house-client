import React from "react";
import Pdf from "react-to-pdf";
import { BsCloudDownload } from "react-icons/bs";
const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="container mb-5">
      {/* -------------------react to pdf------------------- */}

      <h4 className="text-center mb-5 mt-5 fw-bold">QNA</h4>
      <div className="mb-3 text-white">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn btn-info">
              <BsCloudDownload size={20} /> Download PDF
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Tell us the differences between uncontrolled and controlled
              components?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How to validate React props using PropTypes?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              propTypes is used for props validation. If some of the props
              aren't using the correct type that we assigned, we will get a
              console warning. After we specify validation patterns, we will set
              App. defaultProps.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Tell us the difference between nodejs and express js.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              NodeJS is a framework of JavaScript which is mainly used for
              working with the backend of our application or building the
              backend using JavaScript, whereas ReactJS is a JavaScript
              front-end library. It is mainly used for building the user
              interface or the frontend of our application.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFoure">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFoure"
              aria-expanded="false"
              aria-controls="collapseFoure"
            >
              What is a custom hook, and why will you create a custom hook?
            </button>
          </h2>
          <div
            id="collapseFoure"
            className="accordion-collapse collapse"
            aria-labelledby="headingFoure"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              A custom Hook is a JavaScript function that begins with use. It is
              not mandatory to begin the custom Hook name with “use,” but
              without it, React would be unable to check for violations of the
              Hooks rules automatically. Therefore, it is critical to adhere to
              that naming convention.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
