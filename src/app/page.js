"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Firstpage from "@/components/Firstpage";
import Secondpage from "@/components/Secondpage";
import Thirdpage from "@/components/Thirdpage";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="bg-zinc-100 overflow-hidden min-h-screen">

      {loading && (

        <div className="fixed inset-0 z-[99999] bg-slate-950 flex items-center justify-center overflow-hidden">

          <div className="absolute top-0 left-0 h-72 w-72 bg-orange-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 h-72 w-72 bg-red-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-20 flex flex-col items-center">

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

              <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-[32px] bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.45)]">

                <motion.h1
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="text-5xl sm:text-6xl font-black text-white"
                >
                  S
                </motion.h1>

              </div>

            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-8 text-3xl sm:text-5xl font-black text-white text-center"
            >
              Space Academy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="mt-3 text-slate-400 text-sm sm:text-lg text-center px-4"
            >
              Where Passion Meets Performance
            </motion.p>

            <div className="mt-10 flex items-center gap-3">

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-orange-500"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.2,
                }}
                className="h-3 w-3 rounded-full bg-red-500"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: 0.4,
                }}
                className="h-3 w-3 rounded-full bg-orange-300"
              />

            </div>

          </div>

        </div>

      )}

      {!loading && (
        <>
          <Navbar />
          <Firstpage />
          <Secondpage />
          <Thirdpage />
          <Branches />
          <Footer />
        </>
      )}

    </div>
  );
}