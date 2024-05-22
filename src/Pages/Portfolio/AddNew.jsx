import { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout"
import { db, storage } from "../../firebase/init"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddNewPortfolio = () => {
    const [preview, setPreview] = useState(null)
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [github, setGithub] = useState("")
    const [liveSite, setLiveSite] = useState("")

    const navigate = useNavigate()

    function handleChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const fileRef = ref(storage, `portfolio/${file.name}`)

        try {
            const snapshot = await uploadBytes(fileRef, file)
            const downloadUrl = await getDownloadURL(snapshot.ref)

            const portfolioData = {
                name,
                description,
                imageUrl: downloadUrl,
                github,
                liveSite,
                createdAt: serverTimestamp(),
                lastUpdate: serverTimestamp()
            }

            await addDoc(collection(db, "portfolio"), portfolioData)
            alert("portfolio succesfully added")
            navigate("/dashboard/portfolio")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <DashboardLayout>
            <div className="p-8">
                <button className="px-3 py-1 rounded-lg bg-my-blue-700">Back</button>

                <form className="p-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="pb-3">Project Name</label>
                        <input type="text" id="name" className="text-lg px-3 py-1 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="pb-3">Description</label>
                        <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="flex flex-col">
                        <h2>Project Image</h2>
                        <input type="file" onChange={handleChange} className="mb-3" />
                        <img src={preview} alt="" className="w-52" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="githubLink" className="pb-3">Github Link</label>
                        <input type="text" id="githubLink" className="text-lg px-3 py-1 rounded-md" value={github} onChange={(e) => setGithub(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="liveSiteLink" >Live Site Link</label>
                        <input type="text" id="liveSiteLink" className="text-lg px-3 py-1 rounded-md" value={liveSite} onChange={(e) => setLiveSite(e.target.value)} />
                    </div>
                    <button type="submit" className="text-white px-3 py-1 rounded-lg bg-green-600">Submit</button>
                </form>
            </div>
        </DashboardLayout>
    )
}

export default AddNewPortfolio