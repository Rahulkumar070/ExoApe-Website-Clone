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
            src="https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1720188694~exp=1720203094~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=4b83849e814524dc10d18b94a26c231e3aba51bcad2b23381089adb2b819e1c7&r=dXMtY2VudHJhbDE%3D"
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
            src="https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1720188864~exp=1720203264~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=0c2339a6e5808241f3c5849fcb3778eed16233c471ae507f50d6592248651ab5&r=dXMtY2VudHJhbDE%3D"
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
          src="https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1720189052~exp=1720203452~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=eb9a026e4a14bb2d6c56711304787018ceeca494ba32247e1bc26ebb20b11129&r=dXMtd2VzdDE%3D"
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
          src="https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1720189173~exp=1720203573~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=fb27dcdbe872163394171a43f651f4042a0a23b77c7982473e48021ee61fae49&r=dXMtd2VzdDE%3D"
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
