import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { useEffect } from "react"

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
                    <button onClick={handleEmailIconClick} className=" text-3xl mb-6 mx-6 hover:-translate-y-2 transition duration-200"><AiOutlineMail /></button>
                    <a href="https://github.com/thomasshelbyyy" className=" text-3xl mb-6 mx-6 hover:-translate-y-2 transition duration-200"><FaGithub /></a>
                    <a href="https://www.instagram.com/tommy.f.shelby/" target="_blank" className=" text-3xl mb-6 mx-6 hover:-translate-y-2 transition duration-200"><FaInstagram /></a>
                    <a href="https://twitter.com/TommyfoknShelby?t=I_XqjsAXt8g2GMnohPUu0Q&s=09" target="_blank" className=" text-3xl mb-6 mx-6 hover:-translate-y-2 transition duration-200"><FaTwitter /></a>
                    <a href="https://m.facebook.com/rizky.afriyandi.37" target="_blank" className=" text-3xl mb-6 mx-6 hover:-translate-y-2 transition duration-200"><FaFacebook /></a>
                </div>
            </div>

            <div className="bottom-0 absolute w-screen">

            <Footer /> 
            </div>
        </div>
    )
}

export default Contact