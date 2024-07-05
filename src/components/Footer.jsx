import React from "react";

function Footer() {
  return (
    <div className="bg-black text-[#E0CCBB] h-[33rem] sm:h-screen sm:p-20 p-8">
      <h1 className="text-7xl sm:text-9xl">Our</h1>
      <h1 className="text-7xl sm:text-9xl">Story</h1>
      <p className="text-xl mt-5 sm:w-[29rem] sm:text-3xl">
        The story behind Exo Ape is one of exploration, creativity and
        curiosity.
      </p>
      <a className="mt-5 inline-block" href="#">
        Our Story
      </a>
      <hr className="mt-8" />
      <div className="flex items-center sm:justify-around justify-center gap-20 p-10">
        <div>
          <h5 className="text-xs sm:text-xl">Willem || Singel 8</h5>
          <h5 className="text-xs sm:text-xl">6041 HS,Roermond</h5>
          <h5 className="text-xs sm:text-xl">The Netherlands</h5>
          <h5 className="text-xs sm:text-xl">hello@exoape.com</h5>
        </div>
        <div className="flex flex-col gap-3 " id="left">
          <h5 className="text-xs ">Work</h5>
          <h5 className="text-xs ">Studio</h5>
          <h5 className="text-xs ">News</h5>
          <h5 className="text-xs ">Contact</h5>
        </div>
        <div className="flex flex-col gap-3 " id="right">
          <h5 className="text-xs">Behance</h5>
          <h5 className="text-xs">Dribble</h5>
          <h5 className="text-xs">Twitter</h5>
          <h5 className="text-xs">Instagram</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
