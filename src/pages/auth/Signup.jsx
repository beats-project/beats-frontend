import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { getState } from '../../redux/reducers/auth.reducer.js'

import {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
} from '../../utils/inputValidations'
import { Input } from '../../components/FormControls/Input.jsx'

import { clientPaths } from '../../utils/constants.js'
import Button from '../../components/FormControls/Button.jsx'

const pageContent = {
  linkURL: clientPaths.signinURL,
  linkText: 'Already have an account? ',
  header: 'Create an account',
  subHeader: 'Give us few details to get started',
  buttonText: 'Sign Up',
  linkButtonText: 'Sign in',
}

const SignUp = props => {
  const methods = useForm()

  const doRegister = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="form-container"
      >
        <h1 className="mb-2 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          <span className="text-blue-600 dark:text-blue-500 font-extrabold">
            {pageContent.header}
          </span>
          {/* <span className="ml-4 text-3xl">here</span> */}
        </h1>
        <h4 className="mb-4 text-3xl  leading-none tracking-tight text-gray-500 md:text-2xl lg:text-xl dark:text-white">
          {pageContent.subHeader}
        </h4>
        {/*{success && (*/}
        {/*  <p className="message-text font-semibold p-1 px-2 text-sm rounded-md bg-green-200 text-green-500 mb-5 flex items-center gap-2">*/}
        {/*    <BsFillCheckSquareFill /> Form has been submitted successfully*/}
        {/*  </p>*/}
        {/*)}*/}
        <div className="flex flex-col mt-8">
          <div className="flex justify-between gap-4">
            <Input {...firstNameValidation} />
            <Input {...lastNameValidation} />
          </div>
          <div className="flex justify-between">
            <Input {...emailValidation} />
            <></>
          </div>
          <div className="flex justify-between gap-4">
            <Input {...passwordValidation} />
            <Input {...confirmPasswordValidation} />
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <p>
            {pageContent.linkText}
            <Link
              to={pageContent.linkURL}
              className="text-blue-600 ml-2 rainbow"
            >
              {pageContent.linkButtonText}
            </Link>
          </p>

          <Button title={pageContent.buttonText} onClickHandler={doRegister} />
        </div>
      </form>
    </FormProvider>
  )
}

export default SignUp
