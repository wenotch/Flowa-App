import React from "react";
import Tipcss from "./Tip.module.css";
function Tip(props) {
  return (
    <div className={Tipcss.TipDiv}>
      <img className={Tipcss.Icon} src={props.icon} alt="" />
      <h6 className={Tipcss.Title}>{props.title}</h6>
      <h2 className={Tipcss.Content}>{props.content}</h2>
    </div>
  );
}
export default Tip;
