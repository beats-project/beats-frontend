class Client {
  constructor(instance) {
    this.instance = instance
  }
  get(URL, payload) {
    return this.instance.get(`/${URL}`, payload)
  }

  post(URL, payload) {
    return this.instance.post(`/${URL}`, payload)
  }
  patch(URL, payload) {
    return this.instance.patch(`/${URL}`, payload)
  }

  delete(URL) {
    return this.instance.delete(`/${URL}`)
  }
}

export default Client
