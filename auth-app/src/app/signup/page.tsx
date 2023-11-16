"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
    const [user,setUser] = React.useState(
        {
            username: "",
            email: "",
            password: "",
        });
    const onSignup = async () => {    
    }
     

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-black">
            <h1 className="text-white text-2xl">Signup Page</h1>
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
            >
                Signup Here
            </button>
            <Link href="/login" className="text-white">Visit login page</Link>
        </div>
    )

}