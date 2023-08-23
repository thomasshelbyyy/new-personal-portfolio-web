import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiReact } from "react-icons/di"
import { SiPhp, SiLaravel, SiJavascript } from "react-icons/si"
import { useEffect } from "react"
import { motion } from "framer-motion"

const leftVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0
    },
    exit: {
        x: "-100vw"
    }
}

const rightVariants = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: 0
    },
    exit: {
        x: "100vw"
    }
}

const skillVariants = {
    hover: {
        scale: 1.2,
        originX: 0
    }
}

const About = ()=> {

    useEffect(()=> {
        document.title = "About | Personal Portfolio Web"
    }, [])

    return(
        <div>
            <Header />

            <div className=" md:p-36 md:flex px-10 pt-32 pb-16">
                <motion.div 
                    className="md:border-r md:border-slate-300 md:w-1/2 flex flex-col justify-center "
                    variants={leftVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <h3 className="text-my-primary text-xl">About Me</h3>
                    <p>Hi, my name is Rizky Afriyandi, i started my journey as a web developer since 2021, i used to be a Civil Engineering student at University, then i switched my carreer path to web developing due to covid-19 pandemic.</p>
                </motion.div>

                <motion.div 
                    className="md:w-1/2 md:pl-6 flex flex-col justify-center mt-6"
                    variants={rightVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <h3 className="text-my-primary text-xl">Skill</h3>
                    <ul className="list-none w-100">
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <AiFillHtml5 className="text-5xl group-hover:text-orange-600" />
                            <span className="ml-3"> | HTML 5</span>
                        </motion.li>
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <DiCss3 className="text-5xl group-hover:text-blue-500" />
                            <span className="ml-3"> | CSS 3</span>
                        </motion.li>
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <SiJavascript className="text-5xl group-hover:text-yellow-400" />
                            <span className="ml-3"> | Javascript</span>
                        </motion.li>
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <DiReact className="text-5xl group-hover:text-sky-400" />
                            <span className="ml-3"> | React JS</span>
                        </motion.li>
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <SiPhp className="text-5xl group-hover:text-indigo-400" />
                            <span className="ml-3"> | PHP</span>
                        </motion.li>
                        <motion.li className="flex items-center group" variants={skillVariants} whileHover="hover">
                            <SiLaravel className="text-5xl group-hover:text-red-400" />
                            <span className="ml-3"> | Laravel</span>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default About