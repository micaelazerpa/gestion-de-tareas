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
  const { setToken } = useToken();
  const { searchUser, isLoading, token } = useLogin();
  const router = useRouter();

  const onSubmit = (data: any) => {
    searchUser(data);

  };

  useEffect(() => {
    if (token) {
      //router.push(`/task?token=${token}`)
      setToken(token);
      updateAuth();
      router.push("/task");
    } else {
      console.log("el usuario no existe");
    }
  }, [token]);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <a href="/">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/256/11017/11017025.png"
            alt="Logo"
          />
        </a>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciar sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Usuario
            </label>
            <div className="mt-2">
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
          </div>

          <div>
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
                  className="font-semibold text-purple-600 hover:text-purple-500"
                >
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
                {...register("contraseña")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="text-sm font-medium text-red-500">
                {errors.contraseña?.message}
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <>Enviando...</>
            ) : ('Iniciar sesión')}
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
