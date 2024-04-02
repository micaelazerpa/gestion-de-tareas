import { API_URL } from "@/config/env.config";
import { Tarea } from "@/models/task.model";
import axios from "axios";

export const getTasks= async ()=>{
    try{
        const task: any = await axios.get(API_URL.GET_TASK)
        console.log('Respuesta del servidor:', task.data);
        return task.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}

export const getTaskUserId = async (req: any)=>{
    const {userId}=req;

    const task: any = await axios.get(API_URL.GET_TASK_BYID, userId)
}

export const postTask= async (data: any)=>{
    console.log('Datos service:', data)
    try{
        const task: any = await axios.post(API_URL.POST_TASK, {data})
        console.log('Respuesta del servidor:', task.data);
        return task.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}