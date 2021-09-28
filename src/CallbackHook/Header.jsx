import React from "react";

const Header = (props) => {
  console.log("header" + props.type);
  return (
    <>
      <div>{props.name}</div>
    </>
  );
};
export default React.memo(Header);
