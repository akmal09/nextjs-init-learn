import { retrieveData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data =  {
    status:boolean,
    statuscode:number,
    data : any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    // res.status(200).json({
    //     status:true,
    //     statuscode:200,
    //     data:data
    // })
    const data = await retrieveData("products")
    
    res.status(200).json({
        status:true,
        statuscode:200,
        data:data
    })
}

