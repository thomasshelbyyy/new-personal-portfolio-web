import { useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import PortfolioCard from "../Components/PortfolioCard"
import { useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/init"

const Portfolio = () => {

    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        document.title = "Portfolio | Personal Portfolio Web"
        const getData = async () => {
            const snapshot = await getDocs(collection(db, "portfolio"))
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            setPortfolios(data)
        }
        getData()
    }, [])

    return (
        <div>
            <Header />
            <div className="pb-6 text-center pt-32">
                <div className="pb-10 text-center">
                    <h1 className="text-2xl text-my-primary">Portfolio</h1>
                    <h2>Here are projects i have made</h2>
                </div>

                <div className="flex flex-wrap justify-center">
                    {portfolios.length > 0 && portfolios.map(portfolio => (
                        <PortfolioCard
                            name={portfolio.name}
                            github={portfolio.github}
                            description={portfolio.description}
                            image={portfolio.imageUrl}
                            link={portfolio.liveSite}
                            key={portfolio.id}
                        />
                    ))}

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Portfolio