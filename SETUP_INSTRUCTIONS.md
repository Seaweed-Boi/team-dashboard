# Team Decision Board - Setup Instructions

## 📋 Project Overview

Team Decision Board is a MERN-based collaborative decision-making platform. This repository contains the **frontend** built with React, Vite, and Tailwind CSS.

## 🎯 What's Included

✅ Complete React frontend with 7 pages
✅ Professional UI with dark theme and blue accents
✅ Responsive design for all devices
✅ Tailwind CSS styling with glassmorphism
✅ Framer Motion animations
✅ Full routing with React Router
✅ Authentication system with context
✅ API integration setup
✅ Reusable components
✅ Custom hooks and utilities

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn
- A terminal/command prompt

### Installation (5 minutes)

1. **Navigate to frontend folder**
   ```powershell
   cd c:\Users\HPSMG\Desktop\Team-Dashboard\frontend
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```

4. **Open in browser**
   Visit: `http://localhost:5173`

---

## 📁 Project Structure

```
frontend/
├── public/                    # Static assets
├── src/
│   ├── api/                  # API services
│   │   ├── authApi.js        # Authentication API calls
│   │   ├── axios.js          # Axios instance with interceptors
│   │   ├── proposalApi.js    # Proposal API calls
│   │   └── teamApi.js        # Team API calls
│   │
│   ├── components/           # Reusable React components
│   │   ├── CommentBox.jsx    # Comment section component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Loader.jsx        # Loading spinner
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── ProposalCard.jsx  # Proposal card display
│   │   └── TeamCard.jsx      # Team card display
│   │
│   ├── context/              # React Context
│   │   └── AuthContext.jsx   # Authentication context provider
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── userAuth.js       # useAuth hook
│   │
│   ├── pages/                # Page components
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── HomePage.jsx      # Landing page
│   │   ├── LoginPage.jsx     # Login form
│   │   ├── ProfilePage.jsx   # User profile
│   │   ├── ProposalPage.jsx  # All proposals
│   │   ├── RegisterPage.jsx  # Registration form
│   │   └── TeamBoard.jsx     # Team discussion board
│   │
│   ├── styles/               # CSS files
│   │   ├── indes.css         # Custom CSS and animations
│   │   └── tailwind.css      # Tailwind directives
│   │
│   ├── utils/                # Utility functions
│   │   └── formatDate.js     # Date formatting utilities
│   │
│   ├── App.jsx               # Main app component with routes
│   └── main.jsx              # Entry point
│
├── index.html                # HTML template
├── package.json              # Dependencies list
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
└── README.md                 # Full documentation
```

---

## 🎨 Design System

### Colors
- **Primary Background**: `#000000` (Black)
- **Accent Color**: `#00BFFF` (Light Blue)
- **Secondary Accent**: `#1E90FF` (Blue)
- **Text**: `#FFFFFF` (White)
- **Secondary Text**: `#9CA3AF` (Gray-400)

### Design Features
- Glassmorphism effect (semi-transparent cards with blur)
- Glow effects on hover
- Smooth animations with Framer Motion
- Responsive grid layouts
- Icon integration with Lucide React

### UI Components
- Custom buttons (primary, secondary, icon)
- Glass-effect cards
- Input fields with glow borders
- Animated loader
- Responsive navbar with mobile menu

---

## 📄 Pages Overview

### 1. Home Page (`/`)
- Hero section with CTA buttons
- Feature showcase (4 features)
- How it works section
- Key features highlight
- Call-to-action section

**Features**: Animations, gradient backgrounds, responsive layout

### 2. Login Page (`/login`)
- Email and password inputs
- Show/hide password toggle
- Remember me checkbox
- Social login placeholders
- Link to register

**Features**: Form validation, error messages, animations

### 3. Register Page (`/register`)
- Name, email, password inputs
- Password confirmation
- Terms acceptance
- Social signup options
- Link to login

**Features**: Password validation, confirmation check, animations

### 4. Dashboard (`/dashboard`)
- Welcome message with user name
- Statistics cards (teams, proposals, etc.)
- Create team modal
- Teams grid (3 columns)
- Recent proposals section

**Features**: Modal forms, grid layout, statistics cards

### 5. Team Board (`/team-board`)
- Team info and statistics
- Search and filter toolbar
- Proposals grid
- Create proposal modal
- Comments modal for each proposal

**Features**: Filtering, search, modals, real-time data display

### 6. Proposals (`/proposals`)
- Browse all proposals
- Advanced filtering (status, category)
- Search functionality
- Sorting options
- Pagination

**Features**: Multi-filter, sort, search, pagination

### 7. Profile (`/profile`)
- User avatar and info
- Edit form for profile details
- Activity history
- Security settings
- Preferences panel
- Danger zone (delete account)

**Features**: Form editing, preferences, activity tracking

---

## 🧩 Component Details

### Navbar
- Logo with icon
- Navigation links (responsive)
- Authentication buttons
- Mobile menu toggle
- User profile dropdown

### Footer
- Company links
- Product links
- Legal links
- Social media icons
- Copyright information

### ProposalCard
- Title and author
- Description
- Status badge
- Category badge
- Vote buttons (upvote/downvote)
- Comment count
- Vote counts

### TeamCard
- Team icon
- Team name
- Description
- Member count
- Proposal count
- View button

### CommentBox
- User avatar
- Text input area
- Submit button
- Comment list
- Delete button for each comment
- Timestamps

### Loader
- Animated spinner
- Glow effect
- Optional message
- Configurable size

---

## 🔌 API Integration

### Setup
1. Create `.env` file (copy from `.env.example`)
2. Set `VITE_API_BASE_URL` to your backend URL
3. API calls automatically include auth tokens

### API Services

#### authApi.js
- `login(email, password)` - User login
- `register(userData)` - User registration
- `logout()` - Clear tokens
- `getProfile()` - Get user profile
- `updateProfile(userData)` - Update user info
- `getCurrentUser()` - Get stored user data

#### teamApi.js
- `getAll(filters)` - Get all teams
- `getById(id)` - Get specific team
- `create(teamData)` - Create new team
- `update(id, teamData)` - Update team
- `delete(id)` - Delete team
- `getMembers(teamId)` - Get team members
- `addMember(teamId, memberId)` - Add member
- `removeMember(teamId, memberId)` - Remove member
- `joinTeam(teamId, password)` - Join team
- `leaveTeam(teamId)` - Leave team

#### proposalApi.js
- `getAll(filters)` - Get all proposals
- `getById(id)` - Get specific proposal
- `create(proposalData)` - Create proposal
- `update(id, proposalData)` - Update proposal
- `delete(id)` - Delete proposal
- `vote(proposalId, voteData)` - Vote on proposal
- `addComment(proposalId, comment)` - Add comment
- `getComments(proposalId)` - Get comments
- `deleteComment(proposalId, commentId)` - Delete comment

---

## 🎯 Authentication Flow

1. **Registration**
   - User fills form
   - Data sent to backend
   - Token received and stored in localStorage
   - Redirected to dashboard

2. **Login**
   - User enters credentials
   - Backend validates and returns token
   - Token stored and user context updated
   - Redirected to dashboard

3. **Protected Routes**
   - AuthContext provides isAuthenticated state
   - Navbar shows different content based on auth
   - API calls automatically include token
   - Unauthorized requests redirect to login

---

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#YOUR_DARK_COLOR',
  'dark-bg': '#YOUR_BG_COLOR',
}
```

### Add New Page
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

### Create New Component
1. Create file in `src/components/`
2. Import and use in pages
3. Use Tailwind classes for styling

### Modify Styling
- Global styles: `src/styles/indes.css`
- Tailwind components: `src/styles/tailwind.css`
- Component-level: JSX className attribute

---

## 📦 Dependencies Explained

| Package | Purpose |
|---------|---------|
| react | UI library |
| react-dom | DOM rendering |
| react-router-dom | Client routing |
| axios | HTTP requests |
| lucide-react | Icons |
| framer-motion | Animations |
| tailwindcss | Styling |
| vite | Build tool |
| postcss | CSS processing |

---

## 🚀 Building & Deployment

### Build for Production
```powershell
npm run build
```
Creates optimized build in `dist/` folder.

### Local Preview
```powershell
npm run preview
```
Previews production build locally.

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-builds and deploys

### Deploy to Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder to Netlify

### Deploy with Docker
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 💡 Development Tips

### Enable Debugging
- Open browser DevTools: F12
- Check Console tab for errors
- Use Network tab to monitor API calls

### Hot Module Replacement
- Changes automatically reload in browser
- State is preserved during reload
- Great for rapid development

### Component Development
- Use React DevTools extension
- Test components in isolation
- Use console.log for debugging

### Styling Tips
- Use Tailwind classes first
- Add custom CSS only if needed
- Check Tailwind documentation for utilities
- Use responsive prefixes: `sm:`, `md:`, `lg:`

---

## 🔍 File by File

### key files explained:

**App.jsx**: Main component with all routes
**main.jsx**: Entry point that mounts App
**Navbar.jsx**: Top navigation (responsive)
**Footer.jsx**: Bottom footer section
**AuthContext.jsx**: Authentication state management
**axios.js**: HTTP client setup with interceptors
**Dashboard.jsx**: Main dashboard page
**ProposalCard.jsx**: Reusable proposal display
**tailwind.config.js**: Theme and Tailwind setup
**package.json**: Dependencies and scripts

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Vite uses next available port automatically |
| Blank page | Check console (F12) for errors |
| Styling not working | Clear cache, rebuild with `npm run dev` |
| API errors | Ensure backend running, check `VITE_API_BASE_URL` |
| Components not rendering | Check route path in `App.jsx` |
| Authentication not working | Check token in localStorage (F12 → Application) |

---

## 📞 Getting Help

1. Check the README.md file for detailed documentation
2. Review component code for usage examples
3. Check browser console for error messages
4. Verify API connection and backend status
5. Test in different browsers

---

## ✅ Checklist

- [ ] Installed Node.js 16+
- [ ] Ran `npm install` in frontend folder
- [ ] Created `.env` file with API URL
- [ ] Started dev server with `npm run dev`
- [ ] Opened `http://localhost:5173` in browser
- [ ] Tested registration/login
- [ ] Explored all pages
- [ ] Customized theme colors (optional)
- [ ] Connected to backend API
- [ ] Ready for production deployment

---

## 🎉 You're Ready!

Your Team Decision Board frontend is fully functional and ready to use. Start by:

1. **Exploring the Pages**: Navigate through all pages to understand the structure
2. **Customizing**: Update colors, text, and branding
3. **Connecting Backend**: Update API endpoints when backend is ready
4. **Testing**: Test all features with sample data
5. **Deploying**: Deploy to Vercel, Netlify, or your preferred hosting

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

**Happy coding! 🚀**
