"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const topperData = {
  "10th Std": [
    {
      name: "Aarav Patil",
      marks: "98.7%",
      desc: "State Board Topper",
      image: "/8600945.png",
    },
    {
      name: "Riya Sharma",
      marks: "97.9%",
      desc: "Excellent Academic Performance",
      image: "/11268069.png",
    },
    {
      name: "Vedant Joshi",
      marks: "97.4%",
      desc: "Top Rank Achiever",
      image: "/8600945.png",
    },
  ],

  "12th Science": [
    {
      name: "Sanket More",
      marks: "96.8%",
      desc: "PCM Stream Topper",
      image: "/11268069.png",
    },
    {
      name: "Neha Patil",
      marks: "95.9%",
      desc: "PCB Excellence",
      image: "/8600945.png",
    },
    {
      name: "Aditya Kale",
      marks: "95.2%",
      desc: "Outstanding Performance",
      image: "/1268069.png",
    },
  ],

  "JEE / NEET": [
    {
      name: "Om Kulkarni",
      marks: "AIR 245",
      desc: "JEE Advanced",
      image: "/8600945.png",
    },
    {
      name: "Tanvi Deshmukh",
      marks: "AIR 512",
      desc: "NEET Qualified",
      image: "/1268069.png",
    },
    {
      name: "Pratik Shinde",
      marks: "AIR 684",
      desc: "IIT Selection",
      image: "/8600945.png",
    },
  ],
};

function Thirdpage() {
  const [activeTab, setActiveTab] = useState("10th Std");

  return (
    <section className="relative py-24 bg-zinc-100 overflow-hidden px-5 md:px-10">

      <div className="absolute top-10 left-10 h-72 w-72 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-orange-500 font-semibold tracking-[3px] uppercase text-sm">
            Our Toppers
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
            Our Proud Achievers
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-lg">
            Celebrating the success of students who achieved
            exceptional academic results with dedication and guidance.
          </p>
        </motion.div>

        <div className="mt-12 flex items-center justify-center flex-wrap gap-4">
          {Object.keys(topperData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-zinc-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mt-14
            flex gap-6 overflow-x-auto pb-4
            lg:grid lg:grid-cols-3 lg:overflow-visible
            scrollbar-hide
          "
        >
          {topperData[activeTab].map((student, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="
                min-w-[280px]
                sm:min-w-[320px]
                lg:min-w-0
                relative overflow-hidden rounded-[32px]
                border border-white/50
                bg-white/80 backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                p-5
              "
            >

              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-orange-200/40 to-red-200/40 blur-3xl rounded-full"></div>

              <div className="relative z-20">

                <div className="relative overflow-hidden rounded-[28px]">

                  <Image
                    src={student.image}
                    alt={student.name}
                    width={400}
                    height={400}
                    className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute top-4 left-4 rounded-2xl bg-white/90 backdrop-blur-xl px-4 py-2 shadow-lg">
                    <p className="text-lg font-black text-orange-500">
                      {student.marks}
                    </p>
                  </div>

                </div>

                <div className="mt-6">

                  <h3 className="text-2xl font-black text-slate-900">
                    {student.name}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {student.desc}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Thirdpage;