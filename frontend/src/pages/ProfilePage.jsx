import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, Save, Edit2, Camera } from 'lucide-react'
import Loader from '../components/Loader'
import { useAuth } from '../hooks/userAuth'

export default function ProfilePage() {
  const { user, loading, updateUserProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
  })

  if (loading) {
    return <Loader message="Loading profile..." />
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    await updateUserProfile(formData)
    setIsSaving(false)
    setIsEditing(false)
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
          <h1 className="text-4xl font-bold text-white mb-2">Profile</h1>
          <p className="text-gray-400">Manage your account settings and information</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="card-glass text-center">
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=00BFFF&color=000&size=128`}
                  alt={user?.name}
                  className="w-24 h-24 rounded-full"
                />
                <button className="absolute bottom-0 right-0 btn-icon bg-primary text-dark-bg">
                  <Camera size={18} />
                </button>
              </div>

              {/* User Info */}
              <h2 className="text-2xl font-bold text-white mb-1">{user?.name}</h2>
              <p className="text-primary mb-4">{user?.email}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-primary/20">
                <div>
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-gray-400">Teams</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">48</p>
                  <p className="text-xs text-gray-400">Proposals</p>
                </div>
              </div>

              {/* Member Since */}
              <p className="text-sm text-gray-400">
                Member since January 2024
              </p>
            </div>

            {/* Activity Card */}
            <div className="card-glass mt-6">
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: 'Voted on proposal', time: '2 hours ago' },
                  { action: 'Created new team', time: '1 day ago' },
                  { action: 'Added comment', time: '3 days ago' },
                  { action: 'Joined team', time: '1 week ago' },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm pb-3 border-b border-primary/10 last:border-b-0"
                  >
                    <span className="text-gray-300">{activity.action}</span>
                    <span className="text-gray-500 text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Edit Profile Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card-glass">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Account Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Edit2 size={18} />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-3 text-primary" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`input-glass w-full pl-10 ${
                        !isEditing ? 'bg-dark-secondary/20 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-3 text-primary" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`input-glass w-full pl-10 ${
                        !isEditing ? 'bg-dark-secondary/20 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-3 text-primary" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder="Add your phone number"
                      className={`input-glass w-full pl-10 ${
                        !isEditing ? 'bg-dark-secondary/20 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-3 text-primary" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder="Add your location"
                      className={`input-glass w-full pl-10 ${
                        !isEditing ? 'bg-dark-secondary/20 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Tell us about yourself..."
                    rows="4"
                    className={`input-glass w-full ${
                      !isEditing ? 'bg-dark-secondary/20 cursor-not-allowed' : ''
                    }`}
                  />
                </div>

                {/* Action Buttons */}
                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={isSaving}
                      className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Save size={18} />
                      {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="btn-secondary flex-1"
                    >
                      Discard
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Additional Sections */}
            <div className="mt-8 space-y-6">
              {/* Password */}
              <div className="card-glass">
                <h3 className="text-lg font-bold text-white mb-4">Security</h3>
                <button className="btn-secondary w-full text-left">
                  Change Password
                </button>
              </div>

              {/* Preferences */}
              <div className="card-glass">
                <h3 className="text-lg font-bold text-white mb-4">Preferences</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    <span className="text-gray-300">Email notifications</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    <span className="text-gray-300">Proposal reminders</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-gray-300">Marketing emails</span>
                  </label>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="card-glass border-2 border-red-500/30">
                <h3 className="text-lg font-bold text-red-400 mb-4">Danger Zone</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="btn-secondary text-red-400 border-red-500/50 hover:bg-red-500/20 w-full">
                  Delete Account
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
