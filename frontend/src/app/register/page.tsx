'use client'
import { useForm, SubmitHandler} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./utils/schema"

type Inputs = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function Register() {
  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>({
    defaultValues:{
      firstName:'',
      lastName:'',
      email:'',
      password:''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = data
    console.log('Datos:------',data) 

   /*  const formData = new FormData()

    Object.entries({
      firstName,
      lastName,
      email,
      password
    }).forEach(([key, value]) => {
      formData.append(key, value)
    })
    formData.forEach((value, key) => {
      console.log('Esto es del forEach',key, value)
    })  */
  }

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  type="text"
                  autoComplete="firstName"
                  required
                  {...register("firstName")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm font-medium text-red-500">{errors.firstName?.message}</p>
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  type="text"
                  autoComplete="lastName"
                  required 
                  {...register("lastName")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />                
                <p className="text-sm font-medium text-red-500">{errors.lastName?.message}</p>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register("email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />                
                <p className="text-sm font-medium text-red-500">{errors.email?.message}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register("password")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm font-medium text-red-500">{errors.password?.message}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    );
}