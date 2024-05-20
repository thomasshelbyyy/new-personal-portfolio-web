import { Link } from "react-router-dom"

const links = ["Overview", "Profile", "Portfolio", "Skills"]
const DashboardSidebar = () => {
    return (
        <div className="h-screen ">
            <ul className="p-5 w-60 h-full flex flex-col text-lg gap-8 bg-my-primary">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link
                            to={`/dashboard/${link === "Overview" ? "" : link.toLowerCase()}`}
                            className="px-3 py-1 hover:bg-my-hover rounded-lg"
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default DashboardSidebar