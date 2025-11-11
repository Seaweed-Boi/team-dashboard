import axiosInstance from './axios'

export const teamAPI = {
  getAll: (filters = {}) =>
    axiosInstance.get('/teams', { params: filters }),

  getById: (id) =>
    axiosInstance.get(`/teams/${id}`),

  create: (teamData) =>
    axiosInstance.post('/teams', teamData),

  update: (id, teamData) =>
    axiosInstance.put(`/teams/${id}`, teamData),

  delete: (id) =>
    axiosInstance.delete(`/teams/${id}`),

  getMembers: (teamId) =>
    axiosInstance.get(`/teams/${teamId}/members`),

  addMember: (teamId, memberId) =>
    axiosInstance.post(`/teams/${teamId}/members`, { memberId }),

  removeMember: (teamId, memberId) =>
    axiosInstance.delete(`/teams/${teamId}/members/${memberId}`),

  getProposals: (teamId) =>
    axiosInstance.get(`/teams/${teamId}/proposals`),

  joinTeam: (teamId, password) =>
    axiosInstance.post(`/teams/${teamId}/join`, { password }),

  leaveTeam: (teamId) =>
    axiosInstance.post(`/teams/${teamId}/leave`),
}
