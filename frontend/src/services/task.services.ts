import { API_URL } from "@/config/db.config";
import { Tarea } from "@/models/task.model";
import axios from "axios";

export const getTasks= async ()=>{
    const task: any = await axios.get(API_URL.GET_TASK)

    return task.data
}

export const getTaskUserId = async (req: any)=>{
    const {userId}=req;

    const task: any = await axios.get(API_URL.GET_TASK_BYID, {userId: userId})
}