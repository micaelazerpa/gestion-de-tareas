"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./utils/schema";
import { Usuario } from "@/models/user.model";
import { useRegister } from "./hooks/useRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>({
    defaultValues: {
      usuario: "",
      nombre: "",
      apellido: "",
      correo: "",
      contraseña: "",
    },
    resolver: yupResolver(schema),
  });
  const { createUser, isLoading } = useRegister();
  const router = useRouter();

  const onSubmit: SubmitHandler<Usuario> = (data) => {
    console.log("Datos:------", data);
    createUser(data);
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen justify-center px-6 py-12 lg:px-8 bg-[url('/fondo.png')] bg-cover bg-center">
      <div className="flex justify-center flex-col flex-1 max-w-md overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img className="mx-auto h-10 w-auto" src="/icono.png" alt="Logo" />
          </a>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registro
          </h2>
        </div>
        <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2 space-y-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="firstName"
                required
                {...register("usuario")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.usuario?.message}
              </p>
            </div>
            <div className="mt-2 space-y-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="firstName"
                required
                {...register("nombre")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.nombre?.message}
              </p>
            </div>
            <div className="mt-2 space-y-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellido
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="lastName"
                required
                {...register("apellido")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.apellido?.message}
              </p>
            </div>
            <div className="mt-2 space-y-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electronico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                {...register("correo")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.correo?.message}
              </p>
            </div>

            <div className="mt-2 space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-cyan-600 hover:text-cyan-500"
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                {...register("contraseña")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.contraseña?.message}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isLoading}
              >
                {/* {isLoading ? ( <>Enviando...</>): <Link href="/login">Registrarse</Link> } */}
                {isLoading ? <>Enviando...</> : "Registrarse"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
