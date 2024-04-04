import * as yup from 'yup'

export const schema = yup.object({
  nombre: yup.string()
    .required('El nombre es requerido')
    .min(3, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo'),
  descripcion: yup.string()
    .required('La descripción es requerida')
    .min(3, 'La descripción es muy corto')
    .max(50, 'La descripción es muy largo'),
  estado: yup.string()
    .required('El estado es requerida')
}).required()