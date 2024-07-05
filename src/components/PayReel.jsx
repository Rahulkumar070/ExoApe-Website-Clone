import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function PayReel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    });
    tl.to(
      videodiv.current,
      {
        width: "115%",
        height: "115%",
      },
      "a"
    );
    tl.to(
      play.current,
      {
        x: "110%",
      },
      "a"
    );
    tl.to(
      reel.current,
      {
        x: "-110%",
      },
      "a"
    );
  });
  return (
    <div
      ref={parent}
      className="w-full h-screen overflow-hidden bg-black relative"
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96 aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          loop
          autoPlay
          muted
          className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>
      <div className="overlay absolute py-20 w-full h-full  text-white flex flex-col justify-between">
        <div className="w-full flex items-center justify-center gap-5">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3>Work in motion</h3>
        </div>
        <h1 className="w-full flex items-center justify-center gap-96">
          <div ref={play} className="text-4xl font-light sm:text-8xl">
            Play
          </div>
          <div ref={reel} className="text-4xl font-light sm:text-8xl">
            Reel
          </div>
        </h1>
        <p className="text-center px-10 text-xs">
          Our work is best experienced in motion. Don't forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
}

export default PayReel;
