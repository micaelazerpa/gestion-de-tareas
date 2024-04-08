import { useToken } from "@/app/hooks/useToken";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "@/models/user.model";

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const {token } = useToken()
    
    useEffect(()=>{ 
        if (token){
          try {
              const decodedToken =  jwtDecode(token) as User
              setUser(decodedToken)
              
          } catch (error) {
              console.error('Error al decodificar el token:', error)
              throw error
          }
        }
    }, [])
  return (
    <>
      <div className=" flex justify-between items-center w-full">
        <div className="flex justify-center items-center  space-x-2">
          <div>
            <img
              className="rounded-full"
              src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
              alt="avatar"
            />
          </div>
          <div className="flex justify-start flex-col items-start">
            <p className="cursor-pointer text-sm leading-5 text-white">
              {" "}
              {user?.nombre}
            </p>
            <p className="cursor-pointer text-xs leading-3 text-gray-300">
              alexis81@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
