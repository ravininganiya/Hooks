import React from "react";

const Button = (props) => {
  console.log("Button:-" + props.children);
  return (
    <>
      <div>
        <button className="error" onClick={props.clickHandler}>
          {props.children}
        </button>
      </div>
    </>
  );
};
export default React.memo(Button);
