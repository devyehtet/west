"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleEye = () => {
    setIsEyeOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isEyeOpen) {
      const timer = setTimeout(() => {
        router.push("/exhibition");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isEyeOpen, router]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full relative"
          >
            {/* First Slide: Hero Section with GIF */}
            <section className="w-full h-screen flex items-center justify-center max-w-screen-xl mx-auto">
              <motion.div
                className="w-full max-w-[1200px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleEye}
              >
                <Image
                  src="/images/eye.gif"
                  alt="Interactive Eye"
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </section>

            {/* Second Slide: Full Poster Image and Description */}
            <section className="w-full flex md:flex-row flex-col items-center justify-center max-w-screen-xl mx-auto md:space-x-5 space-y-5">
              {/* Left side - Full Poster */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/poster-02.png"
                  alt="Exhibition Poster"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
              {/* Right side - Description */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="pl-16">
                  <div className="space-y-8 md:space-y-10 lg:space-y-15 max-w-2xl">
                    <motion.p
                      className="text-[1.15rem] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      It normally is an exciting experience, for young or old.
                      To witness these man-made contraptions flying in the sky
                      is wondrous, and to appreciate human creativity.
                    </motion.p>
                    <motion.p
                      className="text-[1.15rem] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      But for the people of Myanmar, every time they see the
                      planes They see those parts of the country now facing
                      airstrikes by the military regime against civilian
                      targets, every time they hear the planes, they hear the
                      cries of the many forced to flee their homes and hide from
                      the bombs -
                    </motion.p>

                    <motion.p
                      className="text-[1.15rem] leading-relaxed font-mono text-justify"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      It is the images of local communities, people, children,
                      brutalized and destroyed, that are the civilians forced.
                    </motion.p>
                  </div>
                </div>{" "}
                {/* Vertical Text */}
                <motion.div
                  className="w-24 flex items-center justify-center rotate-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-yellow-400 text-[2.5rem] tracking-[0.08em] whitespace-nowrap font-mono font-extrabold origin-center">
                    WHEN WE SEE THE PLANES
                  </h2>
                </motion.div>
              </div>
            </section>

            {/* Third Slide: Impact Section */}
            <section className="w-full relative max-w-[1600px] mx-auto">
              {/* Background Image */}
              {/*<Image
                src="/images/fire-bg.png"
                alt="Background"
                width={1600}
                height={500}
                priority
                className="absolute bottom-0 w-auto h-auto"
              />*/}
              <div className="hidden md:flex absolute z-10 w-full h-full text-center items-center justify-center">
                <Image
                  src="/images/page-03.png"
                  alt="Impact of Airstrikes"
                  width={1500}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-16 pt-5 pb-4 md:pt-52 md:pb-32">
                {/* Overlaid Content */}
                <motion.div
                  className="max-w-4xl space-y-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/ljsbm3fSirc"
                      title="WHEN WE SEE THE PLANES"
                      className="w-full md:h-[400px] h-80"
                      style={{ border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h2 className="text-[2.5rem] font-bold text-blue-600 font-mono mb-2">
                    THE IMPACT OF AIRSTRIKES
                  </h2>
                  <p className="text-[1.35rem] leading-relaxed font-mono text-white mb-2 w-full">
                    After the coup, the military regime has deliberately and
                    repeatedly targeted civilians with air strikes, in violation
                    with the laws of war. From February 2021 to December 2023,
                    there were 1625 airstrikes, meaning an uninterrupted string
                    of daily airstrikes on civilian targets.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>{" "}
      <div className="flex justify-center mt-8">
        <a
          href="/dummy.pdf"
          download
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-mono text-lg hover:bg-yellow-700 transition-colors"
        >
          Download PDF
        </a>
      </div>
      <Image
        src="/images/image-bomb.png"
        width={1180}
        height={788}
        alt="The Bomb"
        className="w-full mt-auto mb-0"
      />
    </div>
  );
}
