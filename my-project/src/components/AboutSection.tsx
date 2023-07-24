import React from "react"
import Image from "next/image"

const languages = [
  { lan: "React" },
  { lan: "BootStrap" },
  { lan: "SpringBoot" },
  { lan: "Jest" },
  { lan: "Swift" },
  { lan: "SwiftUI" },
  { lan: "SQL" },
  { lan: "Java" },
  { lan: "C++" },
  { lan: "HTML" },
  { lan: "CSS" },
  { lan: "JavaScript" },
  { lan: "Python" },
  { lan: "Next.js" },
  { lan: "Tailwind CSS" },
  { lan: "Git" },
  { lan: "JSON" },
]

const softwares = [
    { skill: "VSCode" },
    { skill: "IntelliJ" },
    { skill: "Postman" },
    { skill: "XCode" },
    { skill: "Emacs" },
    { skill: "Vim" },
    { skill: "Ghidra" },
    { skill: "Make" },
    { skill: "GitHub" },
  ]

const os =  [
    { os: "Windows" },
    { os: "MacOs" },
    { os: "Linux"},
   
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 dark:bg-[#0000ff] border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-xl">
              Hi, my name is Natalie and I am a{" "}
              <span className="font-bold text-red-500 dark:text-[#0000ff]">{"highly ambitious"}</span>,
              <span className="font-bold text-red-500 dark:text-[#0000ff]">{" self-motivated"}</span>, and
              <span className="font-bold text-red-500 dark:text-[#0000ff]">{" driven"}</span> web developer
              based in Dallas, TX.
            </p>
            <br />
            <p className="text-xl">
              I graduated from University of Texas at Dallas in 2022
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p className="text-xl">
              I have several hobbies that add to my life including 
              dancing, rock climbing, and watching horror movies.
              I love pursuing hobbies that keep me in touch with my mind and body 
              as well as add a thrill to life!
            </p>
            <br />
            <p className="text-xl">
              I believe that you should{" "}
              <span className="font-bold text-red-500 dark:text-[#0000ff]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              design and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me on my artistic journey!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Languages</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {languages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold"
                  >
                    {item.lan}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-6 pt-10">My Software Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {softwares.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <h1 className="text-2xl font-bold mb-6 pt-10">My Operating Systems</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {os.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold"
                  >
                    {item.os}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default AboutSection