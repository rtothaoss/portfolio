import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Ross | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Ross Carmack</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ross-carmack-246383171/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/rtothaoss"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Energetic Full-Stack Web Developer ready to build anything from the
          gorund up. Experienced team-player and motivated to continue to build
          the web development skill set. Detail-orientated and motivated to
          bring enthusiasm to any team.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span> React / React-Native
            <span className="px-2">|</span>Java/Spring Boot
            <span className="px-2">|</span>Redux / NgRx
            <span className="px-2">|</span> MySQL / Mongo
            <span className="px-2">|</span> Node
            <span className="px-2">|</span> Express
            <span className="px-2">|</span> Javascript
            <span className="px-2">|</span> Typescript
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">DJ</span>
            <span className="px-2">|</span>Dallas, TX
          </p>
          <p className="py-1 italic">Freelance Work (2010 - 2018)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Marketed DJ services in order to get more bookings through the use
              of social media.
            </li>
            <li>Improved performance through new methods of DJing.</li>
            <li>Played multiple residencies around Dallas and Fort Worth.</li>
          </ul>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        <div>
          <span className="font-bold italic">
            Southern Methodist University
          </span>
          <span className="px-2">|</span>Full Stack Web Development Certificate
        </div>
        <div>
          <span className="font-bold italic">Brookhaven College</span>
          <span className="px-2">|</span>Associates of Arts Degree
        </div>
      </div>
    </>
  );
};

export default resume;
