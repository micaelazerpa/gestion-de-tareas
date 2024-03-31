import { API_URL } from "@/config/db.config";
import axios from "axios";

export const postUser= async (req: any)=>{
    const {body}=req
    const user: any = await axios.post(API_URL.POST_USER, body)

    return user.data
}
