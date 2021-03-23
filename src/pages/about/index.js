import React from "react";
import { IKImage, IKContext } from "imagekitio-react";

import "./about.css";

class About extends React.Component {
  render() {
    const text = `We script, design, direct and produce animation films including
    Television commercials, Public service  announcements, Promotional
    content for  TV channels, TV serials and feature length films`;
    return (
      <div className="about-page-container">
        <div className="left">
          <a href="/">
            <img alt="logo" className="logo" src={"/IC_TEXT.png"} />
          </a>
          <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
            <IKImage
              path={"/Frame_4.png"}
              className="office-pic mobile"
              lqip={{ active: true }}
            />
          </IKContext>
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
        <div className="right">
          <IKContext urlEndpoint="https://ik.imagekit.io/nr8jbipyb/">
            <IKImage
              path={"/Frame_3.png"}
              className="office-pic"
              lqip={{ active: true }}
            />
          </IKContext>
        </div>
      </div>
    );
  }
}

export default About;
