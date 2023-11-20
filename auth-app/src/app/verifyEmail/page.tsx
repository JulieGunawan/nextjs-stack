"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage(){

    const [token, setToken] = useState("");
    const [verified,setVerified] = useState(false);
    const [error,setError] = useState(false);

    const verifyUserEmail = async () =>{
        try{
            await axios.post('/api/users/verifyEmail', {token})
            setVerified(true);
        } catch(error:any){
            setError(true);
            console.log(error.response.data);
        }   
    }

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    },[]);

    useEffect(()=>{
        if(token.length>0){
            verifyUserEmail();
        }
    },[token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <h1 className="text-4xl text-white">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-white">{token ? `${token}` : "no token found"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl text-white">Email Verified</h2>
                    <Link className="text-white content-center" href="/login">Login</Link>
                </div>
            )}

            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-white">Error</h2>
                    <Link className="text-white content-center" href="/login">Login</Link>
                </div>
            )}
        </div>
    )
}
