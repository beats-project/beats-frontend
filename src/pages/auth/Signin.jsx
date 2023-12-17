import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { login } from '../../redux/actions/auth.action.jsx'
import { getState } from '../../redux/reducers/auth.reducer.js'
import { useEffect } from 'react'

import {
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidations'
import { Input } from '../../components/FormControls/Input.jsx'
import { clientPaths } from '../../utils/constants.js'

const SignIn = props => {
  const methods = useForm()
  const navigate = useNavigate()
  const state = useSelector(getState)
  const loggedIn = state.authReducer.isLoggedIn

  useEffect(() => {
    if (loggedIn) {
      // navigate('/home/*')
      navigate(clientPaths.appURL)
    }
  }, [loggedIn, navigate])

  useEffect(() => {
    let defaultValues = {}
    defaultValues.email = 'zcoder@gmail.com'
    defaultValues.password = 'zcoder123'
    methods.reset({ ...defaultValues })
  }, [])

  const dispatch = useDispatch()
  const doLogin = methods.handleSubmit(data => {
    console.log(data)
    dispatch(login(data.email, data.password))
    methods.reset()
  })
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="form-container"
        >
          <h1 className="mb-4 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            <span className="text-blue-600 dark:text-blue-500 font-extrabold ">
              Sign In
            </span>
            <span className="ml-4 text-3xl">here</span>
          </h1>
          <h4 className="mb-4 text-3xl  leading-none tracking-tight text-gray-500 md:text-2xl lg:text-xl dark:text-white">
            Let's get in
          </h4>
          <div className="flex flex-col mt-8">
            <div>
              <Input {...emailValidation} />
            </div>
            <div>
              <Input {...passwordValidation} />
            </div>
          </div>
          <div className="mt-5 flex justify-between items-center">
            <p>
              Don't have an account?
              <Link
                to={clientPaths.signupURL}
                className="text-blue-600 ml-2 rainbow"
              >
                Sign Up
              </Link>
            </p>

            <button
              onClick={doLogin}
              className="p-3 ml-4 px-12 rounded-full outline-none hover:outline-none bg-blue-600 font-semibold text-white flex  gap-1 hover:bg-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default SignIn
