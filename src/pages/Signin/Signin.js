import React, { useEffect, useState, useRef } from "react";
import Mycss from "./Modal.module.css";
import MyCenterCss from "./Mycss.module.css";
import FlowaLogo from "./../../images/flowa-logo.png";

function Signin() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={MyCenterCss.Signn}>
      <div>
        <img
          src={FlowaLogo}
          className={MyCenterCss.Flowa}
          alt="this is the official Logo of the flowa App"
        />
        <button className={MyCenterCss.Logbtn} onClick={() => setIsOpen(true)}>
          Sign in
        </button>
        <button className={MyCenterCss.Logbtn} onClick={() => setIsOpen(true)}>
          Sign up
        </button>
      </div>
      {isOpen ? (
        <div className={Mycss.Modal}>
          <div className={Mycss.Account}>Account</div>
          <input className={Mycss.First} type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a
            href="/home"
            className={Mycss.LogbtnS}
            // onClick={() => setIsOpen(true)}
          >
            Sign In
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Signin;
