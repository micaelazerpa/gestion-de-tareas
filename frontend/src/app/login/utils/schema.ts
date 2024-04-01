import * as yup from 'yup'

export const schema = yup.object({
  usuario: yup.string()
    .required('El usuario es requerido'),
  contraseña: yup.string()
    .required('La contraseña es requerida')
}).required()