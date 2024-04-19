import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    login: vine.string().minLength(4).alphaNumeric().trim(),
    password: vine.string().minLength(6).alphaNumeric().confirmed({
      confirmationField: 'passwordConfirmation',
    }),
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    gender: vine.string().trim(),
    email: vine.string().email().trim(),
    phone: vine.string().mobile(),
    address: vine.string(),
    zipCode: vine.string(),
    city: vine.string(),
    country: vine.string(),
  })
)
