import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdTextFields } from 'react-icons/md'

export const firstNameValidation = {
  name: 'firstName',
  label: 'first Name',
  type: 'text',
  id: 'firstName',
  icon: MdTextFields,
  placeholder: 'David',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const lastNameValidation = {
  name: 'lastName',
  label: 'last Name',
  type: 'text',
  id: 'lastName',
  icon: MdTextFields,
  placeholder: 'Warner',
  validation: {
    required: {
      value: false,
      message: null,
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const descValidation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  icon: MdTextFields,
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const passwordValidation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  icon: RiLockPasswordFill,
  placeholder: '*******',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 6,
      message: 'Min 6 characters',
    },
  },
}

export const confirmPasswordValidation = {
  name: 'confirmPassword',
  label: 'Retype Password',
  type: 'password',
  id: 'confirmPassword',
  icon: RiLockPasswordFill,
  placeholder: '*******',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 6,
      message: 'Min 6 characters',
    },
  },
}

export const numValidation = {
  name: 'num',
  label: 'number',
  type: 'number',
  id: 'num',
  icon: MdTextFields,
  placeholder: 'write a random number',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
  },
}

export const emailValidation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  icon: MdEmail,
  placeholder: 'samj@gmail.com',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Not valid',
    },
  },
}
