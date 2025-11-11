import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap,
  Users,
  Vote,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'
import { useAuth } from '../hooks/userAuth'

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  const features = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Bring your team together to discuss and decide on important topics.',
    },
    {
      icon: Vote,
      title: 'Democratic Voting',
      description: 'Vote on proposals with upvotes and downvotes. Let the team decide.',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'See decisions unfold in real-time with live updates and discussions.',
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor proposal status and outcomes across your team projects.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="min-h-screen pt-20 bg-dark-bg">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32 relative overflow-hidden">
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="heading-gradient block">
                Team Decision Board
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Collaborate, discuss, and make decisions together. Empower your team
              with a platform built for democratic decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn-primary flex items-center justify-center gap-2">
                  Go to Dashboard
                  <ArrowRight size={20} />
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                  <Link to="/login" className="btn-secondary">
                    Already have an account?
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-gray-400">Teams Active</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-gray-400">Decisions Made</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Team Decision Board?
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Our platform is designed to make team decision-making transparent,
              fair, and efficient.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card-glass group"
                  >
                    <div className="mb-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-dark-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Create Team', desc: 'Form or join a team with your colleagues' },
                { num: '02', title: 'Propose Ideas', desc: 'Share ideas and proposals with the team' },
                { num: '03', title: 'Discuss & Vote', desc: 'Comment and vote on each proposal' },
                { num: '04', title: 'Make Decisions', desc: 'Reach consensus and implement decisions' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="card-glass text-center">
                    <div className="text-4xl font-bold text-primary mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight size={24} className="text-primary/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-dark-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Team's Decision-Making?
            </h2>
            <p className="text-gray-300 mb-8">
              Join hundreds of teams already using Team Decision Board to make
              better decisions together.
            </p>

            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-primary inline-flex items-center gap-2">
                Open Dashboard
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register" className="btn-primary flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight size={20} />
                </Link>
                <Link to="/login" className="btn-secondary">
                  Sign In
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 md:py-32 bg-dark-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Key Features
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: 'Transparent Voting System',
                  desc: 'Real-time vote tracking with upvotes and downvotes. See exactly how your team stands on each decision.',
                },
                {
                  title: 'Rich Discussions',
                  desc: 'Comment threads on every proposal. Build context and shared understanding before making decisions.',
                },
                {
                  title: 'Team Management',
                  desc: 'Create teams, invite members, and manage permissions. Full control over who participates.',
                },
                {
                  title: 'Decision History',
                  desc: 'Track all past decisions and proposals. Learn from history and reference previous choices.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start card-glass"
                >
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
