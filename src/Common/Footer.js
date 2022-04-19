import "./footer.css";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FcAndroidOs } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <div className="footmain">
        <div className="footleft">
          <span className="foottitle">DEXTER</span>
          <span className="footsubtitle">TRADERS</span>
        </div>
        <div className="footmiddle">
          <p className="footpara1">
            Whether you're new to E-commerce, or just new to DEXTER,{" "}
          </p>
          <p>
            We're glad you are here.
            <strong>Stay informed for out special offers.</strong>
          </p>
          <div class="input-group foottext">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="footright">
          <ul className="footiconlist">
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/linn07/"><img className="footiconimages " src="linkedin.png" /></a>
            </li>
            <li className="instagram">
              <img className="footiconimages " src="instagram.png" />
            </li>
            <li className="facebook">
              <img className="footiconimages " src="facebook.png" />
            </li>
            <li className="github">
              <a  href="https://github.com/Lingeshwaran07"><img className="x" src="github.png" /></a>
            </li>
          </ul>

          <div className="appicons">
            <p className="iosandr">
              <AiFillApple className="ios" />
              iOS app
            </p>
            <p className="iosandr">
              <FcAndroidOs className="andr" />
              Android app
            </p>
          </div>
        </div>
      </div>
      <p className="disclaimer">
        The information contained in this website is for general information
        purposes only. The information is provided by [business name] and while
        we endeavour to keep the information up to date and correct, we make no
        representations or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, suitability or availability with
        respect to the website or the information, products, services, or
        related graphics contained on the website for any purpose. Any reliance
        you place on such information is therefore strictly at your own risk. In
        no event will we be liable for any loss or damage including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of this website. Through this website you
        are able to link to other websites which are not under the control of
        [business name]. We have no control over the nature, content and
        availability of those sites. The inclusion of any links does not
        necessarily imply a recommendation or endorse the views expressed within
        them.Every effort is made to keep the website up and running smoothly.
        However, [business name] takes no responsibility for, and will not be
        liable for, the website being temporarily unavailable due to technical
        issues beyond our control.
      </p>
      
      <div className="footend">
          <p className="awarddesp">Believe in our quality</p>
          <div className="footaward">
              <img className="award1" src="a1.png"></img>
              <img className="award1" src="a2.png"></img>
              <img className="award1" src="a3.jpg"></img>
              <img className="award1" src="a4.jpg"></img>
          </div>
      </div>
    </>
  );
};

export default Footer;
