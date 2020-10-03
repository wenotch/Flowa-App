import React from "react";
import Homecss from "./Home.module.css";
import NavImg from "../../images/Nav-img.png";
import Postlink from "./Component/PostLink";
import Peter from "../../images/Chi2x.png";
import Sun from "../../images/Sun2x.png";
import Joy from "../../images/Joy2x.png";
import Als from "../../images/Als2x.png";
import Maria from "../../images/Maria2x.png";
import Ama from "../../images/Ama2x.png";
import Bato from "../../images/Bato2x.png";
import Aster from "../../images/Aster2x.png";
import IconHome from "../../images/Home-icon.png";
import IconNewPost from "../../images/Newpost.png";
import IconAccount from "../../images/Account-icon.png";
function Home() {
  return (
    <div>
      <div className={Homecss.FlowaImg}>
        <img
          className={Homecss.NavImg}
          src={NavImg}
          alt="this is the nav images and logo of the flowa app"
        />
        <h2 className={Homecss.Herotxt}>Know thy flower</h2>
        <input type="search" placeholder="search" />
      </div>
      <div className={Homecss.Postarea}>
        <Postlink
          href="/amaryllis"
          posterimg={Peter}
          username="Peter Ali"
          imgsrc={Sun}
          alt="sunflower"
          flowaname="Sunflower"
          category="Pure though"
        />
        <Postlink
          href="/amaryllis"
          posterimg={Joy}
          username="Joy Martins"
          imgsrc={Als}
          alt="alstroemeria"
          flowaname="Alstroemeria"
          category="Wealth and fortune"
        />
        <Postlink
          href="/amaryllis"
          posterimg={Maria}
          username="Maria Paul"
          imgsrc={Ama}
          alt="amaryllis"
          flowaname="Amaryllis"
          category="Splendid beauty"
        />
        <Postlink
          href="/amaryllis"
          posterimg={Bato}
          username="Emmanuel Bato"
          imgsrc={Aster}
          alt="aster"
          flowaname="Aster"
          category="Elegance and daintiness"
        />
      </div>
      <div className={Homecss.LastDiv}>
        <a href="/home">
          <img alt="" src={IconHome} />
        </a>
        <a className={Homecss.PostaLink} href="/home">
          <img alt="" src={IconNewPost} />
        </a>
        <a className={Homecss.Accountlink} href="/account">
          <img alt="" src={IconAccount} />
        </a>
      </div>
    </div>
  );
}

export default Home;
