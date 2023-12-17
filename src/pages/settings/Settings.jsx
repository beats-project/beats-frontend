import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'

const getData = state => state

const Settings = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Settings'))
  }, [])
  return (
    <>
      <h1>Settings</h1>
    </>
  )
}

export default Settings
