import _ScrollTrigger from "gsap/ScrollTrigger";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const four = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    gsap.registerPlugin();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
        lerp: 2,
      },
    });
    tl.to(
      first.current,
      {
        x: "20%",
      },
      "a"
    );
    tl.to(
      second.current,
      {
        x: "-20%",
      },
      "a"
    );

    tl.to(
      third.current,
      {
        x: "-5%",
      },
      "a"
    );

    tl.to(
      four.current,
      {
        x: "20%",
      },
      "a"
    );
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] bg-white flex items-center justify-center"
    >
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2 relative ">
        <div
          ref={first}
          className="absolute w-16 h-[6rem] sm:w-[9rem] sm:h-[15rem] -right-1/3 sm:-right-[70%] sm:top-12 top-6"
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-32 sm:w-80 sm:-left-[90%]  h-18 -left-2/4 top-16 sm:top-40"
        >
          <video
            loop
            autoPlay
            muted
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-32 h-20 sm:-left-[110%] sm:top-[35rem]  -left-2/3 sm:w-[22rem] sm:h-72 top-48"
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={four}
          className="absolute w-40 sm:w-[25rem] sm:h-[25em] sm:-right-[28rem] sm:mt-[22rem] h-28 -right-3/4 top-52 "
        >
          <video
            className="h-full w-full object-cover"
            loop
            autoPlay
            muted
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <div className=" sm:w-[130%] sm:h-[180%]">
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
