# Team Decision Board - Frontend

A modern, collaborative decision-making platform frontend built with React, Vite, and Tailwind CSS.

## 🎨 Design Theme

- **Primary Background**: Black (#000000)
- **Accent Color**: Light Blue (#00BFFF / #1E90FF)
- **Text Color**: White (#FFFFFF)
- **UI Style**: Glassmorphism with subtle glowing hover effects
- **Animations**: Smooth transitions with Framer Motion

## 🚀 Features

### Pages
- **Home Page**: Hero section with CTA buttons and feature showcase
- **Login & Register**: Clean forms with animated transitions
- **Dashboard**: Overview with team cards and recent proposals
- **Team Board**: Live discussion area with decision cards and voting
- **Proposals**: Browse all proposals with filtering and sorting
- **Profile**: User settings and account management
- **Navbar & Footer**: Fixed navigation and footer with links

### Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Links, social media, and copyright
- **ProposalCard**: Proposal display with voting and comments
- **TeamCard**: Team overview with member and proposal count
- **CommentBox**: Comment thread with add/delete functionality
- **Loader**: Animated loading state

### Functionality
- Authentication (login/register)
- Team management
- Proposal creation and voting
- Real-time discussions with comments
- User profile management
- Responsive design for all devices

## 📋 Prerequisites

- Node.js 16+
- npm or yarn

## 🛠️ Installation

1. **Clone the repository** (if not already done)
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and update the API base URL if needed.

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── api/               # API client functions
│   │   ├── authApi.js
│   │   ├── proposalApi.js
│   │   ├── teamApi.js
│   │   └── axios.js       # Axios instance with interceptors
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProposalCard.jsx
│   │   ├── TeamCard.jsx
│   │   ├── CommentBox.jsx
│   │   └── Loader.jsx
│   ├── context/          # React Context (Authentication)
│   │   └── AuthContext.jsx
│   ├── hooks/            # Custom hooks
│   │   └── userAuth.js
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TeamBoard.jsx
│   │   ├── ProposalPage.jsx
│   │   └── ProfilePage.jsx
│   ├── styles/           # CSS files
│   │   ├── tailwind.css
│   │   └── indes.css     # Custom styles
│   ├── utils/            # Utility functions
│   │   └── formatDate.js
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .env.example
```

## 🎯 Usage

### Authentication
- Navigate to `/register` to create a new account
- Navigate to `/login` to sign in
- Authentication tokens are stored in localStorage

### Dashboard
- View all your teams and recent proposals
- Click "Create Team" to start a new team
- Click on a team card to view team details

### Team Board
- View all proposals for a specific team
- Create new proposals with the "New Proposal" button
- Vote on proposals (upvote/downvote)
- Comment on proposals to discuss

### Proposals
- Browse all proposals across teams
- Filter by status (Open, In Progress, Closed)
- Sort by recent, popular, or most commented
- Search proposals by title or description

### Profile
- Update your profile information
- Change password
- Manage notification preferences
- View activity history

## 🎨 Styling

This project uses **Tailwind CSS** for styling with custom color configuration:
- Custom color palette for the dark theme
- Glassmorphism effects with backdrop blur
- Glow effects for buttons and cards
- Smooth animations with custom keyframes

Custom CSS is in `src/styles/`:
- `tailwind.css`: Tailwind directives and component classes
- `indes.css`: Custom animations and utility styles

## 🔌 API Integration

All API calls are made through the Axios instance in `src/api/axios.js` with:
- Automatic token injection in request headers
- Error handling with 401 redirects to login
- Base URL configuration from environment variables

### Available API Services
- **authApi**: Login, register, profile management
- **teamApi**: Team CRUD, member management
- **proposalApi**: Proposal CRUD, voting, comments

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📦 Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **axios**: HTTP client
- **lucide-react**: Icon library
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework

## 🛠️ Development Tools

- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Styling
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📝 Environment Variables

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Environment
VITE_ENV=development
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically builds and deploys on push

### Netlify
1. Build the project: `npm run build`
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Docker
Create a `Dockerfile`:
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

Build and run:
```bash
docker build -t team-decision-board-frontend .
docker run -p 80:80 team-decision-board-frontend
```

## 🐛 Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output.

### API connection errors
- Ensure backend is running on the correct port
- Check `VITE_API_BASE_URL` in `.env`
- Check browser console for CORS errors

### Styling not applying
- Ensure Tailwind CSS is properly installed
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project

## 📄 License

This project is part of the Team Decision Board application.

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📧 Support

For issues and questions, please refer to the project documentation or contact the development team.

---

Happy coding! 🚀
