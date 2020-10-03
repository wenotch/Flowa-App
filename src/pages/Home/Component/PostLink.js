import React from "react";
import Post from "./Posts";
import Linkcss from "./Postcss.module.css";
function Postlink(props) {
  return (
    <a className={Linkcss.LinkPost} href={props.href}>
      <Post
        posterImg={props.posterimg}
        userName={props.username}
        imgSrc={props.imgsrc}
        alt={props.alt}
        flowaName={props.flowaname}
        category={props.category}
      />
    </a>
  );
}
export default Postlink;
