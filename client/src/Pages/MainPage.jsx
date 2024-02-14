import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const handleLogoClick = () => {
  window.location.href = "/";
};

export default function Main() {
  return (
    <div>
      <div className=" gradient-background text-white h-screen ">
        <nav className="flex items-center justify-between p-4">
          <Link to="/" className="text-2xl font-bold" onClick={handleLogoClick}>
            <img className="flex mt-30 w-60 -ml-15" src={""} alt="" />
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ScrollLink
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:underline"
            >
              About Us
            </ScrollLink>

            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Your SimplyLearn
          </h1>
          <p className="text-lg mb-8">
            Elevate your learning with our study platform
          </p>
          <Link
            to="/login"
            className="bg-white text-purple-500 py-2 px-4 rounded-full font-bold text-lg hover:bg-purple-300"
          >
            Get Started
          </Link>
        </div>
        <div id="aboutSection" className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="bg-purple-500 shadow-lg rounded-lg overflow-hidden">
              <div className="text-white text-center p-10">
                <h2 className="text-3xl font-bold mb-10">About Us</h2>
                <p className="text-lg mb-20">
                  Welcome to Your SimplyLearn, where we believe in the power of
                  education to transform lives. Our project is dedicated to
                  providing a seamless and enriching learning experience for
                  students of all ages and backgrounds. With a commitment to
                  excellence, we offer a diverse range of courses and resources
                  designed to cater to various learning styles. At SimplyLearn,
                  we understand the importance of accessible education, and our
                  platform is built with inclusivity in mind. Whether you are a
                  student looking to enhance your academic skills, a
                  professional seeking career development, or someone passionate
                  about lifelong learning, we have something for everyone. Our
                  team is driven by a shared vision of creating a global
                  community of learners and educators. We aim to foster a
                  collaborative and interactive environment where knowledge
                  knows no boundaries. Through cutting-edge technology and
                  innovative teaching methods, we strive to make education not
                  only effective but also enjoyable. Join us on this educational
                  journey, and let's explore the limitless possibilities of
                  learning together. Empower yourself, unlock your potential,
                  and embark on a path of continuous growth with Your
                  SimplyLearn.
                </p>

                <div className="flex space-x-4 justify-center items-center">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src={""} alt="" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="h-10" src={""} alt="" />
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className=" h-10" src={""} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
