import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Plus,
  Filter,
  Search,
} from 'lucide-react'
import Loader from '../components/Loader'
import ProposalCard from '../components/ProposalCard'

export default function ProposalPage() {
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('recent')

  useEffect(() => {
    // Simulate fetching all proposals
    setTimeout(() => {
      setProposals([
        {
          id: 1,
          title: 'Adopt React 18 for all projects',
          description:
            'Migrate all existing projects to React 18 for better performance and features. This will include updating dependencies and refactoring components.',
          author: { id: 1, name: 'John Doe' },
          status: 'Open',
          category: 'Frontend',
          teamName: 'Engineering',
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
          ],
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 2,
          title: 'Implement dark mode by default',
          description:
            'Make dark mode the default theme for all new users. Improve visual hierarchy and reduce eye strain.',
          author: { id: 2, name: 'Jane Smith' },
          status: 'In Progress',
          category: 'Design',
          teamName: 'Product',
          votes: [{ id: 1, type: 'upvote' }, { id: 2, type: 'downvote' }],
          comments: [],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 3,
          title: 'Restructure database schema',
          description:
            'Optimize database structure for better query performance and data integrity. Includes migration scripts.',
          author: { id: 3, name: 'Mike Johnson' },
          status: 'Closed',
          category: 'Backend',
          teamName: 'Engineering',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
            { id: 3, type: 'upvote' },
            { id: 4, type: 'upvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 4,
          title: 'Set up continuous deployment',
          description:
            'Automate deployment pipeline with GitHub Actions. Deploy on every successful merge to main branch.',
          author: { id: 1, name: 'John Doe' },
          status: 'Open',
          category: 'DevOps',
          teamName: 'Engineering',
          votes: [{ id: 1, type: 'upvote' }, { id: 2, type: 'upvote' }],
          comments: [],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 5,
          title: 'Add unit tests for auth module',
          description:
            'Improve code coverage by adding comprehensive unit tests for authentication module. Target 90% coverage.',
          author: { id: 2, name: 'Jane Smith' },
          status: 'Open',
          category: 'Testing',
          teamName: 'QA',
          votes: [{ id: 1, type: 'upvote' }, { id: 2, type: 'upvote' }],
          comments: [],
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 6,
          title: 'Upgrade PostgreSQL to version 15',
          description:
            'Move our database to the latest PostgreSQL version for performance improvements and new features.',
          author: { id: 3, name: 'Mike Johnson' },
          status: 'In Progress',
          category: 'Backend',
          teamName: 'Infrastructure',
          votes: [{ id: 1, type: 'upvote' }, { id: 2, type: 'upvote' }],
          comments: [],
          createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ])

      setLoading(false)
    }, 500)
  }, [])

  const filteredAndSorted = proposals
    .filter((proposal) => {
      const matchesFilter = filter === 'all' || proposal.status.toLowerCase() === filter
      const matchesSearch =
        proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proposal.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesFilter && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.createdAt) - new Date(a.createdAt)
        case 'popular':
          return b.votes.filter(v => v.type === 'upvote').length -
            a.votes.filter(v => v.type === 'upvote').length
        case 'comments':
          return b.comments.length - a.comments.length
        default:
          return 0
      }
    })

  const stats = {
    total: proposals.length,
    open: proposals.filter(p => p.status === 'Open').length,
    inProgress: proposals.filter(p => p.status === 'In Progress').length,
    closed: proposals.filter(p => p.status === 'Closed').length,
  }

  if (loading) {
    return <Loader message="Loading proposals..." />
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-dark-bg">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <TrendingUp size={32} className="text-primary" />
                All Proposals
              </h1>
              <p className="text-gray-400">
                Browse and vote on proposals across all teams
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total', value: stats.total, color: 'text-blue-400' },
              { label: 'Open', value: stats.open, color: 'text-green-400' },
              { label: 'In Progress', value: stats.inProgress, color: 'text-yellow-400' },
              { label: 'Closed', value: stats.closed, color: 'text-gray-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="card-glass text-center"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glass mb-8"
        >
          <div className="space-y-4 md:space-y-0 md:flex gap-4 flex-wrap items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[250px]">
              <Search size={18} className="absolute left-3 top-3 text-primary" />
              <input
                type="text"
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-glass w-full pl-10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 flex-wrap">
              {['all', 'open', 'in progress', 'closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize text-sm ${
                    filter === status
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-glass px-4 py-2"
            >
              <option value="recent">Recent</option>
              <option value="popular">Most Upvotes</option>
              <option value="comments">Most Comments</option>
            </select>
          </div>
        </motion.div>

        {/* Proposals List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredAndSorted.length === 0 ? (
            <div className="card-glass text-center py-16">
              <TrendingUp size={48} className="mx-auto text-gray-500 mb-4" />
              <p className="text-gray-400 mb-4">
                {searchTerm
                  ? 'No proposals match your search'
                  : 'No proposals in this category'}
              </p>
              <button className="btn-primary inline-flex items-center gap-2">
                <Plus size={20} />
                Create First Proposal
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAndSorted.map((proposal, index) => (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                >
                  <ProposalCard
                    proposal={proposal}
                    onVote={(id, type) => console.log('Vote:', id, type)}
                    onComment={(id) => console.log('Comment on:', id)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Pagination */}
        {filteredAndSorted.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center gap-2"
          >
            <button className="btn-secondary px-3 py-2">← Previous</button>
            <button className="btn-primary px-3 py-2">1</button>
            <button className="btn-secondary px-3 py-2">2</button>
            <button className="btn-secondary px-3 py-2">3</button>
            <button className="btn-secondary px-3 py-2">Next →</button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
