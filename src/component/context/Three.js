import React, { useContext } from "react";
import Four from "./Four";
import { Context } from "./One";
import "../../output.css";

function Three() {
  const name = useContext(Context);
  return (
    <div className="three">
      <h2>Three</h2>
      <p>
        {" "}
        <span className="bg-slate-200">Name : {name}</span>
      </p>
      <Four />
    </div>
  );
}

export default Three;
