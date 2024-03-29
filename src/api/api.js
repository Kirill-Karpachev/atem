import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "99834798-6d3b-41d8-80dc-f22134f354a9"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(usersId) {
    return instance.post(`follow/${usersId}`)
  },
  unfollow(usersId) {
    return instance.delete(`follow/${usersId}`)
  },
};