import React from "react";
import Hero from "../../images/Account-hero.png";
import Backarr from "../../images/Backarr.png";
import Acctcss from "./Account.module.css";
// import Acctcss from "../Home/Home.module.css";
import Joy from "../../images/girl.png";
import Like from "../../images/Like.png";
import Following from "../../images/Following.png";
import Followers from "../../images/Followers.png";
// import Whitelike from "../../images/whitelike.png";
import Anemone from "../../images/plan.png";
import IconHome from "../../images/Homew-icon.png";
import IconNewPost from "../../images/Newpost.png";
import IconAccount from "../../images/Accountb-icon.png";

function Account(props) {
  return (
    <div>
      <img src={Hero} alt="" className={Acctcss.Hero} />
      <a href="/home">
        <img src={Backarr} className={Acctcss.Backarr} alt="" />
      </a>
      <div className={Acctcss.Ppp}>
        <img className={Acctcss.Profileimg} src={Joy} alt="Joy" />
        <div className={Acctcss.Tagname}>
          <h2>Joy Martin</h2>
          <div className={Acctcss.Cont}>
            <img src={Like} alt="" />
            <p>27</p>
            <img src={Following} alt="" />
            <p>57</p>
            <img src={Followers} alt="" />
            <p>152</p>
          </div>
        </div>
        <div className={Acctcss.Main}>
          <div className={Acctcss.Buttons}>
            <button>About</button>
            <button className={Acctcss.Centerbtn}>Flowers</button>
            <button>Favorites</button>
          </div>
          <div className={Acctcss.Cct}>
            <div className={Acctcss.EachPost}>
              <img src={Anemone} alt="" />
            </div>
            <div className={Acctcss.EachPost}>
              <img src={Anemone} alt="" />
              {/* <img src={Whitelike} alt="" className={Acctcss.Likeimg} /> */}
            </div>
          </div>
          <div className={Acctcss.Cct}>
            <div className={Acctcss.EachPost}>
              <img src={Anemone} alt="" />
            </div>
            <div className={Acctcss.EachPost}>
              <img src={Anemone} alt="" />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className={Acctcss.LastDivv}>
        <a href="/home" className={Acctcss.Homelink}>
          <img alt="" src={IconHome} />
        </a>
        <a className={Acctcss.PostaLink} href="/account">
          <img alt="" src={IconNewPost} />
        </a>
        <a className={Acctcss.Accountlink} href="/account">
          <img alt="" src={IconAccount} />
        </a>
      </div>
    </div>
  );
}
export default Account;
