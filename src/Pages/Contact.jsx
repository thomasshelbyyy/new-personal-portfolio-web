import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { useEffect } from "react"
import { motion } from "framer-motion"

const linkVariants = {
    visible: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            duration: "0.5s",
            ease: "linear"
        }
    },
    hover: {
        y: [0, -20, 0],
        scale: [1, 1.3, 1],
        transition: {
            repeat: Infinity,
            duration: .6,
            ease: "linear"
        }
    }
}

const Contact = ()=> {

    useEffect(()=> {
        document.title = "Contact | Personal Portfolio Web"
    }, [])

    const recipientEmail = "rizkyafriyandi200@gmail.com"

    const handleEmailIconClick = () => {
        window.location.href = `mailto:${recipientEmail}`;
    };

    return(
        <div className="min-h-screen relative">
            <Header />

            <div className="text-center md:p-36 pt-32">
                <h1 className="text-my-primary text-3xl">Contact</h1>
                <h2 className="">You can reach me by clicking one of these icons below</h2>

                <div className="flex flex-wrap justify-center pt-12">
                    <motion.button 
                        variants={linkVariants} 
                        initial={{ x: "-100vw" }} 
                        animate="visible"
                        whileHover="hover"
                        exit={{ x: "-100vw" }}
                        onClick={handleEmailIconClick} 
                        className=" text-3xl mb-6 mx-6"
                    >
                        <AiOutlineMail />
                    </motion.button>

                    <motion.a 
                        variants={linkVariants}
                        initial={{ x: "-100vw", y: "100vh" }}
                        animate="visible"
                        whileHover="hover"
                        exit={{ x: "-100vw", y: "100vh" }}
                        href="https://github.com/thomasshelbyyy" 
                        className=" text-3xl mb-6 mx-6"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a 
                        variants={linkVariants}
                        initial={{ y: "100vh" }}
                        animate="visible"
                        whileHover="hover"
                        exit={{ y: "100vh" }}
                        href="https://www.instagram.com/tommy.f.shelby/" 
                        target="_blank" 
                        className=" text-3xl mb-6 mx-6"
                    >
                        <FaInstagram />
                    </motion.a>

                    <motion.a 
                        variants={linkVariants}
                        initial={{ x: "100vw", y: "100vh" }}
                        animate="visible"
                        whileHover="hover"
                        exit={{ x: "100vw", y: "100vh" }}
                        href="https://twitter.com/TommyfoknShelby?t=I_XqjsAXt8g2GMnohPUu0Q&s=09" 
                        target="_blank" 
                        className=" text-3xl mb-6 mx-6"
                    >
                        <FaTwitter />
                    </motion.a>
                    <motion.a
                        variants={linkVariants}
                        initial={{ x: "100vw" }}
                        animate="visible"
                        whileHover="hover"
                        exit={{ x: "100vw" }}
                        href="https://m.facebook.com/rizky.afriyandi.37" 
                        target="_blank" 
                        className=" text-3xl mb-6 mx-6"
                    >
                        <FaFacebook />
                    </motion.a>
                </div>
            </div>

            <div className="bottom-0 absolute w-screen">

            <Footer /> 
            </div>
        </div>
    )
}

export default Contact