import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle,
} from 'lucide-react'
import { useAuth } from '../hooks/userAuth'
import Loader from '../components/Loader'
import TeamCard from '../components/TeamCard'
import ProposalCard from '../components/ProposalCard'

export default function Dashboard() {
  const { user, loading: authLoading } = useAuth()
  const [teams, setTeams] = useState([])
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateTeam, setShowCreateTeam] = useState(false)

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setTeams([
        {
          id: 1,
          name: 'Marketing Team',
          description: 'Q4 campaign planning and strategy',
          members: [{ id: 1 }, { id: 2 }, { id: 3 }],
          proposals: [{ id: 1 }, { id: 2 }],
        },
        {
          id: 2,
          name: 'Product Team',
          description: 'New feature development and roadmap',
          members: [{ id: 1 }, { id: 4 }, { id: 5 }],
          proposals: [{ id: 3 }],
        },
        {
          id: 3,
          name: 'Engineering',
          description: 'Infrastructure and technical decisions',
          members: [{ id: 2 }, { id: 6 }, { id: 7 }],
          proposals: [{ id: 4 }, { id: 5 }, { id: 6 }],
        },
      ])

      setProposals([
        {
          id: 1,
          title: 'Adopt React 18 for all projects',
          description:
            'Migrate all existing projects to React 18 for better performance and features',
          author: { id: 1, name: 'John Doe' },
          status: 'Open',
          category: 'Technical',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
            { id: 3, type: 'upvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 2,
          title: 'Implement dark mode by default',
          description: 'Make dark mode the default theme for all new users',
          author: { id: 2, name: 'Jane Smith' },
          status: 'In Progress',
          category: 'Design',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'downvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          id: 3,
          title: 'Restructure database schema',
          description:
            'Optimize database structure for better query performance',
          author: { id: 3, name: 'Mike Johnson' },
          status: 'Closed',
          category: 'Backend',
          votes: [
            { id: 1, type: 'upvote' },
            { id: 2, type: 'upvote' },
            { id: 3, type: 'upvote' },
            { id: 4, type: 'upvote' },
          ],
          comments: [],
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ])

      setLoading(false)
    }, 500)
  }, [])

  if (authLoading || loading) {
    return <Loader message="Loading your dashboard..." />
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-dark-bg">
      <div className="section-container">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-400">
                Here's what's happening with your teams today
              </p>
            </div>
            <button
              onClick={() => setShowCreateTeam(!showCreateTeam)}
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <Plus size={20} />
              Create Team
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, label: 'Teams', value: teams.length, color: 'text-blue-400' },
            {
              icon: TrendingUp,
              label: 'Active Proposals',
              value: proposals.filter(p => p.status === 'Open').length,
              color: 'text-green-400',
            },
            {
              icon: Clock,
              label: 'In Progress',
              value: proposals.filter(p => p.status === 'In Progress').length,
              color: 'text-yellow-400',
            },
            {
              icon: CheckCircle,
              label: 'Completed',
              value: proposals.filter(p => p.status === 'Closed').length,
              color: 'text-green-500',
            },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="card-glass"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <Icon size={32} className={`${stat.color} opacity-80`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Create Team Modal */}
        {showCreateTeam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 card-glass border-2 border-primary/30"
          >
            <h2 className="text-xl font-bold text-white mb-4">Create New Team</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Team Name
                </label>
                <input
                  type="text"
                  placeholder="Enter team name"
                  className="input-glass w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Description
                </label>
                <textarea
                  placeholder="What is this team about?"
                  className="input-glass w-full resize-none"
                  rows="3"
                />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary flex-1">
                  Create Team
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateTeam(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Teams Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <LayoutDashboard size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-white">Your Teams</h2>
          </div>
          {teams.length === 0 ? (
            <div className="card-glass text-center py-12">
              <p className="text-gray-400 mb-4">No teams yet. Create one to get started!</p>
              <button className="btn-primary inline-flex items-center gap-2">
                <Plus size={20} />
                Create Your First Team
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                >
                  <TeamCard team={team} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Recent Proposals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-white">Recent Proposals</h2>
          </div>
          {proposals.length === 0 ? (
            <div className="card-glass text-center py-12">
              <p className="text-gray-400">
                No proposals yet. Start by creating a proposal in your team!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {proposals.map((proposal, index) => (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <ProposalCard
                    proposal={proposal}
                    onVote={(id, type) => console.log('Vote:', id, type)}
                    onComment={(id) => console.log('Comment:', id)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
