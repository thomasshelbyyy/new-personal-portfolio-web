import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { db, storage } from "../../firebase/init"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import DashboardLayout from "../../Layouts/DashboardLayout"

const UpdatePortfolio = () => {
    const { id } = useParams()
    const [preview, setPreview] = useState(null)
    const [name, setName] = useState("")
    const [file, setFile] = useState("")
    const [description, setDescription] = useState("")
    const [github, setGithub] = useState("")
    const [liveSite, setLiveSite] = useState("")
    const [oldImageUrl, setOldImageUrl] = useState()

    const navigate = useNavigate()

    function handleChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    const deleteFileByUrl = async (imageUrl) => {
        const baseUrl = "https://firebasestorage.googleapis.com/v0/b/"
        const bucketName = storage.app.options.storageBucket
        const path = imageUrl.split(`${baseUrl}${bucketName}/o/`)[1].split('?')[0]
        const decodePath = decodeURIComponent(path)
        const fileRef = ref(storage, decodePath)
        try {
            await deleteObject(fileRef)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            let downloadUrl

            if (file && preview) {
                await deleteFileByUrl(preview)
            }
            if (file) {
                const fileRef = ref(storage, `portfolio/${file.name}`)
                const snapshot = await uploadBytes(fileRef, file)
                downloadUrl = await getDownloadURL(snapshot.ref)
            } else {
                downloadUrl = preview
            }

            const portfolioData = {
                name,
                description,
                imageUrl: downloadUrl,
                github,
                liveSite,
                lastUpdate: serverTimestamp()
            }

            const portfolioRef = doc(db, "portfolio", id)
            await updateDoc(portfolioRef, portfolioData)
            alert("portfolio succesfully Updated")
            navigate("/dashboard/portfolio")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDoc(doc(db, "portfolio", id))
            const data = snapshot.data()

            setDescription(data.description)
            setName(data.name)
            setPreview(data.imageUrl)
            setGithub(data.github)
            setLiveSite(data.liveSite)
            setOldImageUrl(data.imageUrl)
        }

        fetchData()
    }, [])

    console.log({ name, description, preview, github, liveSite })
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

export default UpdatePortfolio