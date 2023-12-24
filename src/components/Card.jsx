import classNames from 'classnames'

const Card = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'rounded-2xl px-10 py-4 drop-shadow-xl hover:text-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
