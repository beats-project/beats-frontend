import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'

const getData = state => state

const Dashboard = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Dashboard'))
  }, [])
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
