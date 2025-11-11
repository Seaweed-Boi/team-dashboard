import { Users, ArrowRight, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TeamCard({ team, isOwner = false }) {
  const memberCount = team.members?.length || 0
  const proposalCount = team.proposals?.length || 0

  return (
    <div className="card-glass card-animation hover:shadow-glow-lg group overflow-hidden">
      {/* Header with gradient background */}
      <div
        className="h-24 rounded-lg mb-4 bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-dark/40" />
        </div>
        <Users size={40} className="text-primary relative z-10" />
      </div>

      {/* Team Info */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
            {team.name}
          </h3>
          {isOwner && (
            <button className="btn-icon">
              <Settings size={18} />
            </button>
          )}
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">
          {team.description || 'No description provided'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-dark-tertiary/50 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{memberCount}</p>
          <p className="text-xs text-gray-400">Members</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">{proposalCount}</p>
          <p className="text-xs text-gray-400">Proposals</p>
        </div>
      </div>

      {/* Action Button */}
      <Link
        to={`/team-board?teamId=${team.id}`}
        className="w-full btn-primary flex items-center justify-center gap-2 group/btn"
      >
        View Team
        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
