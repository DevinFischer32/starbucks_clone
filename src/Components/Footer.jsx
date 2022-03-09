import React from "react";
import { Link } from "react-router-dom";
import Youtube from "../Css/Logos/png/001-youtube.png";
import Pinterest from "../Css/Logos/png/002-pinterest.png";
import Spotify from "../Css/Logos/png/003-spotify.png";
import Facebook from "../Css/Logos/png/004-facebook.png";
import Instagram from "../Css/Logos/png/005-instagram.png";
import Twitter from "../Css/Logos/png/006-twitter.png";

export default function Footer() {
  return (
    <div id="footer_container">
      <section id="footer_Main">
        <div className="footer_Main_Columns">
          <Link to="/about-us">
            <h1 className="footer_title">About Us</h1>
          </Link>
          <p className="footer_subTitle">Our Company</p>
          <p className="footer_subTitle">Our Coffee</p>
          <p className="footer_subTitle">Stories and News</p>
          <p className="footer_subTitle">Starbucks Archive</p>
          <p className="footer_subTitle">Investor Relations</p>
          <p className="footer_subTitle">Customer Service</p>
        </div>
        <div className="footer_Main_Columns">
          <h1 className="footer_title">Careers</h1>
          <p className="footer_subTitle">Cultures and Values</p>
          <p className="footer_subTitle">Inclusion, Diveristy, and Equity</p>
          <p className="footer_subTitle">College Achievement Plan</p>
          <p className="footer_subTitle">Alumni Community</p>
          <p className="footer_subTitle">U.S. Careers</p>
        </div>
        <div className="footer_Main_Columns">
          <h1 className="footer_title">Social Impact</h1>
          <p className="footer_subTitle">People</p>
          <p className="footer_subTitle">Planet</p>
          <p className="footer_subTitle">
            Enviromental and Social Impact Reporting
          </p>
        </div>
        <div className="footer_Main_Columns">
          <h1 className="footer_title">For Business Partners</h1>
          <p className="footer_subTitle">Landlord Support Center</p>
          <p className="footer_subTitle">Suppliers</p>
          <p className="footer_subTitle">Corporate Gift Card Sales</p>
          <p className="footer_subTitle">Office and Foodservice Coffee</p>
        </div>
        <div className="footer_Main_Columns">
          <h1 className="footer_title">Order and Pickup</h1>
          <p className="footer_subTitle">Order on the App</p>
          <p className="footer_subTitle">Order on the Web</p>
          <p className="footer_subTitle">Delivery</p>
          <p className="footer_subTitle">Order and Pickup Options</p>
          <p className="footer_subTitle">Explore and Find Coffee for Home</p>
        </div>
      </section>
      <section className="footer_Sub">
        <div id="footer_Sub_Icons">
          <img src={Spotify} alt="Spotify" className="Icons" />
          <img src={Facebook} alt="Facebook" className="Icons" />
          <img src={Pinterest} alt="Pinterest" className="Icons" />
          <img src={Instagram} alt="Instagram" className="Icons" />
          <img src={Youtube} alt="Youtube" className="Icons" />
          <img src={Twitter} alt="Twitter" className="Icons" />
        </div>
        <div id="footer_Sub_TOS">
          <p className="footer_TOS">Privacy Policy</p>
          <p className="footer_dash">|</p>
          <p className="fopter_TOS">Terms of Use</p>
          <p className="footer_dash">|</p>
          <p className="footer_TOS">CA Supply Chain Act</p>
          <p className="footer_dash">|</p>
          <p className="footer_TOS">Cookies Preferences</p>
        </div>
        <div id="footer_Sub_CopyRight">
          2022 Starbucks Coffee Company. All Rights Reserved.
        </div>
      </section>
    </div>
  );
}
