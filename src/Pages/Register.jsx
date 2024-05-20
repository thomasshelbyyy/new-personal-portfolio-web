import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/init"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            aler("user registration success")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-my-primary rounded-lg p-8">
                <h1 className="text-lg pb-6">Login to access dashboard</h1>
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" className="px-3 py-2 text-lg rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" className="px-3 py-2 text-lg rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="w-fit px-3 py-2 bg-sky-700 rounded-lg hover:bg-sky-800">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register