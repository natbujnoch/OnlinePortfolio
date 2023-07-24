import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import WaveEffect from "./WaveEffect"


const projects = [
  {
    name: "SkillQuest",
    description:
      "SkillQuest is a web-based app I worked on while at Cognizant. This in-house project trains employees and helps them hone their skills.",
    image: "/SkillQuest.png",
    github: "",
    link: "",
  },
  {
    name: "Cognivision",
    description: "Cognivision is an in-house project I worked on to grow my skills in-between client projects. The project is meant to be a web-based screen-saver on office TVs that has current international project and growth data.",
    image: "/Cognivision.png",
    github: "",
    link: "https://cognivision-uidev.work.cognizant.studio",
  },
  {
    name: "CodeHelm LawnExec LLC",
    description:
      "In my final year of college, I was assigned a team to work on a client project as my Capstone. We were tasked with creating CodeHelm, a web-based business management software for lawncare businesses. This project was sponsered by the company LawnExec and although my team only worked on CodeHelm for a semester, it was an incredible opportunity for growth.",
    image: "/Codehelm.png",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-red-500 dark:bg-[#0000ff] border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 text-break">
                      {project.description}
                    </p>
                    {/* <div className="flex flex-row align-bottom space-x-4"> */}
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    {/* </div> */}
                  </div>
                </div>
              
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection