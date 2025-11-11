import axiosInstance from './axios'

export const proposalAPI = {
  getAll: (filters = {}) =>
    axiosInstance.get('/proposals', { params: filters }),

  getById: (id) =>
    axiosInstance.get(`/proposals/${id}`),

  create: (proposalData) =>
    axiosInstance.post('/proposals', proposalData),

  update: (id, proposalData) =>
    axiosInstance.put(`/proposals/${id}`, proposalData),

  delete: (id) =>
    axiosInstance.delete(`/proposals/${id}`),

  vote: (proposalId, voteData) =>
    axiosInstance.post(`/proposals/${proposalId}/vote`, voteData),

  addComment: (proposalId, comment) =>
    axiosInstance.post(`/proposals/${proposalId}/comments`, { text: comment }),

  getComments: (proposalId) =>
    axiosInstance.get(`/proposals/${proposalId}/comments`),

  deleteComment: (proposalId, commentId) =>
    axiosInstance.delete(`/proposals/${proposalId}/comments/${commentId}`),
}
