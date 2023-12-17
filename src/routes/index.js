import { lazy } from 'react'
import {
  RiSettings4Line,
  RiSettings5Fill,
  RiUserFill,
  RiUserLine,
} from 'react-icons/ri'
import { BsCalendar2Day, BsCalendar2DayFill } from 'react-icons/bs'
import {
  MdDashboard,
  MdOutlineDashboard,
  MdWorkspaces,
  MdWorkspacesOutline,
} from 'react-icons/md'

const Teams = lazy(() => import('../pages/teams/Teams.jsx'))
const Calendar = lazy(() => import('../pages/calender/Calender.jsx'))
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard.jsx'))
const Settings = lazy(() => import('../pages/settings/Settings.jsx'))
const Profile = lazy(() => import('../pages/profile/Profile.jsx'))

const coreRoutes = [
  {
    title: 'Dashboard',
    Icon: MdOutlineDashboard,
    HIcon: MdDashboard,
    path: '/',
    component: Dashboard,
  },
  {
    title: 'Teams',
    Icon: MdWorkspacesOutline,
    HIcon: MdWorkspaces,
    path: '/teams',
    component: Teams,
  },
  {
    title: 'Calender',
    Icon: BsCalendar2Day,
    HIcon: BsCalendar2DayFill,
    path: '/calender',
    component: Calendar,
  },
  {
    title: 'Settings',
    Icon: RiSettings4Line,
    HIcon: RiSettings5Fill,
    path: '/settings',
    component: Settings,
  },
  {
    title: 'Profile',
    Icon: RiUserLine,
    HIcon: RiUserFill,
    path: '/profile',
    component: Profile,
  },
]

const routes = [...coreRoutes]
export default routes
