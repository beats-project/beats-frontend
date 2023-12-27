import Client from '../axios/api'

import { axiosPublic } from '../axios/axiosPublic'
import axiosPrivate from '../axios/axiosPrivate'

const URL_PREFIX = 'projects'

class ProjectService {
  constructor(isPrivate) {
    if (isPrivate == true) {
      this.client = new Client(axiosPrivate)
    } else this.client = new Client(axiosPublic)
  }
  getAllProjects() {
    return this.client.get(URL_PREFIX)
  }
}

export default ProjectService
