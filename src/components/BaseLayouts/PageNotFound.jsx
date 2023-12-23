import { NavLink } from 'react-router-dom'
import PageNotFoundImg from '../../assets/page-not-found.jpg'

const PageNotFound = () => {
  return (
    <>
      <div className=" bg-gray-100 flex items-center rounded-xl p-8">
        <div className="container flex flex-col gap-4 md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-6xl font-dark font-bold text-red-600 stroke-text">
              404
            </div>
            <div className="text-2xl md:text-3xl font-light leading-normal mt-4">
              <p className="font-semibold">Oops !</p>
              <span className="text-base mt-2">
                {' '}
                We couldn't find this page.{' '}
              </span>
            </div>
            <p className="mb-8 mt-8">
              But dont worry, you can find plenty of other things on our
              dashboard.
            </p>

            <NavLink
              className="px-8 inline py-3 text-md font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-full focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700 hover:text-white"
              to="/"
            >
              Back to Dashboard
            </NavLink>
          </div>
          <div className="max-w-md">
            <img
              className="rounded-xl"
              src={PageNotFoundImg}
              alt="Page not found image"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
