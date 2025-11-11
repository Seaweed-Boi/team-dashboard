export const formatDate = (dateString) => {
  if (!dateString) return ''

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }

  return new Date(dateString).toLocaleDateString('en-US', options)
}

export const formatDateShort = (dateString) => {
  if (!dateString) return ''

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return new Date(dateString).toLocaleDateString('en-US', options)
}

export const formatTimeAgo = (dateString) => {
  if (!dateString) return ''

  const now = new Date()
  const date = new Date(dateString)
  const secondsAgo = Math.floor((now - date) / 1000)

  if (secondsAgo < 60) {
    return 'just now'
  }

  const minutesAgo = Math.floor(secondsAgo / 60)
  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`
  }

  const hoursAgo = Math.floor(minutesAgo / 60)
  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`
  }

  const daysAgo = Math.floor(hoursAgo / 24)
  if (daysAgo < 7) {
    return `${daysAgo}d ago`
  }

  return formatDateShort(dateString)
}

export const getDateRange = (days) => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  return {
    start: startDate.toISOString(),
    end: endDate.toISOString(),
  }
}
