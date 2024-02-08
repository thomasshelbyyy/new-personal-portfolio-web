import Footer from "../Components/Footer"
import Header from "../Components/Header"
import profile from "../assets/no-profile.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

const buttonVariants = {
    hover: {
        scale: [1, 1.1, 1],
        backgroundColor: "transparent",
        boxShadow: ["0px 0px 0px 0px #C22B42", "0px 0px 6px 10px #C22B42", "0px 0px 0px 0px #C22B42"],
        textShadow: "0px 0px 8px 10px #C22B42",
        transition: {
            repeat: Infinity,
            duration: .6,
            ease: "linear"
        }
    }
}

const leftVariants = {
    hidden: {
        x: "-100vw",
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

const Home = () => {

    useEffect(() => {
        document.title = "Home | Personal Portfolio Web"
    }, [])

    // const handleDownload = async () => {
    //     const cvUrl = "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQJ8s280Ucmm2wAAAYvCKB2nEr8vs1dovCKDoAJgs5v7cSaFB12TdH8Amds1ibjT-OQfxyIzc-lHJpvriVT7gqhiMNzacwMcpi6MeJZQZDrnFwM5anPlcM5ZyD_uU0jZCCxXk5ez6dtLw3AkGHuT5gYwTsSKKN5c9AicOfNuNYMgeh17WYa_GNUGtIVm1ddAzjIH4iDhdbdSKeOWZqGsaRgCkMzuwUInZObjMf60jsvw7GO96x3t-QPd4fvsjDUoXLwv9-4Sl25nPytPr-qwHplCLB6-dPbiBnQ7aRxg_ceufKhPmKqcpo40CzW9n0jrMwbgb68PQhj13o9b9x_wD2-JB1le-fWiY7LmFUmgBolzUkLvxlfjD2xeWVuki_xFhqA8UmM8NWHIda14jYGaifg-LkFsxH-157hRGleooERJxqJEvKKEK8izcUFO1oZAfOtGqqXotTJ97eXbGD0yT25JXYC0PPkxhIltZrs4qIHiCKKrGBVh7S3cOQLtjJ4evz97yWCLjva7NGe8_crGbitXfFWK-45oU976OQIn4FNk2vwQIt3zeZgevajaUAjvqHT__w&x-ambry-um-filename=Profile.pdf"

    //     try {
    //         const response = await fetch(cvUrl)
    //         const blob = await response.blob()

    //         const url = window.URL.createObjectURL(blob)

    //         const a = document.createElement("a")
    //         a.href = url
    //         a.download = "Rizky_Resume.pdf"
    //         document.body.appendChild(a)
    //         a.click()
    //         document.body.removeChild(a)
    //     } catch (error) {
    //         console.log("error: ", error)
    //     }
    // }

    return (
        <div>
            <Header />

            <div className="flex md:items-center py-7 w-100 justify-center h-screen flex-wrap pt-32">
                <motion.div
                    className="flex flex-col font-bold md:border-r md:border-white md:p-6 p-3"
                    variants={leftVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >

                    <h1 className="text-4xl">Hello World</h1>
                    <h2 className="text-3xl">I Am <span className="text-my-primary font-anton">Rizky</span></h2>
                    <h2 className="text-3xl">A <span className="text-my-primary font-anton">Front End Web Develover</span></h2>
                    <div classNme="flex ">
                        <Link to="/about">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                className="bg-my-primary py-3 px-4 rounded-full border-slate-300 w-fit mt-3"
                            >
                                More About Me
                            </motion.button>
                        </Link>
                        {/* <button onClick={handleDownload}>Download My Resume</button> */}
                    </div>
                </motion.div>

                <motion.img
                    variants={rightVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={profile}
                    alt="foto saya"
                    className="w-48 h-48 rounded-full md:p-6"
                />
            </div>

            <Footer />
        </div>
    )
}

export default Home