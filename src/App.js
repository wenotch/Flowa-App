import React, { useState } from "react";

import Logo from "./images/flowa-logo.png";
import Mycss from "./Appcss.module.css";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

function App() {
  let [show, setShow] = useState(false);
  return (
    <div className={Mycss.Postion}>
      <img
        className={Mycss.Logo}
        src={Logo}
        alt="An official Logo of the flowa app"
      />
      <Modal disp={show} />
      <Button clicked={() => setShow((show = true))}>Sign in</Button>
      <Button clicked={() => setShow((show = true))}>Sign up</Button>
    </div>
  );
}

export default App;
