import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard'
import { refreshToken } from '../../redux/actions/auth.action'

const getData = state => state

const Dashboard = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)
  const projects = [1, 2, 3]
  useEffect(() => {
    dispatch(setPageHeading('Dashboard'))
    dispatch(refreshToken())
  }, [])
  return (
    <>
      <div className="dashboard-container p-4 rounded-xl">
        <p className="text-2xl font-semibold text-white">My Projects</p>
        <div className="projects-list flex flex-2 grow items-center flex-wrap mt-3 -m-3">
          {projects.map((project, idx) => (
            <div className="w-1/3 p-3" key={idx}>
              <Link href="/sb">
                <ProjectCard project={'hj'} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard
