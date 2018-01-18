import React from "react";
import "./key.css";

const key = props => (
  <div
    className="Key"
    style={{ backgroundColor: props.color }}
    onClick={() => props.action(props.operator)}
  >
    {props.operator}
  </div>
);

export default key;
