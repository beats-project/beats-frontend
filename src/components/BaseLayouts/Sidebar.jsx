import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import appLogo from '../../assets/react-logo1.svg'

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container flex flex-col justify-between">
        <h3 className="sidebar-heading flex flex-col justify-center items-center text-2x">
          <NavLink to="/" className="app-logo">
            <img src={appLogo} alt="App Logo" width={30} />
          </NavLink>
          <span className="text-2xl app-title">Beats</span>
        </h3>
        <ul className="sidebar-links rounded-xl">
          {routes.map((item, idx) => {
            const { title, path, Icon, color } = item
            return (
              <li key={idx} className='li-link'>
                <NavLink
                  className="sidebar-rainbow link flex border-r-4 border-transparent  items-center gap-2 p-5 transition-all hover:border-r-4 hover:text-blue-950 text-blue-900"
                  to={path}
                >
                  <div>
                    <Icon
                      className="text-2xl link-icon transition-all"
                      color={color}
                    />
                  </div>
                  <span className="text-xs transition-all">
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
