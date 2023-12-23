const Button = ({ title, onClickHandler }) => {
  return (
    <button
      className="p-3 ml-4 px-12 rounded-full outline-none hover:outline-none bg-blue-600 font-semibold text-white flex  gap-1 hover:bg-blue-800"
      onClick={onClickHandler}
    >
      {title}
    </button>
  )
}

export default Button
