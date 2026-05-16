"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-5 md:px-8 py-4">
          
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Space Academy
              </h1>
              <p className="text-xs text-slate-500">
                Vishe Sir's
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-10">
            {[
              "Home",
              "About Us",
              "Courses",
              "Toppers",
              "Contact Us",
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                className="relative text-[15px] font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300"
              >
                {item}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              <Phone size={17} />
              Call Now
            </motion.button>

            <button className="lg:hidden h-11 w-11 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-slate-700">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;