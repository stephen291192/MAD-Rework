"use client";

import React, { useState } from "react";
import validator from "validator";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../app/pictures/icon.png";
import { CreateMailReq, CreateContactFormAPI } from "./apiservice/api";
import LogoContentCarousel from "./LogoContentCarousel";
import Modal from "./model";
import Contact from "./contact";
import TestimonialSection from "./Testimonial";
import Head from 'next/head';
import Teammember from './teammember/page'
import ContactForm from "./homeconForm";
import Team from "./team/page";
import { AiFillStar } from "react-icons/ai";
import { TiArrowRight } from "react-icons/ti";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TbBuildingFactory2,TbBuildingFactory} from "react-icons/tb";


const HomePage = () => {
  const StarIcon = () => (
    <AiFillStar className="inline-block w-5 h-5 text-yellow-500 mr-2" />
  );

  const ArrowIcon = () => (
    <TiArrowRight className="inline-block w-5 h-5 text-white mr-2" />
  );

  

  const { toast, snackbar } = require("tailwind-toast");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const members = [
    { 
      name: 'Jane Smith',
      department: 'CEO',
      photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,' 
      },
      { 
        name: 'John',
        department: 'Software Developer',
        photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
        },
        { 
          name: 'John Doe',
          department: 'Designer',
          photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
          },
          { 
            name: 'John',
            department: 'Software Developer',
            photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
            content: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
            },
            { 
              name: 'Jane Smith',
              department: 'Software Developer',
              photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
              content: 'Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
              },
              { 
                name: 'Smith',
                department: 'Developer',
                photo: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg', 
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' 
                },
    // Add more members as needed
  ];
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email!");
    }
  };

  // Create API Function - Email Request
  const CreateMailReqFunction = async () => {
    const body = {
      email: email,
    };
    var response;
    try {
      response = await CreateMailReq(body);
      
      if (response) {
        toast()
          .success("BackEnd is not Connect")
          .with({
            shape: "snackBar",
            duration: 4000,
            speed: 1000,
            positionX: "center",
            positionY: "left",
            color: "bg-red-300",
            fontColor: "white",
            fontTone: 800,
          })
          .show();

        if (response.status === "SUCCESS") {
          setEmail("");
          setEmailError("");
        } else {
          // toast.error('No Data Found')
        }
      } else {
        toast()
          .warning("BackEnd is not Connect")
          .with({
            shape: "snackBar",
            duration: 4000,
            speed: 1000,
            positionX: "center",
            positionY: "left",
            color: "bg-red-300",
            fontColor: "white",
            fontTone: 800,
          })
          .show();
      }
    } catch (err) {
      if (err.response) {
        if (err.response.data && err.response.data.success === false) {
          // toast.error(err.response.data.error)
        }
      } else if (err.request) {
        // toast.error('No Internet')
      } else {
        // toast.error('Something Went Wrong' + err)
      }
    }
  };

  const features = [
    {
      name: "Push to deploy",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: LockClosedIcon,
    },
  ];
  const featuresTest = [
    {
      name: "Push to deploy",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing.",
        
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida tincidunt lectus, ",
      icon: LockClosedIcon,
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: LockClosedIcon,
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      feedback:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const Box = ({ icon, title, content }) => {
    return (
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md">
        {icon}
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{content}</p>
      </div>
    );
  };
  return (
    <>
    {/* SEO Section */}
     <Head>
        <title>MAD Nextjs Project</title>
        <meta name="description" 
        content="Your enterprise AI platform that delivers on business outcomes – obsessively
        Ditch the treadmill. Ramp up to peak productivity" />
        <meta name="keywords" 
        content="MAD, MAD Project" />
        <meta name="viewport"
         content="width=device-width, initial-scale=1.0" />
      </Head>

    {/* Banner Section  */}

      {/* <section className="relative bg-black bg-opacity-50">
       
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage:
              'url("https://wallpapersmug.com/download/1920x1200/4301da/bokeh-blur-city-lights-night-colorful-8k.jpg")',
          }}
        ></div>

        
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly py-16 relative z-10">
          
          <div className="p-2 text-white max-w-md text-center lg:text-left lg:w-1/2">
            <h2 className="text-base font-semibold leading-7 text-gray">
              Deploy faster
            </h2>
            <h1 className="text-5xl font-bold mb-6">
              {" "}
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              rutrum, quam ut volutpat commodo, sapien metus convallis erat,
              cursus suscipit neque eros quis nisl. Donec non fringilla diam,
              non porta elit.
            </p>
            <button className="btnH mb-2">Read More</button>
          </div>

          
          <div className="bg-white p-6 m-3 rounded-md shadow-md max-w-md">
                <ContactForm />
          </div>
        </div>
      </section> */}

 {/* Banner Section  */}
      <div className="bg-white">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl leading-6 font-bold text-gray-900 sm:text-5xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="mt-6 text-base leading-6 text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              </p>
              <div></div>
                  < br />
                  < br />
              <div className="relative max-w-sm mC ">
                <input
                  type="text"
                  placeholder="Email..."
                  className="border border-gray-300 px-4 py-2 rounded-full w-full focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="submit"
                  onClick={() => {
                    CreateMailReqFunction();
                    setEmail("");
                  }}
                  disabled={emailError}
                  className="btnhe flex-none rounded-full bg-black px-3 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Request Demo  <ArrowIcon />
                 
                </button>
                 
                </div>
              </div>

              {/* <div className="flex max-w-md mC pt-5 gap-x-1 Newsletter">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <span
                  style={{
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "red",
                  }}
                >
                  {emailError}
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e);
                  }}
                  autoComplete="email"
                  required
                  className="border min-w-0 flex-auto rounded-xl bg-white/5 px-3.5 py-2 text-gray shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  onClick={() => {
                    CreateMailReqFunction();
                    setEmail("");
                  }}
                  disabled={emailError}
                  className="flex-none rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Request Demo  <ArrowIcon />
                 
                </button>
              </div> */}
            </div>
          </div>
          
          <div className="max-w-7xl m-auto">
            <div className="max-w-5xl mC rounded-t-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 bg-gray-200">
              <div className="bg-gray-200 p-4 text-center imgMax mC">
                <Image src={logo} placeholder="blur" />
                {/* <img
                  className="h-auto rounded-lg p-8"
                  src="https://images.prismic.io/vueai/61c50e48-fe3b-4345-b550-74f55a5c757e_585990234f6ae202fedf28cf+2.png?auto=compress%2Cformat&fit=max&w=256"
                  alt="image description"
                /> */}
              </div>
              <div className="bg-gray-200 p-4 text-center imgMax mC">
                <Image src={logo} placeholder="blur" />
              </div>
              <div className="bg-gray-200 p-4 text-center imgMax mC">
                <Image src={logo} placeholder="blur" />
              </div>
              <div className="bg-gray-200 p-4 text-center imgMax mC">
                <Image src={logo} placeholder="blur" />
              </div>
              <div className="bg-gray-200 p-4 text-center imgMax mC">
                <Image src={logo} placeholder="blur" />
              </div>
            </div>
            <div className="max-w-5xl rounded-b-lg mC bg-gray-200 p-5 text-base font-medium text-center mt-1">
              COMPANY ACHIEVEMENT
            </div>
          </div>
        </div>
        <br /> <br />
      </div>

      {/* Featiure section 02 */}
      <div className="bg-black py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl mb-5 lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <h2 className="mt-2 text-3xl text-white font-bold tracking-tight text-gray-900 sm:text-4xl">
              Features - Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipiscing elit magnis, vel
              varius euismod class convallis ut turpis commodo ad,
            </p>
          </div>
         
          <div className="flex flex-wrap justify-center">
            {/* Column 1 */}
            <div className="cardbg textcolor max-w-sm mx-2 my-4 rounded-md overflow-hidden shadow-md">
              {/* Card content goes here */}
              <div className="p-6 md:p-12">
                <div className="imagemaxIcon imagemaxIconbg1 bg-gray-700 rounded-full ">
                  <MdOutlinePrecisionManufacturing size={30} color="white" />
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png" /> */}
                </div>
                <h3 className="mb-3 mt-3 text-lg font-semibold">Lorem ipsum dolor</h3>
                <p className="px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  gravida tincidunt lectus
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="cardbg textcolor max-w-sm mx-2 my-4 rounded-md overflow-hidden shadow-md">
              {/* Card content goes here */}
              <div className="p-6 md:p-12">
                <div className="imagemaxIcon imagemaxIconbg2 bg-gray-700 rounded-full ">
                  <TbBuildingFactory2 size={30} color="white" />
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png" /> */}
                </div>
                <h3 className="mb-3 mt-3 text-lg font-semibold">Lorem ipsum dolor</h3>
                <p className="px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  gravida tincidunt lectus
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="cardbg textcolor max-w-sm mx-2 my-4 rounded-md overflow-hidden shadow-md">
              {/* Card content goes here */}
              <div className="p-6 md:p-12">
                <div className="imagemaxIcon imagemaxIconbg3 bg-gray-700 rounded-full ">
                  <TbBuildingFactory size={30} color="white" />
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png" /> */}
                </div>
                <h3 className="mb-3 mt-3 text-lg font-semibold">Lorem ipsum dolor</h3>
                <p className="px-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  gravida tincidunt lectus
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-black py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4 ">
                  <iframe
                    width="100%"
                    height="415"
                    className="iframClas"
                    src="https://www.youtube.com/embed/a3ICNMQW7Ok"
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <button className="btnFooterVi font-semibold">
                      VUE.AI 30.60.90
                    </button>
                    <h2 className="mt-2 pr-20 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Lorem ipsum, dolor sit amet
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                    {/* <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <p className="inline font-semibold text-gray-600">
                            <feature.icon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </p>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  section 02 */}
      <div className="bg-white py-24 sm:py-20">
        <div className="bg-white py-24 sm:py-1 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* <TestimonialSection testimonials={testimonials} /> */}

             <Teammember members={members} />
   
          </div>
        </div>

        <div className="bg-white py-24 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl lg:text-center">
              
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industries - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                gravida tincidunt lectus, et faucibus tellus consectetur vel.
                Sed feugiat consectetur ante, sit amet viverra dolor
                sollicitudin sit amet. Integer commodo, felis sit amet tristique
                varius
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
              <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                {featuresTest.map((featuresTest) => (
                  <div key={featuresTest.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="border-t border-blue-500 border-2 mb-2 w-10"></div>
                      {featuresTest.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {featuresTest.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pb-10 ">
        <div className="bg-black text-white p-1 text-center max-w-6xl mC">
          <p className="md:max-w-md mC p-1 text-gray-200 lg:max-w-xl xl:max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>

      {/* slider */}
      <div className="bg-gray-200 py-24 sm:py-20 mx-auto lg:text-center">
        <div className="max-w-5xl mC">
          <LogoContentCarousel />
        </div>
      </div>

     

      {/* Footer Top section */}
      <div className="bg-gray-300 py-24 sm:py-20 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
            <h2 className="mt-2 text-2xl font-semibold leading-6 text-gray-900 sm:text-3xl">
              Feel free to download this wireframe <br />
              Stay updated for more
            </h2>
            <button className="mt-5 btncall"
            //  onClick={openModal}
             >
             Thank You
            </button>
          </div>
          <div className="max-w-5xl h-5">
            {/* <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button> */}

            <div className="max-w-sm">
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Contact />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
