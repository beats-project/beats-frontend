import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'

const getData = state => state

const Teams = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Teams'))
  }, [])
  return (
    <>
      <h1>Teams</h1>
    </>
  )
}

export default Teams
