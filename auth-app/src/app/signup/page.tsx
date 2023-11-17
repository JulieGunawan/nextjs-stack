"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";
export default function SignupPage() {
    //once the user sign up, it will be redirected to login page, using router to do that
    const router = useRouter();
    const [user,setUser] = React.useState(
        {
            username: "",
            email: "",
            password: "",
        });
    //setting to false will not make the button disabled
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {    
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            //once user succesfully signup, redirect to login page
            router.push("/login");
        } catch (error: any){
            console.log("Sign up failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
     
    useEffect(() => {
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-black">
            <h1 className="text-white text-2xl">{loading ? "Processing..." : "Sign Up"}</h1>
            <hr/>
            <label htmlFor="username" className="text-white text-2xl">Username</label>
            <input 
                id="username" 
                type="text" 
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                value={user.username} 
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email" className="text-white text-2xl">Email</label>
            <input 
                id="email" 
                type="text" 
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password" className="text-white text-2xl">Password</label>
            <input 
                id="password" 
                type="password" 
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-2xl"
                onClick={onSignup}
            >{buttonDisabled ? "Incomplete form" : "Signup"}
            </button>
            <Link href="/login" className="text-white">Visit login page</Link>
        </div>
    )

}