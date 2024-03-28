import * as yup from 'yup'

export const schema = yup.object({
  firstName: yup.string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'Ingresa solo letras')
    .min(3, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo'),
  lastName: yup.string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'Ingresa solo letras')
    .min(3, 'El apellido es muy corto')
    .max(50, 'El apellido es muy largo'),
  email: yup.string().email('Ingresa un correo valido').required('El correo es requerido'),
  password: yup.string()
    .required('La contraseña es requerida')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]*$/,
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número'
    )
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
}).required()