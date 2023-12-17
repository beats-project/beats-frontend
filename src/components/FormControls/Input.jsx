import cn from 'classnames'
import { findInputError, isFormInvalid } from '../../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  name,
  label,
  type,
  id,
  icon: Icon,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
    watch,
    getValues,
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-3 font-medium rounded-full border border-2 border-slate-300 focus:outline-none focus:border-slate-500 placeholder:opacity-60'

  return (
    <div className={cn('flex flex-col gap-2 mb-2 input-div', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-normal text-normal capitalize text-gray-800">
          <Icon />
          {label}
        </label>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
      ) : id === 'confirmPassword' ? (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          placeholder={placeholder}
          {...register(name, {
            required: 'Required',
            validate: value =>
              value === watch('password') || 'Password do not match',
          })}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={cn(input_tailwind)}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}

      <AnimatePresence mode="wa addressit" initial={false}>
        <InputError
          message={inputErrors.error ? inputErrors.error.message : null}
        />
      </AnimatePresence>
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-sm text-red-500"
      {...framer_error}
    >
      {message == null ? null : <MdError />}
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, x: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 0.2 },
}
