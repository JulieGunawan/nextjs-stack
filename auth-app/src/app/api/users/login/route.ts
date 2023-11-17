import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email});
        if (!user){
            return NextResponse.json({error:"User does not exist"},
                {status:400}
            )
        }

        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword){
            return NextResponse.json({error:"Invalid credentials"},
                {status:400}
            )
        }        

        //create token data
    } catch (error:any){
        return NextResponse.json({error:error.message},
            {status:500}
        )
    } finally{

    }
}