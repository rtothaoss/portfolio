import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/skills/about.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">
            After finally figuring out what I wanted to do with my life I
            attended a 6 month web development bootcamp at SMU. It started out
            with HTML/CSS/Js then moved into jQuery and handlebars. I learned
            about SQL and NoSQL databases then eventually learned about React
            and finished the course with a complete MERN app. The app I built is
            called Supbot and it allows users to pick items from the popular
            Supreme clothing brand and have a bot handle the purchasing for you
            saving you precious time trying to do eveyrthing manually. I
            thoroughly enjoyed this part of the course because I was able to
            build something from scratch and use technologies I had never used
            before.
          </p>
          <p className="py-2 text-gray-600">
            Recently I have begun to learn Angular and in the beginning this was
            tough becuase I was so used to React but I&#39;ve really come to
            enjoy Angular. Learning how to build an app step by step from a
            video is great in the beginning but the true test is building
            something from scratch. At the moment I am putting some finishing
            touches on a few angular projects that you will find down below.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
