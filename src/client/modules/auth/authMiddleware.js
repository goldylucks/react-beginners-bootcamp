import { LOGIN_SUCCESS, syncUserFromLs } from './authActions'

const authMiddleware = store => next => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('user', JSON.stringify({
      name: action.payload,
    }))
  }

  if (action.type === 'INIT_APP') {
    const user = localStorage.getItem('user')
    if (user) {
      store.dispatch(syncUserFromLs(JSON.parse(user)))
    }
  }

  next(action)
}

export default authMiddleware
