import { useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import PortfolioCard from "../Components/PortfolioCard"
import rmdb from "../assets/rmdb.png"
import toDoList from "../assets/to-do-list.png"
import kopiSopoqAngen from "../assets/kopi-sopoq-angen.png"
import traversyMedia from "../assets/traversy-media.png"
import restaruantWebsite from "../assets/restaurant-website.png"
import photographyGallery from "../assets/photography-gallery.png"
import myTunes from "../assets/mytunes.png"
import recarro from "../assets/recarro.png"
import weatherApp from "../assets/weather-app.png"
import beliKelambi from "../assets/beliKelambi.png"
import { useEffect } from "react"

const Portfolio = ()=> {

    const [showMore, setShowMore] = useState(false)

    useEffect(()=> {
            document.title = "Portfolio | Personal Portfolio Web"
    }, )

    const handleClick = ()=> {
        setShowMore(prevState => !prevState)
    }

    return(
        <div>
            <Header />
            <div className="pb-6 text-center pt-32">
                <div className="pb-10 text-center">
                    <h1 className="text-2xl text-my-primary">Portfolio</h1>
                    <h2>Here are projects i have made</h2>
                </div>

                <div className="flex flex-wrap justify-center">
                    <PortfolioCard 
                        name="beliKelambi"
                        image={beliKelambi}
                        github="https://github.com/thomasshelbyyy/bellikelambi"
                        link="https://bellikelambi.netlify.app/"
                        description={`beliKelambi is a E Commerce system where you can do CRUD (Create, Read, Update, and Delete) with the cart fter you logged in, everything works well in this app except for the payment because it does not have backend. This app built with React JS and fakestoreapi.com for the products API`}
                    />

                    <PortfolioCard 
                        name="Recarro"
                        image={recarro}
                        github="https://github.com/thomasshelbyyy/recarro"
                        link="https://recarro.netlify.app/"
                        description={`Recarro is a car rental website, built with React and Tailwind CSS, in this app you can choose the car you like, fill your information (data will not be saved to database yet), and validation to validate your data is correct or not`}
                    />

                    <PortfolioCard 
                        name="RMDB"
                        image={rmdb}
                        github="https://github.com/thomasshelbyyy/rmdb"
                        link="https://rizkymdb.netlify.app/"
                        description={`RMDB is stands for "Rizky's Movie Database", this is a website that consume API from tmdb.com`}
                    />

                    <PortfolioCard 
                        name="Weather App"
                        image={weatherApp}
                        github="https://github.com/thomasshelbyyy/react-weather-app"
                        link="https://weather-app-by-rizky.netlify.app/"
                        description={`A classic weather app built with react using openweathermap API`}
                    />

                    <PortfolioCard 
                        name="To Do List"
                        image={toDoList}
                        github="https://github.com/thomasshelbyyy/todolist"
                        link="https://tourmaline-pithivier-5daaba.netlify.app"
                        description={`simple to do list app, you can add, edit, delete, search and mark as done your task. NOTE: This application is not optimized for mobile, please use desktop to open, or use desktop mode in your phone`}
                    />

                    <PortfolioCard 
                        name="Coffeeshop Landing Page"
                        image={kopiSopoqAngen}
                        github="https://github.com/thomasshelbyyy/kopi-sopoq-angen-landing-page"
                        link="https://thomasshelbyyy.github.io/kopi-sopoq-angen-landing-page/"
                        description={`'Kopi Sopoq Angen', or One Heart Coffee in English, this is a responsive landing page example for coffeeshop, all the functionality are not work for now`}
                    />

                    
                    

                    {showMore && (
                        <>

                            <PortfolioCard 
                                name="Traversy Media Cloning"
                                image={traversyMedia}
                                github="https://github.com/thomasshelbyyy/traversymedia-responsive-cloning"
                                link="https://thomasshelbyyy.github.io/traversymedia-responsive-cloning/"
                                description={`This is a cloning landing page of a website name traversymedia.com. No functionality work here`}
                            />
                            <PortfolioCard 
                                name="Restaurant Website"
                                image={restaruantWebsite}
                                github="https://github.com/thomasshelbyyy/restaurant-website"
                                link="https://thomasshelbyyy.github.io/restaurant-website/"
                                description={`This is a Restaurant Website With some main menu, this website purpose is to improve my skill for layouting using CSS Grid`}
                            />
                            
                            <PortfolioCard 
                                name="Photography Gallery"
                                image={photographyGallery}
                                github="https://github.com/thomasshelbyyy/photograpy-gallery"
                                link="https://thomasshelbyyy.github.io/photograpy-gallery/"
                                description={`This is a photography gallery example`}
                            />
                        
                            <PortfolioCard 
                                name="MyTunes Landing Page"
                                image={myTunes}
                                github="https://github.com/thomasshelbyyy/mytunes-landingpage-example"
                                link="https://thomasshelbyyy.github.io/mytunes-landingpage-example/"
                                description={`This is a music equipment store landing page example, this website is not reponsive yet, and no functionality`}
                            />
                        </>
                    )}


                </div>

                <button onClick={handleClick} className="w-fit px-3 py-2 bg-my-primary rounded-md">{showMore ? "Show Less" : "Show More"}</button>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio