"use client"
import Link from "next/link";
import axios from "axios";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] =  useState("nothing");
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

    const getUserDetails = async() =>{
        const res = await axios.get('/api/users/user');
        setData(res.data.data._id);
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <h1 className="text-2xl text-white">Welcome to Profile</h1>
            <hr/>
            <p className="text-2xl text-white m-4">Profile page</p>
            <h2 className="text-white p-2 rounded bg-green-500">
                {data === "nothing" ? "Nothing" : 
                <Link href={`/profile/${data}`}> {data} </Link>}
            </h2>
            <hr/>
            <button 
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded">Logout</button>
            <button
                onClick={getUserDetails}
                className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get User Details
            </button>
        </div>
    )
}