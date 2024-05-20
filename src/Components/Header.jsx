import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import { signOut } from "firebase/auth"

const Header = () => {
    const location = useLocation()
    const [user] = useAuthState(auth)

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos;

            setShowNavbar(visible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos])

    const handleMenutOpen = () => setIsMenuOpen(!isMenuOpen)

    return (
        // <nav className="relative overflow-hidden -top-96">
        <nav className={`fixed top-0 left-0 w-full transition duration-300 z-50 ${!showNavbar && "-translate-y-40"}`}>
            <div className="bg-my-primary flex justify-between px-20 py-5">
                <Link to="/" className="text-3xl font-anton">
                    The <span className="text-my-hover">Riz</span>
                </Link>

                <div className="hidden md:block">
                    <div className="flex text-lg">
                        <Link to="/" className={`my-nav relative px-3 ${location.pathname === '/' && "text-my-hover"}`}>Home</Link>
                        {user && <Link to="/dashboard">Dashboard</Link>}
                        <Link to="/about" className={`my-nav relative px-3 ${location.pathname === '/about' && "text-my-hover"}`}>About</Link>
                        <Link to="/portfolio" className={`my-nav relative px-3 ${location.pathname === '/portfolio' && "text-my-hover"}`}>Portfolio</Link>
                        <Link to="/contact" className={`my-nav relative px-3 ${location.pathname === '/contact' && "text-my-hover"}`}>Contact</Link>
                        {user && <button onClick={() => signOut(auth)}>Logout</button>}
                    </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                    <button type="button" onClick={handleMenutOpen}>
                        {/* <!-- Icon untuk hamburger menu --> */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>



            <div className={`md:hidden flex justify-end h-full mr-6 transition-opacity duratino-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
                <div className="flex flex-col text-black font-semi-bold p-5 bg-white rounded-lg">
                    <Link to="/" className={`px-3 hover:text-my-hover mb-2 ${location.pathname === "/" && "text-my-primary"}`}>Home</Link>
                    <Link to="/about" className={`px-3 hover:text-my-hover mb-2 ${location.pathname === "/about" && "text-my-primary"}`}>About</Link>
                    <Link to="/portfolio" className={`px-3 hover:text-my-hover mb-2 ${location.pathname === "/portfolio" && "text-my-primary"}`}>Portfolio</Link>
                    <Link to="/contact" className={`px-3 hover:text-my-hover mb-2 ${location.pathname === "/contact" && "text-my-primary"}`}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header