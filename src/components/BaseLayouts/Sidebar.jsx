import { NavLink } from 'react-router-dom'
import routes from '../../routes'

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container bg-white flex flex-col justify-between">
        <h3 className="sidebar-heading flex justify-center items-center text-2xl">
          Beats
        </h3>
        <ul className="sidebar-links rounded-xl">
          {routes.map((item, idx) => {
            const { title, path, Icon } = item
            return (
              <li key={title}>
                <NavLink
                  className="sidebar-rainbow link flex border-r-4 border-transparent  items-center gap-2 p-5 transition-all hover:border-r-4 hover:border-indigo-950 hover:text-blue-950 hover:bg-gray-50 text-blue-900"
                  to={path}
                >
                  <div>
                    <Icon className="text-2xl link-icon transition-all " />
                  </div>
                  <span className="text-xs link-text transition-all ">
                    {title}
                  </span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
