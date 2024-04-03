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

export const getTaskUserId = async (token: any)=>{
    //const {userId}=req;
    try{
        const task: any = await axios.get(API_URL.GET_TASK_BYUSER, {headers: {'Authorization': 'Bearer '+ token}})
        console.log('Respuesta del servidor:', task.data);
        return task.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}
export const putTask = async (req:any, data:any, token: any)=>{
    try{
        const {id}=req
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const task: any = await axios.put(`${API_URL.PUT_TASK}/${id}`, data)
        console.log('Respuesta del servidor:', task.data);
        return task.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}

export const postTask= async (data:any, token: any)=>{
    console.log('Datos service:', data, token)
    try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const task: any = await axios.post(API_URL.POST_TASK, data)
        console.log('Respuesta del servidor:', task.data);
        return task.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}