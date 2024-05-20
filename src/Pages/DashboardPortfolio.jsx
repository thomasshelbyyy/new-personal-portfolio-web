import { Link } from "react-router-dom"
import DashboardLayout from "../Layouts/DashboardLayout"
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { useEffect, useState } from "react"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db, storage } from "../firebase/init"
import { deleteObject, ref } from "firebase/storage"

const DashboardPortfolio = () => {
    const [portfolios, setPortfolios] = useState([])


    useEffect(() => {
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

    const handleDelete = async (portfolio) => {
        try {
            await deleteDoc(doc(db, "portfolio", portfolio.id))
            const fileRef = ref(storage, portfolio.imageUrl)
            await deleteObject(fileRef)
            setPortfolios(prev => prev.filter(p => p.id !== portfolio.id))
            alert("portfolio succesfully deleted")
        } catch (error) {
            console.log(error)
            alert("failed to delete portfolio")
        }
    }
    return (
        <DashboardLayout>
            <div className="p-8">
                <Link to="/dashboard/portfolio/add" className="px-3 py-1 bg-blue-600 rounded-md">Add new</Link>

                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Github</th>
                            <th>Live Site</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {portfolios.length > 0 && portfolios.map((portfolio, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{portfolio.map}</td>
                                <td><img src={portfolio.imageUrl || ""} alt="" className="w-32 rounded-md" /></td>
                                <td><a href={portfolio.github} target="_blank">{portfolio.github}</a></td>
                                <td><a href={portfolio.liveSite} target="_blank">{portfolio.liveSite}</a></td>
                                <td className="flex gap-3">
                                    <Link to={`/dashboard/portfolio/detail/${portfolio.id}`} className="bg-blue-600 px-2 py-1 text-white rounded-md"><FaEye /></Link>
                                    <Link to={`/dashboard/portfolio/edit/${portfolio.id}`} className="bg-green-600 px-2 py-1 text-white rounded-md"><FaEdit /></Link>
                                    <button className="bg-red-600 px-2 py-1 text-black rounded-md" onClick={() => handleDelete(portfolio)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}

export default DashboardPortfolio