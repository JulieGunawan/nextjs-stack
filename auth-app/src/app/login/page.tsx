"use client"
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const onLogin = async () => {   
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-black text-center">
            <h1 className="text-white text-2xl">Login Page</h1>
            <hr/>
            <label htmlFor="email" className="text-white text-2xl">Email</label>
            <input
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password" className="text-white text-2xl">Password</label>
            <input
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black text-2xl"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                placeholder="password"
            />
            <button 
                onChange={onLogin}
                className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-2xl"
            >
                Login Here
            </button>    
            <Link href="/signup" className="text-white">Visit signup page</Link>        
        </div>
    )
}