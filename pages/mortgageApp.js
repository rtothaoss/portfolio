import Image from "next/image";
import React from "react";
import mortgageImg from "../public/assets/projects/mortgageApp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mortgageApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mortgageImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mortgage App</h2>
          <h3>Mongo / Express / Angular / Node</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using a MEAN stack. The app greets you with a
            landing page that gives the user the ability to login or use a
            mortgage calculator. The mortgage calculator auto calculates monthly
            payment information such as principal, interest, taxes, insurance,
            and hoa dues. If the user logs in then they are able to see loan
            information, transaction history, and documents. Documents are
            viewed in the app through PDFtron. This allows the user to stay on
            the same page and have a better user experience rather than having
            it open in a different tab. Users also have the option of uploading
            documents related to their account.
          </p>

          <p className="font-bold mt-2"> Login Info:</p>

          <p> Email: tester@test.com</p>

          <p> Password: test1</p>
          <a
            href="https://github.com/rtothaoss/MortgageLoanApp"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://desolate-oasis-37454.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bcrypt
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JSONWebToken
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PDFTron
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Multer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mortgageApp;
