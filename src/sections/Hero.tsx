"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -100]);

  useMotionValueEvent(translateY, "change", (latestValue) =>
    console.log(latestValue)
  );

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-tr from-[#5a7eff] to-[#fff] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tigher bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Animated Images */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* Cog Image Animation */}
            <motion.div
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              style={{ position: "relative", width: "100%", height: "100%" }} // Set explicit width and height
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <Image
                src={cogImage.src}
                alt="Cog image"
                layout="fill"
                objectFit="contain" // Make sure the image is properly contained within the div
              />
            </motion.div>

            {/* Cylinder Image Animation */}
            <motion.div
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY }}
            >
              <Image
                src={cylinderImage.src}
                alt="Cylinder Image"
                width={220}
                height={220}
              />
            </motion.div>

            {/* Noodle Image Animation */}
            <motion.div
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ rotate: 30, translateY }}
            >
              <Image
                src={noodleImage.src}
                alt="Noodle Image"
                width={220}
                height={220}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
