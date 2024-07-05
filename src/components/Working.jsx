import { motion } from "framer-motion";
import React from "react";

function Working() {
  return (
    <div className="">
      <div className="sm:flex sm:p-36 sm:gap-44">
        <div>
          <div className="sm:hidden p-5 flex">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <h3 className="text-[1rem] capitalize">featured Projects</h3>
          </div>
          <h1 className="sm:text-[15rem] text-6xl px-5 overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: "40%", opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 0.8,
              }}
              className="inline-block origin-left"
            >
              Work
            </motion.span>
            <p className="sm:text-2xl text-[1.1rem] leading-5 w-[23rem] px-2 sm:hidden sm:w-[21rem] mt-5  sm:mt-10 font-light">
              Highlights of cases that we <br />
              passionately built with forward -thinking <br />
              clients and friends over the years.
            </p>
          </h1>
          <video
            loop
            autoPlay
            muted
            className="sm:h-[52rem] mt-5 p-5"
            src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
          ></video>
          <div className="sm:hidden px-5">
            <h1>Rino & Pelle</h1>
            <p className="opacity-60">Effortless chic lifestyle</p>
          </div>
        </div>
        <div>
          <div className="sm:flex sm:items-center sm:mt-[22.2rem] opacity-0 sm:opacity-100 ">
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
          <p className="sm:text-2xl opacity-0 sm:opacity-100 sm:w-[21rem] sm:mt-10 font-light">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <video
            loop
            autoPlay
            muted
            className="sm:h-[30rem] sm:mt-[20rem] -mt-24 p-5"
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
          ></video>
          <div className="sm:hidden px-5">
            <h1>Columbia Pictures</h1>
            <p className="opacity-60">Celebrating a Century of Cinema</p>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:p-36 sm:gap-28">
        <video
          loop
          autoPlay
          muted
          className="sm:h-[25rem] sm:mt-[20rem] p-5 -mt-2"
          src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
        ></video>
        <div className="sm:hidden px-5">
          <h1>Aebele Interiors</h1>
          <p className="opacity-60">Luxurious design experience</p>
        </div>
        <video
          loop
          autoPlay
          muted
          className="sm:h-[35rem] p-5"
          src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
        ></video>
        <div className="sm:hidden px-5">
          <h1>Pixelflakes</h1>
          <p className="opacity-60">Architectural marketing agency</p>
        </div>
        <a
          className="sm:hidden flex items-center justify-center mt-10 pb-20"
          href=""
        >
          Browse all work
        </a>
      </div>
    </div>
  );
}

export default Working;
