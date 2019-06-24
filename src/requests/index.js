import ajax from './ajax'

export const getPosts = () => {
  return ajax.get('http://jsonplaceholder.typicode.com/posts')
}
export const getPost = (id) => {
  return ajax.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
}