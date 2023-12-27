import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import appLogo from '../../assets/react-logo1.svg'

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container flex flex-col justify-evenly">
        <h3 className="sidebar-heading flex flex-col justify-center items-center text-2x">
          <NavLink to="/" className="app-logo">
            <img src={appLogo} alt="App Logo" width={50} />
          </NavLink>
          <span className="text-4xl app-title">Beats</span>
        </h3>
        <ul className="sidebar-links rounded-xl">
          {routes.map((item, idx) => {
            const { title, path, Icon, color } = item
            return (
              <li key={idx} className="li-link">
                <NavLink
                  className="sidebar-rainbow flex items-center gap-2 p-5 transition-all hover:text-blue-950 text-blue-900"
                  to={path}
                >
                  <div>
                    <Icon
                      className="sidebar-icon text-2xl link-icon transition-all"
                      color={color}
                    />
                  </div>
                  <span className="sidebar-text text-xs transition-all">
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
