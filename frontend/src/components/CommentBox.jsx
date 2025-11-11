import { useState } from 'react'
import { Send, Trash2 } from 'lucide-react'
import { formatTimeAgo } from '../utils/formatDate'

export default function CommentBox({ comments = [], onAddComment, onDeleteComment, isLoading = false }) {
  const [commentText, setCommentText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (commentText.trim()) {
      onAddComment && onAddComment(commentText)
      setCommentText('')
    }
  }

  return (
    <div className="card-glass">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-3">
          <img
            src="https://ui-avatars.com/api/?name=User&background=00BFFF&color=000"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts..."
              className="input-glass w-full resize-none"
              rows="3"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                disabled={!commentText.trim() || isLoading}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 pb-4 border-b border-primary/10 last:border-b-0">
              <img
                src={`https://ui-avatars.com/api/?name=${comment.author?.name || 'User'}&background=00BFFF&color=000`}
                alt={comment.author?.name}
                className="w-9 h-9 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-white text-sm">
                    {comment.author?.name || 'Anonymous'}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatTimeAgo(comment.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-300 mb-2">{comment.text}</p>
                {/* Delete button can be shown if user is comment author */}
                <button
                  onClick={() => onDeleteComment && onDeleteComment(comment.id)}
                  className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
