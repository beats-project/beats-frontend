import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'

const getData = state => state

const Profile = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Profile'))
  }, [])
  return (
    <>
      <h1>Profile</h1>
    </>
  )
}

export default Profile
