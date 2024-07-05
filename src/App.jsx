import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import PayReel from "./components/PayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import Working from "./components/Working";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <Working />
      <PayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  );
}

export default App;
