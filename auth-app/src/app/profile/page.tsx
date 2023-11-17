"use client"
import Link from "next/link";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function ProfilePage(){
    const router = useRouter();
    const logout = async () => {
        try{
            await axios.get("/api/users/logout");
            console.log("Logout successful");
            // toast.success("Logout successful");
            //once user succesfully logout, redirect to login page
            router.push('/login');
        } catch(e:any){
            console.log(e.message);
            // toast.error(e.message);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <h1 className="text-2xl text-white">Welcome to Profile</h1>
            <hr/>
            <p className="text-2xl text-white m-4">Profile page</p>
            <hr/>
            <button 
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">Logout</button>
        </div>
    )
}