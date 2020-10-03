import React from "react";
import Hero from "../../images/Ama-hero.png";
import Obi from "../../images/Obi.png";
import Maria from "../../images/Maria2x.png";
import Backarr from "../../images/Backarr.png";
import Pressure from "../../images/Pressure.png";
import Light from "../../images/Light.png";
import Temperature from "../../images/Temperature.png";
import Amacss from "./Amacss.module.css";
import Tips from "./TIp/Tip";
function Ama() {
  return (
    <div>
      <img src={Hero} alt="" className={Amacss.Ahero} />
      <a href="/home">
        <img src={Backarr} className={Amacss.Backarr} alt="" />
      </a>
      <a href="/amaryllis">
        <img src={Obi} className={Amacss.Obi} alt="" />
      </a>
      <div className={Amacss.AmaDiv}>
        <h1>Amaryllis</h1>
        <div className={Amacss.SmallDiv}>
          <img src={Maria} alt="" />
          <h3>Maria Paul</h3>
        </div>
        <p>
          This flower is symbolic of splendid beauty. It is also used to
          indicate worth beyond beauty.
        </p>
        <h4>Growth tips</h4>
        <div className={Amacss.Overall}>
          <Tips content="20-27C" title="Temperature" icon={Temperature} />
          <Tips content="Diffused" title="Light" icon={Light} />
          <Tips content="20 atm" title="Pressure" icon={Pressure} />
        </div>
      </div>
    </div>
  );
}
export default Ama;
