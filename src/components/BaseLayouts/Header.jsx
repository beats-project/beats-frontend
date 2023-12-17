// import {useEffect} from 'react'
import { IoMdLogOut } from 'react-icons/io'
// import {shallowEqual, useSelector} from 'react-redux'
import Logo from '../../assets/exam-logo.svg'
// import {logout} from '../redux/actions/auth.action.jsx'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const getHeading = state => state

export const Header = () => {
  const data = useSelector(getHeading, shallowEqual)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    // dispatch(logout())
    navigate('/login')
  }

  // useEffect(() => {
  // }, [data])

  return (
    <div className="navigation rounded-t-xl border-b bg-slate-100">
      <nav className="navbar p-2 flex justify-between ">
        <div className="flex justify-between items-center">
          {/* <a href='/'>
                        <img
                            className='logo-img'
                            src={Logo}
                            alt='Beats Logo'
                            title='Beats App'
                        />
                    </a> */}
          <div className="nav-title font-semibold text-lg">
            {data.appData.pageHeading}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <a onClick={logoutHandler} title="Logout" className='logout-btn'>
            <IoMdLogOut color="white" size={20} />
            <span className="logout-btn__text text-sm ml-2">Logout</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
