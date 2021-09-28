import React, { useCallback } from "react";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

const UseCallbackHook = () => {
  const [nameHome, setName] = React.useState("home page");
  const [nameAbout, setNameAbout] = React.useState("demo page");
  const HomeHeader = useCallback(() => {
    setName("Home page update");
  }, [nameHome]);
  const AboutHeader = useCallback(() => {
    setNameAbout("about page update");
  }, [nameAbout]);
  return (
    <>
      <Header type="home" name={nameHome} />
      <Button clickHandler={HomeHeader}>Update Home Header</Button>
      <br />
      <Header type="about" name={nameAbout} />
      <Button clickHandler={AboutHeader}>Update About Header</Button>
      <Footer />
    </>
  );
};
export default UseCallbackHook;
