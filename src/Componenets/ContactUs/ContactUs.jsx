import React from "react";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="aboutUsBody">
        <div className="aboutUsBody-placer">
          <div className="aboutUsBody-Title">
            <span>Contact Us</span>
          </div>
          <div className="aboutUsBody-Content">
            We'd love to hear from you! If you have any questions, suggestions,
            or feedback, please don't hesitate to contact us at &nbsp;
            <a href="mailto:raghav.work1@gmail.com">raghav.work1@gmail.com</a>
          </div>
        </div>
      </div>
      {/* Footer Start's*/}
      <Footer contactUs={true} />
      {/* Footer End's*/}
    </>
  );
};

export default ContactUs;
