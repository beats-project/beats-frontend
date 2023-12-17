import { useDispatch, useSelector } from 'react-redux'
import { setPageHeading } from '../../redux/actions'
import { useEffect } from 'react'

const getData = state => state

const Calender = () => {
  const dispatch = useDispatch()
  const data = useSelector(getData)

  useEffect(() => {
    dispatch(setPageHeading('Calender'))
  }, [])
  return (
    <>
      <h1>Calender</h1>
    </>
  )
}

export default Calender
