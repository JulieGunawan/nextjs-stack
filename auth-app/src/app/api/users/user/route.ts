//this is used to get user
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try{
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id:userId}).select("-password");
        console.log("user is",user);
        return NextResponse.json({
            message:"User found",
            data:user,
        })
    } catch(error:any){
        console.log(error);
        return NextResponse.json({error:error.message}, {status:400});
    }
}