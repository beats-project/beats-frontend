import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard'

const getData = state => state

const Dashboard = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)
  const projects = [1, 2, 3]
  useEffect(() => {
    dispatch(setPageHeading('Dashboard'))
  }, [])
  return (
    <>
      <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
        {projects.map((project, idx) => (
          <div className="w-1/3 p-3" key={idx}>
            <Link href="/sb">
              <ProjectCard project={'hj'} />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard
