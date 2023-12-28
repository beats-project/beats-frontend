import classNames from 'classnames'
import Card from './Card'
import { BsCalendar2Date } from 'react-icons/bs'
import { GoProject } from 'react-icons/go'
import { AiOutlineProject } from 'react-icons/ai'

const colors = [
  '#FF6633',

  // '#FF33FF',

  '#00B3E6',
  '#E6B333',
  '#3366E6',

  '#B34D4D',

  '#6680B3',

  '#FF1A66',
  '#E6331A',

  '#B33300',

  // '#991AFF',

  '#1AB399',
  // '#E666B3',
  '#33991A',

  '#4D8066',

  '#FF3380',

  // '#4D80CC',
  // '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',

  // '#6666FF',
]

const ProjectCard = ({ project }) => {
  const iconStyle = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    padding: '8px',
    borderRadius: '50%',
    color: 'white',
  }

  return (
    <Card className="project-card !px-6 hover:scale-105 transition-all ease-in-out duration-200">
      <div className="flex gap-2">
        <BsCalendar2Date color="rgb(109 99 99)" />
        <span className="project-date text-sm text-gray-500">
          {'1 Jan 2020'}
        </span>
      </div>
      <div className="mb2 flex justify-between items-center">
        <span className="project-name text-2xl text-gray-800 ">
          {project.name}
        </span>
        <AiOutlineProject style={iconStyle} size={'3em'} />
      </div>
      <div className="mb-2">
        <span className="text-gray-400">
          {completedRatio(project.tasks)} Completed
        </span>
      </div>
      <div>
        <div className="w-full h-2 bg-violet-200 border-x border-y rounded-full mb-2">
          <div
            className={classNames(
              'h-full text-center text-xs text-white bg-green-600 rounded-full',
            )}
            style={{ width: completedPercentage(project.tasks) + '%' }}
          ></div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600 font-semibold">
            {completedPercentage(project.tasks)}%
          </span>
          <span className="text-sm font-normal ml-2 text-gray-600">Done</span>
        </div>
      </div>
    </Card>
  )
}

const findCompletedTasks = tasks => {
  let newArray = tasks?.filter(function (el) {
    return el.status == 'COMPLETED'
  })
  return newArray.length
}

const completedRatio = tasks => {
  const newLength = findCompletedTasks(tasks)
  const ratio = newLength + ' / ' + tasks.length
  return <span>{ratio}</span>
}

const completedPercentage = tasks => {
  const newLength = findCompletedTasks(tasks)
  if (newLength > 0) {
    return (newLength / tasks.length) * 100
  } else return 0
}

export default ProjectCard
