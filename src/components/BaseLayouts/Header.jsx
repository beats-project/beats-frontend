import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { IoMdLogOut } from 'react-icons/io'
import { clientPaths } from '../../utils/constants.js'
import { logout } from '../../redux/actions/auth.action.jsx'
import { getPageHeading } from '../../redux/reducers/application.js'

// const getHeading = state => state

export const Header = () => {
  const pageHeading = useSelector(getPageHeading, shallowEqual)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const doLogout = () => {
    dispatch(logout())
    navigate(clientPaths.signinURL)
  }

  useEffect(() => {}, [pageHeading])

  return (
    <div className="navigation rounded-t-xl">
      <nav className="navbar p-0.5 flex justify-between ">
        <div className="flex justify-between items-center">
          <div className="nav-title font-semibold text-lg">{pageHeading}</div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <a onClick={doLogout} title="Logout" className="logout-btn">
            <IoMdLogOut color="black" size={20} />
            <span className="logout-btn__text text-sm ml-2">Logout</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
