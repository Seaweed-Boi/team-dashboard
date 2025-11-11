import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Plus,
  Users,
  Filter,
  Settings,
  X,
} from 'lucide-react'
import Loader from '../components/Loader'
import ProposalCard from '../components/ProposalCard'
import CommentBox from '../components/CommentBox'

export default function TeamBoard() {
  const [teamData, setTeamData] = useState(null)
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeProposal, setActiveProposal] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Simulate fetching team data
    setTimeout(() => {
      setTeamData({
        id: 1,
        name: 'Engineering Team',
        description: 'Technical decisions and architecture',
        members: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          { id: 3, name: 'Mike Johnson' },
        ],
      })

      setProposals([
        {
          id: 1,
          title: 'Migrate to TypeScript',
          description:
            'Convert all JavaScript files to TypeScript for better type safety and developer experience',
          author: { id: 1, name: 'John Doe' },
          status: 'Open',
          category: 'Backend',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
            { id: 3, type: 'upvote' },
          ],
          comments: [
            {
              id: 1,
              text: 'Great idea! This will improve code quality significantly.',
              author: { id: 2, name: 'Jane Smith' },
              createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            },
            {
              id: 2,
              text: 'What about the learning curve for junior developers?',
              author: { id: 3, name: 'Mike Johnson' },
              createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
            },
          ],
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 2,
          title: 'Implement automated testing',
          description:
            'Set up Jest and Cypress for unit and e2e testing across all projects',
          author: { id: 2, name: 'Jane Smith' },
          status: 'In Progress',
          category: 'DevOps',
          votes: [{ id: 1, type: 'upvote' }, { id: 2, type: 'upvote' }],
          comments: [],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 3,
          title: 'Upgrade PostgreSQL to version 15',
          description: 'Move our database to the latest PostgreSQL version for performance improvements',
          author: { id: 3, name: 'Mike Johnson' },
          status: 'Open',
          category: 'Backend',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 4,
          title: 'Adopt GraphQL for API',
          description: 'Replace REST API with GraphQL for better query efficiency',
          author: { id: 1, name: 'John Doe' },
          status: 'Closed',
          category: 'Backend',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
            { id: 3, type: 'upvote' },
            { id: 4, type: 'upvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ])

      setLoading(false)
    }, 500)
  }, [])

  const filteredProposals = proposals.filter((proposal) => {
    const matchesFilter = filter === 'all' || proposal.status.toLowerCase() === filter
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  if (loading) {
    return <Loader message="Loading team board..." />
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-dark-bg">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{teamData?.name}</h1>
              <p className="text-gray-400">{teamData?.description}</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus size={20} />
              New Proposal
            </button>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-glass">
              <p className="text-gray-400 text-sm mb-1">Members</p>
              <p className="text-2xl font-bold text-primary">
                {teamData?.members?.length || 0}
              </p>
            </div>
            <div className="card-glass">
              <p className="text-gray-400 text-sm mb-1">Total Proposals</p>
              <p className="text-2xl font-bold text-primary">{proposals.length}</p>
            </div>
            <div className="card-glass">
              <p className="text-gray-400 text-sm mb-1">Open</p>
              <p className="text-2xl font-bold text-blue-400">
                {proposals.filter(p => p.status === 'Open').length}
              </p>
            </div>
            <div className="card-glass">
              <p className="text-gray-400 text-sm mb-1">Members</p>
              <button className="btn-secondary w-full flex items-center justify-center gap-2 text-sm">
                <Users size={16} />
                View
              </button>
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glass mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <input
              type="text"
              placeholder="Search proposals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-glass flex-1"
            />

            {/* Filter */}
            <div className="flex gap-2">
              {['all', 'open', 'in progress', 'closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize ${
                    filter === status
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Settings */}
            <button className="btn-secondary p-2">
              <Settings size={20} />
            </button>
          </div>
        </motion.div>

        {/* Proposals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredProposals.length === 0 ? (
            <div className="card-glass text-center py-16">
              <MessageCircle size={48} className="mx-auto text-gray-500 mb-4" />
              <p className="text-gray-400 mb-4">
                {searchTerm ? 'No proposals match your search' : 'No proposals yet'}
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus size={20} />
                Create First Proposal
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProposals.map((proposal, index) => (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                  onClick={() => {
                    setActiveProposal(proposal)
                    setShowCommentModal(true)
                  }}
                  className="cursor-pointer"
                >
                  <ProposalCard
                    proposal={proposal}
                    onVote={(id, type) => console.log('Vote:', id, type)}
                    onComment={() => {
                      setActiveProposal(proposal)
                      setShowCommentModal(true)
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Create Proposal Modal */}
      {showCreateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 pt-20 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-secondary border border-primary/20 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Proposal</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="btn-icon"
              >
                <X size={24} />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Proposal Title
                </label>
                <input
                  type="text"
                  placeholder="What's your proposal?"
                  className="input-glass w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe your proposal in detail..."
                  className="input-glass w-full resize-none"
                  rows="6"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Category
                  </label>
                  <select className="input-glass w-full">
                    <option>Backend</option>
                    <option>Frontend</option>
                    <option>DevOps</option>
                    <option>Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Priority
                  </label>
                  <select className="input-glass w-full">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary flex-1">
                  Create Proposal
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Comments Modal */}
      {showCommentModal && activeProposal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 pt-20 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-secondary border border-primary/20 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {activeProposal.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  by {activeProposal.author?.name}
                </p>
              </div>
              <button
                onClick={() => setShowCommentModal(false)}
                className="btn-icon"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 pb-6 border-b border-primary/20">
              <p className="text-gray-300">{activeProposal.description}</p>
              <div className="mt-4 flex gap-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                  {activeProposal.status}
                </span>
                <span className="px-3 py-1 bg-primary-dark/20 text-primary-dark rounded-full text-xs font-semibold">
                  {activeProposal.category}
                </span>
              </div>
            </div>

            <CommentBox
              comments={activeProposal.comments}
              onAddComment={(text) =>
                console.log('Adding comment:', text)
              }
              onDeleteComment={(id) => console.log('Deleting comment:', id)}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
