import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RSVPForm from "./RSVPForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-slate-50 flex flex-col items-center py-10 px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-rose-800 mb-2">
          Rebotile & Lizzy
        </h1>
        <p className="text-slate-600 text-lg md:text-xl italic">
          Request the pleasure of your company
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-4">
          <div className="text-center">
            <p className="font-medium text-rose-700">Bride's Home</p>
            <p className="text-slate-600">October 11, 2025</p>
          </div>
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-10 bg-rose-200" />
          </div>
          <div className="md:hidden my-2">
            <Separator className="w-16 bg-rose-200 mx-auto" />
          </div>
          <div className="text-center">
            <p className="font-medium text-rose-700">Groom's Home</p>
            <p className="text-slate-600">October 12, 2025</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg border-rose-100">
            <CardContent className="p-6">
              <div className="aspect-[3/4] w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="https://m.media-amazon.com/images/I/71iWj7fmJIL._AC_SY500_.jpg"
                  alt="Couple"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-serif text-center text-rose-800 mb-4">
                Our Special Day
              </h2>
              <p className="text-slate-600 text-center">
                We are excited to celebrate our union with you. Please RSVP by
                September 1, 2025 to help us prepare for this joyous occasion.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-rose-100 p-6">
            <h2 className="text-2xl font-serif text-center text-rose-800 mb-6">
              RSVP
            </h2>
            <RSVPForm />
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center text-slate-500 text-sm"
      >
        <p>© 2025 Rebotile & Lizzy Wedding</p>
      </motion.footer>
    </div>
  );
};

export default Home;
