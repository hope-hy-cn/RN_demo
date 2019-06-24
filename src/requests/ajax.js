class Ajax {
  get(url) {
    return fetch(url)
      .then(resp => resp.json())
  }
}
export default new Ajax()