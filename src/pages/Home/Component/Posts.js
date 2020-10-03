import React from "react";
import Postcss from "./Postcss.module.css";
import Dot from "../../../images/Dot.png";
function Post(props) {
  return (
    <div className={Postcss.PostDiv}>
      <img className={Postcss.Flowaimg} src={props.imgSrc} alt={props.alt} />
      <p className={Postcss.Flowaname}>
        {props.flowaName}{" "}
        <span className={Postcss.Meanings}>
          <img src={Dot} className={Postcss.Dot} alt="" />
          {props.category}
        </span>
      </p>
      <div className={Postcss.LastPostDiv}>
        <img src={props.posterImg} alt={props.userName} />
        <p>{props.userName}</p>
      </div>
    </div>
  );
}
export default Post;
