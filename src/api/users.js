import axios from './config'
import jwt_decode from "jwt-decode"

export default {
  verifyUser: () => {
    const { sub } = jwt_decode(localStorage.getItem('token'))
    return axios.get(`http://localhost:3000/users/${sub}`)
  }
}
