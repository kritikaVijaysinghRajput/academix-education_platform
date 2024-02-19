import React from "react";
import { wave } from "../assets";

const InfoPage = () => {
  return (
    <div>
      <div className="overflow-hidden pt-[100px] mt-[-70px]" id="features">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to Study
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Get ahead in this rat race with help from experienced faculty
              round the world.
            </p>
          </div>
        </div>
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pl-8 pt-0 mt-0">
          <div className="flex relative w-[100vw] items-center p-10 pt-0 m-0 pb-0">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Developed by Teacher for Students 🤗
              </h3>
              <p className="mt-3 text-lg text-gray-500 w-[40vw]">
                You shall never get any advice from a person who haven't been
                through what you've been through. We students know better what a
                student goes through when he is running in the rat race without
                any goal or motivation.
              </p>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2015/02/05/09/09/homework-624735_960_720.jpg"
              className="w-[40vw] pl-20"
            />
          </div>
        </div>
        <img src={wave} alt="" className="w-[100vw] rotate-180" />
        <div
          className="bg-primary w-full py-10 flex-none overflow-hidden pb-30 mt-[-40px]"
          id="testimonials"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <blockquote className="mt-10">
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    “The more that you read, the more things you will know, the
                    more that you learn, the more places you'll go”
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center"></div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <img src={wave} alt="" className="w-[100vw] m-0 pb-[-40px]" />
      </div>
    </div>
  );
};

export default InfoPage;
