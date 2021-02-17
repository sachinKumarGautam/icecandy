import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    const text = `We script, design, direct and produce animation films including
    Television commercials, Public service  announcements, Promotional
    content for  TV channels, TV serials and feature length films`;
    return (
      <div className="about-page-container">
        <a href="/">
          <img alt="logo" className="logo" src={"/IC_TEXT.png"} />
        </a>
        <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
        <div className="footer">
          <div>contact us</div>
          <a href="mailto:hi@icecandy.in" className="email">
            hi@icecandy.in
          </a>
          <div className="copyright">
            © icecandy . 2021 . All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default About;
