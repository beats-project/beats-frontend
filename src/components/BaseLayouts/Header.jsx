import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { IoMdLogOut } from 'react-icons/io'
import { clientPaths } from '../../utils/constants.js'
import { logout } from '../../redux/actions/auth.action.jsx'
import { getPageHeading } from '../../redux/reducers/application.js'
import { getUserName } from '../../redux/reducers/auth.reducer.js'
import UserAvatar from '../../assets/female-avatar.svg'


export const Header = () => {
  const pageHeading = useSelector(getPageHeading, shallowEqual)
  const userName = useSelector(getUserName)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const doLogout = () => {
    dispatch(logout())
    navigate(clientPaths.signinURL)
  }

  useEffect(() => {}, [pageHeading])

  return (
    <div className="navigation p-4 rounded-t-xl">
      <nav className="navbar p-0.5 flex justify-between ">
        <div className="flex justify-between items-center">
          <div className="nav-title font-semibold text-xl text">
            <span>{pageHeading}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl transition-all duration-100 ease-linear">
          <p className="flex items-center gap-2 text-base">
            <img src={UserAvatar} width={40} alt="User Avatar" />
            <span>Hey {userName}</span>
          </p>
          <a onClick={doLogout} title="Logout" className="logout-btn">
            <IoMdLogOut color="white" size={20} />
            <span className="logout-btn__text text-sm ml-2">Logout</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
