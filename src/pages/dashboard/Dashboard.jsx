import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard'
import { refreshToken } from '../../redux/actions/auth.action'
import { getAllProjects } from '../../redux/reducers/project.reducer'
import DataLoader from '../../components/DataLoader'
import autoAnimate from '@formkit/auto-animate'
import { clearProjects } from '../../redux/actions/project.action'
import NoDataFound from '../../components/BaseLayouts/NoDataFound'

const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const dashboardRef = useRef(null)
  const dispatch = useDispatch()
  const projectsList = useSelector(getAllProjects)

  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    dashboardRef.current && autoAnimate(dashboardRef.current)
  }, [dashboardRef])

  useEffect(() => {
    setLoading(true)
    dispatch(setPageHeading('Dashboard'))
    setTimeout(() => {
      dispatch(refreshToken(setLoading))
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    setProjects(projectsList)
  }, [projectsList])

  useEffect(() => {
    return () => {
      dispatch(clearProjects())
    }
  }, [])

  return (
    <>
      <div className="dashboard-container rounded-xl">
        <p className="text-2xl font-semibold text-white">My Projects</p>
        <div
          className="projects-list flex flex-2 grow items-around flex-wrap mt-3 -m-3"
          ref={dashboardRef}
        >
          {isLoading ? <DataLoader /> : <></>}
          {projects.length == 0
            ? // <DataLoader />
              !isLoading && <NoDataFound />
            : projects.map((proj, idx) => (
                <div className="w-1/3 p-3" key={idx}>
                  <NavLink to="/sb">
                    <ProjectCard project={proj} />
                  </NavLink>
                </div>
              ))}
        </div>
      </div>
      {/* <div
        style={{
          height: '300px',
        }}
        className="mt-8 bg-gradient-to-r from-blue-950 to-indigo-950 rounded-lg"
      ></div> */}
    </>
  )
}

export default Dashboard
