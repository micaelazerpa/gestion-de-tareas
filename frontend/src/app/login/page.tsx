"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useLogin } from "./hooks/useLogin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useToken } from "../hooks/useToken";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      usuario: "",
      contraseña: "",
    },
  });
  const { updateAuth } = useAuth();
  const { searchUser, isLoading, token } = useLogin();
  const router = useRouter();
  const { setToken } = useToken();
  const tokenInicial = token;
  console.log("token inicial", tokenInicial);

  const onSubmit = (data: any) => {
    searchUser(data);
  };

  useEffect(() => {
    if (token) {
      //router.push(`/task?token=${token}`)
      //setToken(token);
      console.log("manda token inicial");
      setToken(tokenInicial);
      updateAuth();
      router.push("/task");
    }
  }, [token]);

  return (
    <div className="flex min-h-screen justify-center px-6 py-12 lg:px-8 bg-[url('/fondo.png')] bg-cover bg-center">
      <div className="flex h-full justify-center flex-col flex-1 max-w-md overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img className="mx-auto h-10 w-auto" src="/icono.png" alt="Logo" />
          </a>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
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
                {isLoading ? <>Enviando...</> : "Iniciar sesión"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
