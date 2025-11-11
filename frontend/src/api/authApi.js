import axiosInstance from './axios'

export const authAPI = {
  login: (email, password) =>
    axiosInstance.post('/auth/login', { email, password }),

  register: (userData) =>
    axiosInstance.post('/auth/register', userData),

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  getProfile: () =>
    axiosInstance.get('/auth/profile'),

  updateProfile: (userData) =>
    axiosInstance.put('/auth/profile', userData),

  refreshToken: () =>
    axiosInstance.post('/auth/refresh-token'),
}
