import { motion } from "framer-motion";
import React, { useState } from "react";

function Work() {
  const [elems, setElems] = useState([
    {
      heading: "Pixelflakes",
      subheading: "Architectual Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effort chic lifestyle",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/2400x2990/filters:quality(80)",
    },
    {
      heading: "Aebele Interiors",
      subheading: "Luxurious design Experience",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "Columbia Pictures",
      subheading: "Celebrating a Century of Cinema",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-5 py-20 sm:px-10">
        <div className="sm:flex sm:items-center sm:mt-[22.2rem] ">
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
          <h3 className="text-xl capitalize">featured Projects</h3>
        </div>
        <p className="leading-normal mt-5">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elem sm:flex sm:flex-wrap sm:gap-5 w-full">
          {elems.map((item, index) => {
            return (
              <div key={index} className="w-full sm:w-[48%] mb-8">
                <div className="video w-full h-[104vw] relative overflow-hidden">
                  <motion.img
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    data-scroll
                    data-scroll-speed="-.2"
                    className="w-full sm:z-[2] sm:absolute sm:top-0 sm:left-0 h-full object-cover hidden sm:block"
                    src={item.image}
                    alt={item.heading}
                  />
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full scale-130 z-[1] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{item.heading}</h3>
                  <h4 className="text-md text-gray-600">{item.subheading}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
