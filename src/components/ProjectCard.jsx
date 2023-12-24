import classNames from 'classnames'
import Card from './Card'

const ProjectCard = ({ project }) => {
  return (
    <Card className="card !px-6 hover:scale-105 transition-all ease-in-out duration-200">
      <div>
        <span className="text-sm text-gray-500">{'1 Jan 2020'}</span>
      </div>
      <div className="mb-6">
        <span className="text-2xl text-gray-800">{'Todo App'}</span>
      </div>
      {/* <div className="mb-2">
        <span className="text-gray-400">{'20%'} completed</span>
      </div> */}
      <div>
        <div className="w-full h-2 bg-violet-200 rounded-full mb-2">
          <div
            className={classNames(
              'h-full text-center text-xs text-white bg-green-600 rounded-full',
            )}
            style={{ width: `20%` }}
          ></div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-600 font-semibold hover:text-white">{'20'}%</span>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
