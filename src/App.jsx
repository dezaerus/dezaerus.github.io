import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiGmail,
  SiExpress,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import {
  BiLogoTailwindCss,
  BiLogoPython,
  BiLogoNodejs,
} from "react-icons/bi";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.24,
    },
  },
};

const SkillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function App() {
  return (
    <div className="app">
      <main className="flex flex-col mt-10 md:items-center mx-4">
        <motion.div
          id="landing"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col gap-8 md:gap-72 md:flex-row"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/profilePicture.png"
                alt=""
                className="rounded-full w-28"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-3xl font-semibold">Abdirahman Osman</p>
                <p className="text-xl text-gray-400">Web Developer</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/abiosman"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:translate-y-[-5px]"
              >
                <FaLinkedin className="text-3xl text-gray-400" />
              </a>

              <a
                href="https://github.com/dezaerus"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:translate-y-[-5px]"
              >
                <FaGithub className="text-3xl text-gray-400" />
              </a>

              <a
                href="mailto:signorabdi@gmail.com"
                className="transform transition-transform hover:translate-y-[-5px]"
              >
                <SiGmail className="text-3xl text-gray-400" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.p
              className="text-xl font-serif"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I'm a full stack web developer.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h1 className="text-lg text-gray-400 font-RobotoSemi">
                QUICK INTRO
              </h1>
              <motion.ul
                className="font-semibold text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.li>🖥️ Software engineer</motion.li>
                <motion.li>☕ Develop things for the web</motion.li>
                <motion.li>🌟 Transform ideas into digital reality</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          id="projects"
          className="flex flex-col mt-28 gap-10 md:w-[785px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h1 className="text-3xl font-bold">Projects</h1>

          <div
            id="project1"
            className="flex flex-col gap-9 md:justify-between md:flex-row"
          >
            <div className="bg-slate-600 flex justify-center rounded-2xl items-end h-[200px]">
              <img
                src="https://raw.githubusercontent.com/dezaerus/AdminBoard/master/1.png"
                alt=""
                className="object-cover max-w-[250px] h-[180px] rounded-t-xl mx-5"
              />
            </div>
            <div className="flex flex-col justify-between my-5 gap-8 ">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">Admin Dashboard</h3>
                <p className="text-gray-500 font-semibold">
                  Admin Dashboard interface with powerful features for managing
                  and visualizing data.
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <a href="">
                  <button className="bg-black  text-white text-md px-4 h-12 rounded-3xl  font-bold transition duration-200 hover:bg-gray-600">
                    View website
                  </button>
                </a>
                <a
                  href="https://github.com/dezaerus/AdminBoard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="text-black rounded-3xl px-4 h-12 border-2 border-black font-bold transition duration-200 hover:bg-gray-400 hover:border-gray-400 hover:text-white">
                    Look at code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            id="project2"
            className="flex flex-col gap-9 md:justify-between md:flex-row"
          >
            <div className="bg-orange-500 flex justify-center rounded-2xl items-end h-[200px]">
              <img
                src="https://github.com/dezaerus/Gyming/raw/main/Screenshots/Screenshot%20(6).png?raw=true"
                alt=""
                className="object-cover max-w-[250px] h-[180px] rounded-t-xl mx-5"
              />
            </div>
            <div className="flex flex-col justify-between my-5 gap-8 ">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">Gyming</h3>
                <p className="text-gray-500 font-semibold">
                  a gym landing Interface designed for instant engagement,
                  providing users with a visually appealing and intuitive
                  introduction.
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <a
                  href="https://dezaerus.github.io/Gyming/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black  text-white text-md px-4 h-12 rounded-3xl  font-bold transition duration-200 hover:bg-gray-600">
                    View website
                  </button>
                </a>
                <a
                  href="https://github.com/dezaerus/Gyming/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="text-black rounded-3xl px-4 h-12 border-2 border-black font-bold transition duration-200 hover:bg-gray-400 hover:border-gray-400 hover:text-white">
                    Look at code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            id="project3"
            className="flex flex-col gap-9 md:justify-between md:flex-row"
          >
            <div className="bg-blue-500 flex justify-center rounded-2xl items-end h-[200px]">
              <img
                src="https://github.com/dezaerus/Track-well/raw/main/pics/Screenshot%20(23).png?raw=true"
                alt=""
                className="object-cover max-w-[250px] h-[180px] rounded-t-xl mx-5"
              />
            </div>
            <div className="flex flex-col justify-between my-5 gap-8 ">
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold">Track Well</h3>
                <p className="text-gray-500 font-semibold">
                  Track-Well is a user-friendly personal finance tracker that
                  helps users manage their finances and make informed decisions.
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <a href="">
                  <button className="bg-black  text-white text-md px-4 h-12 rounded-3xl  font-bold transition duration-200 hover:bg-gray-600">
                    View website
                  </button>
                </a>
                <a
                  href="https://github.com/dezaerus/Track-well"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="text-black rounded-3xl px-4 h-12 border-2 border-black font-bold transition duration-200 hover:bg-gray-400 hover:border-gray-400 hover:text-white">
                    Look at code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col mt-28 gap-10 md:w-[785px]"
          id="Skills"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={SkillVariant} className="text-3xl font-bold">
            <p>Skills</p>
          </motion.div>
          <div className="flex flex-col gap-32 md:flex-row">
            <div className="flex flex-col gap-10">
              <motion.h1
                variants={SkillVariant}
                className="bg-gray-100 px-10 py-3 rounded-2xl text-lg font-semibold h-[40px] w-[100px] shadow-md border-2 border-gray-300 flex justify-center items-center"
              >
                Frontend
              </motion.h1>
              <div>
                <motion.ul className="flex gap-10 flex-wrap">
                  <motion.div
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <FaHtml5 className="text-5xl text-orange-500" />{" "}
                    <span className="font-semibold">HTML</span>
                  </motion.div>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <FaCss3Alt className="text-5xl text-blue-500" />
                    <span className="font-semibold">CSS</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <IoLogoJavascript className="text-5xl text-yellow-400" />
                    <span className="font-semibold">JavaScript</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <FaReact className="text-5xl text-blue-400" />{" "}
                    <span className="font-semibold">React</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <BiLogoTailwindCss className="text-5xl text-blue-500" />
                    <span className="font-semibold">Tailwind</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>{" "}
            <div className="flex flex-col gap-10">
              <motion.h1
                variants={SkillVariant}
                className="bg-gray-100 px-10 py-3 rounded-2xl text-lg font-semibold h-[40px] w-[100px] shadow-md border-2 border-gray-300 flex justify-center items-center"
              >
                Backend
              </motion.h1>
              <div>
                <motion.ul className="flex gap-10 flex-wrap">
                  <motion.div
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <BiLogoNodejs className="text-5xl text-green-400" />{" "}
                    <span className="font-semibold">Node.js</span>
                  </motion.div>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <SiExpress className="text-5xl text-gray-500" />
                    <span className="font-semibold">Express.js</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <BiLogoPython className="text-5xl text-gray-800" />
                    <span className="font-semibold">Python</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <SiDjango className="text-5xl text-green-700" />{" "}
                    <span className="font-semibold">Django</span>
                  </motion.li>
                  <motion.li
                    variants={SkillVariant}
                    className="flex flex-col items-center gap-2"
                  >
                    <SiFlask className="text-5xl text-gray-800" />
                    <span className="font-semibold">Flask</span>
                  </motion.li>
                </motion.ul>
              </div>
            </div>{" "}
          </div>
        </motion.div>
      </main>

      <footer className="bg-stone-200 py-5 mt-32 flex flex-col justify-center items-center md:flex-row md:gap-52">
        <p className="text-gray-600 text-xl mt-3">© Abdirahman Osman 2023</p>
        <div className="flex ">
          <a href="https://www.linkedin.com/in/abiosman" className="m-2">
            <FaLinkedin className="text-2xl text-gray-500 transform transition-transform hover:translate-y-[-5px]" />
          </a>
          <a href="https://github.com/dezaerus" className="m-2">
            <FaGithub className="text-2xl text-gray-500 transform transition-transform hover:translate-y-[-5px]" />
          </a>
          <a href="mailto:signorabdi@gmail.com" className="m-2">
            <SiGmail className="text-2xl text-gray-500 transform transition-transform hover:translate-y-[-5px]" />{" "}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
