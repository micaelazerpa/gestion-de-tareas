import { API_URL } from "@/config/env.config";
import axios from "axios";

export const postUser= async (data: any)=>{
    //const {body} = req
    console.log('Datos service:', data)
    try{
        const user: any = await axios.post(API_URL.POST_USER, data)
        console.log('Respuesta del servidor:', user.data);
        return user.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}
export const postLogin= async (data: any)=>{
    //const {body} = req
    console.log('Datos service:', data)
    try{
        const user: any = await axios.post(API_URL.POST_USER_LOGIN, data)
        console.log('Respuesta del servidor:', user.data);
        return user.data.autentificacion
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}
export const getUser= async (req: any)=>{
    console.log('Datos service:', req)
    try{
        const user: any = await axios.get(API_URL.GET_USER)
        console.log('Respuesta del servidor:', user.data);
        const searchUser = user.data.findOne((item: any) =>item.user==req)
        if (searchUser) {
            return searchUser
        }
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}

export const getUserById= async (userId: any)=>{
    console.log('Datos service:', userId)
    try{
        const user: any = await axios.get(API_URL.GET_USER_BYID, {data: userId})
        return user.data
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}