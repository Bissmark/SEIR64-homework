import React from "react";
import logo from "../assets/react.svg"
console.log(React);
const item = (
  <div>
    <ol className="nav-ol">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
  </div>
);
console.log(item);
const { key, props } = item;
console.log(key);
console.log(props.children.type);

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={ logo } alt="" />
        <h3>Navbar</h3>
      </div>
      {item}
    </div>
  );
}

export default Navbar;
