import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

function Landing() {
  return (
    <div className=" relative w-full h-[150vh] sm:h-[250vh] min-h-screen">
      <div className="w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0 sm:px-28">
        <div className="  text-white h-full text max-w-screen-2xl mx-auto px-5 sm:px-10">
          <div className="para mt-72 sm:mt-[30rem]">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people live, work, and unwind.",
            ].map((item, index) => {
              return (
                <p key={index} className="text-md sm:text-2xl overflow-hidden">
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 1.5,
                      delay: index * 0.3,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </p>
              );
            })}
          </div>
          <div className="headings mt-5 sm:mt-10  ">
            {["Digital", "Design", "Experience"].map((item, index) => {
              return (
                <h1
                  key={index}
                  className="text-6xl -mt-2 sm:py-5 sm:text-[14rem] tracking-tighter leading-none overflow-hidden"
                >
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 1.5,
                      delay: 1 + index * 0.15,
                    }}
                    className="inline-block origin-left"
                  >
                    {item}
                  </motion.span>
                </h1>
              );
            })}
          </div>
          <div className="para2 mt-20">
            <p>
              We help experience-driven companies <br /> thrive by making their
              audience feel the <br /> refined intricacies of their brand and{" "}
              <br />
              product in the digital space <br /> Unforgettable journeys start
              with a click.
            </p>
            <a
              className="border-b-[.3px] border-zinc-100 pb-1 inline-block mt-10"
              href="/"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
