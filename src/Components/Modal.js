import React, { Component } from "react";
import Mycss from "./Modal.module.css";
import Button from "./Button";

class Modal extends Component {
  render() {
    let dispp = null;

    switch (this.props.disp) {
      case true:
        dispp = (
          <div
            className={Mycss.BigModal}
            onClick={() => {
              dispp = null;
            }}
          >
            <div className={Mycss.Modal}>
              <div className={Mycss.Account}>Account</div>
              <input className={Mycss.First} type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Button>Sign in</Button>
            </div>
          </div>
        );
        break;
      default:
        dispp = null;
    }

    return dispp;
  }
}

export default Modal;
