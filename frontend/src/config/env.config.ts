export const URL_SERVER="https://desafio-tecnico-sifg.onrender.com"

export const API_URL={
    GET_USER: URL_SERVER + "/usuario",
    GET_USER_BYID: URL_SERVER + "/usuario/:usuarioId",
    POST_USER_LOGIN: URL_SERVER + "/autentificacion",
    POST_USER: URL_SERVER + "/usuario/registrar",
    GET_TASK: URL_SERVER + "/tarea",
    GET_TASK_BYUSER: URL_SERVER + "/tarea/misTareas",
    PUT_TASK: URL_SERVER + "/tarea/actualizar",
    POST_TASK: URL_SERVER + "/tarea/registrar"
}