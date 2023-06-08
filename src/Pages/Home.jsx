import Footer from "../Components/Footer"
import Header from "../Components/Header"
import profile from "../assets/no-profile.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Home = ()=> {

    useEffect(()=> {
        document.title = "Home | Personal Portfolio Web"
    }, [])
    return(
        <div>
            <Header />
            
            <div className="flex md:items-center py-7 w-100 justify-center h-screen flex-wrap pt-32">
                <div className="flex flex-col font-bold md:border-r md:border-white md:p-6 p-3">

                    <h1 className="text-4xl">Hello World</h1>
                    <h2 className="text-3xl">I Am <span className="text-my-primary font-anton">Rizky</span></h2>
                    <h2 className="text-3xl">A <span className="text-my-primary font-anton">Front End Web Develover</span></h2>
                    <Link to="/about" className="bg-my-primary transition-color duration-300 hover:bg-red-800 py-3 px-4 rounded-full border-slate-300 w-fit mt-3">
                        More About Me
                    </Link>
                </div>

                <img src={profile} alt="foto saya" className="w-48 h-48 rounded-full md:p-6" />
            </div>

            <Footer />
        </div>
    )
}

export default Home