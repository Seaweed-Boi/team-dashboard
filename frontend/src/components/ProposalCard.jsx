import { ThumbsUp, ThumbsDown, MessageCircle, MoreVertical } from 'lucide-react'
import { formatTimeAgo } from '../utils/formatDate'
import { useState } from 'react'

export default function ProposalCard({ proposal, onVote, onComment }) {
  const [showOptions, setShowOptions] = useState(false)

  const upvotes = proposal.votes?.filter(v => v.type === 'upvote').length || 0
  const downvotes = proposal.votes?.filter(v => v.type === 'downvote').length || 0
  const comments = proposal.comments?.length || 0

  return (
    <div className="card-glass card-animation hover:shadow-glow-lg group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
            {proposal.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            by {proposal.author?.name || 'Unknown'} • {formatTimeAgo(proposal.createdAt)}
          </p>
        </div>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="btn-icon relative"
        >
          <MoreVertical size={20} />
          {showOptions && (
            <div className="absolute right-0 mt-2 w-40 bg-dark-secondary border border-primary/20 rounded-lg shadow-lg z-10">
              <button className="w-full text-left px-4 py-2 hover:bg-dark-tertiary transition-colors">
                Edit
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-dark-tertiary transition-colors text-red-400">
                Delete
              </button>
            </div>
          )}
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp-3">
        {proposal.description}
      </p>

      {/* Status Badge */}
      <div className="mb-4 flex gap-2">
        <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
          {proposal.status || 'Open'}
        </span>
        {proposal.category && (
          <span className="inline-block px-3 py-1 bg-primary-dark/20 text-primary-dark rounded-full text-xs font-semibold">
            {proposal.category}
          </span>
        )}
      </div>

      {/* Actions Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-primary/10">
        <div className="flex gap-4">
          <button
            onClick={() => onVote && onVote(proposal.id, 'upvote')}
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group/btn"
          >
            <ThumbsUp size={18} className="group-hover/btn:fill-current" />
            <span className="text-sm">{upvotes}</span>
          </button>

          <button
            onClick={() => onVote && onVote(proposal.id, 'downvote')}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors group/btn"
          >
            <ThumbsDown size={18} className="group-hover/btn:fill-current" />
            <span className="text-sm">{downvotes}</span>
          </button>

          <button
            onClick={() => onComment && onComment(proposal.id)}
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-sm">{comments}</span>
          </button>
        </div>

        <button className="text-primary hover:text-primary-dark transition-colors text-sm font-semibold">
          View Details →
        </button>
      </div>
    </div>
  )
}
