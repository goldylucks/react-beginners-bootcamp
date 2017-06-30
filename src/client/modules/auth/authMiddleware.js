import { LOGIN } from './authActions'

const authMiddleware = store => next => action => {
  if (action.type === LOGIN) {
    localStorage.setItem('user', JSON.stringify({
      name: action.payload,
    }))
  }
}

export default authMiddleware
