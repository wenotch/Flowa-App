import React, { useEffect, useState, useRef } from "react";
import Mycss from "./Modal.module.css";
import MyCenterCss from "./Mycss.module.css";
import FlowaLogo from "./../../images/flowa-logo.png";

function Signin() {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const getClick = document
      .getElementById("modal")
      .addEventListener("click", handleClick);

    return () => {
      getClick();
    };
  }, []);

  return (
    <div className={MyCenterCss.Signn} ref={outside} id="modal">
      <div>
        <img
          src={FlowaLogo}
          className={MyCenterCss.Flowa}
          alt="this is the official Logo of the flowa App"
        />
        <button
          className={MyCenterCss.Logbtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          Sign in
        </button>
        <button
          className={MyCenterCss.Logbtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          Sign up
        </button>
      </div>
      {isOpen ? (
        <div className={Mycss.Modal}>
          <div className={Mycss.Account}>Account Sign Up</div>
          <input className={Mycss.Input} type="email" placeholder="Email" />
          <input
            className={Mycss.Input}
            type="password"
            placeholder="Password"
          />
          <input
            className={Mycss.Input}
            type="password"
            placeholder="Confirm Password"
          />
          <a href="/home" className={Mycss.LogbtnS}>
            Sign In
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Signin;
