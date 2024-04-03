import * as yup from 'yup'

export const schema = yup.object({
  nombre: yup.string()
    .required('El nombre es requerido'),
  descripcion: yup.string()
    .required('La descripción es requerida'),
  estado: yup.string()
    .required('El nombre es requerido'),
}).required()