import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const PortfolioCard = props => {
    return(
        <div className="max-w-sm bg-my-hover rounded overflow-hidden shadow-lg group mx-6 mb-6">
        <div className="relative">
            <img className="w-full filter group-hover:brightness-50 transition duration-200" src={props.image} alt={props.name} />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <a href={props.link} target="_blank" className="text-white text-lg font-semibold hidden group-hover:flex hover:text-slate-400"><FaExternalLinkAlt /> <span className="ml-3"> Visit Website</span></a>
                <a href={props.github} target="_blank" className="text-white text-lg font-semibold hidden group-hover:flex mt-2 hover:text-slate-400"><FaGithub /> <span className="ml-3"> Github Repository</span></a>
            </div>
        </div>
        <div className="px-6 py-4">
            <p className="text-my-primary text-base">{props.name}</p>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default PortfolioCard