# 🚀 Quick Start Guide - Team Decision Board Frontend

## ⚡ Get Started in 5 Minutes

### Step 1: Navigate to the frontend directory
```powershell
cd c:\Users\HPSMG\Desktop\Team-Dashboard\frontend
```

### Step 2: Install dependencies
```powershell
npm install
```

This will install all required packages:
- React 18.2.0
- React Router DOM 6.20.0
- Tailwind CSS 3.3.6
- Framer Motion 10.16.4
- Lucide React (icons)
- Axios (HTTP client)
- Vite (build tool)

### Step 3: Start the development server
```powershell
npm run dev
```

The frontend will be available at: **http://localhost:5173**

### Step 4: Open in your browser
Click the link or manually navigate to `http://localhost:5173`

---

## 🎯 What You'll See

### Home Page
- Hero section with call-to-action buttons
- Feature showcase cards
- How it works section
- Additional features highlight

### Navigation
- **Login/Register**: Create an account or sign in
- **Dashboard**: View teams and recent proposals (after login)
- **Team Board**: View and manage team proposals
- **Proposals**: Browse all proposals across teams
- **Profile**: Manage your account

### Features to Explore

1. **Create Account**
   - Go to Register page
   - Fill in: Name, Email, Password
   - Click "Create Account"

2. **Login**
   - Go to Login page
   - Enter your email and password
   - Access your dashboard

3. **Dashboard**
   - View your teams
   - See recent proposals
   - Create a new team

4. **Team Board**
   - View team proposals
   - Vote on proposals
   - Add comments
   - Create new proposals

5. **Proposals**
   - Browse all proposals
   - Filter by status
   - Sort by popularity
   - Search proposals

6. **Profile**
   - Update your information
   - Change preferences
   - View activity history

---

## 🎨 Design Elements to Notice

- **Dark Theme**: Black background with light blue accents
- **Glassmorphism**: Semi-transparent cards with blur effects
- **Glow Effects**: Hover effects on buttons and cards
- **Smooth Animations**: Page transitions and element animations
- **Responsive Design**: Works on mobile, tablet, and desktop

---

## 🔧 Available Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter (if configured)
npm run lint
```

---

## 📝 File Structure Overview

```
frontend/
├── public/              # Static files
├── src/
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   ├── api/            # API integration
│   ├── components/     # Reusable components
│   ├── context/        # Authentication context
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   └── utils/          # Utility functions
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Full documentation
```

---

## 💡 Tips & Tricks

### Customize Colors
Edit `tailwind.config.js` to change:
- Primary color (currently #00BFFF)
- Background colors
- Glow effects

### Add New Pages
1. Create a new component in `src/pages/`
2. Add route in `App.jsx`
3. Update `Navbar.jsx` if needed

### Create New Components
1. Create file in `src/components/`
2. Export as default
3. Import and use in pages

### Styling Tips
- Use Tailwind utility classes
- Use custom CSS from `indes.css`
- Use component classes from `tailwind.css`

---

## 🔗 API Integration

The frontend is ready to connect to a backend API:

1. **Update `.env` file** with your API URL:
   ```
   VITE_API_BASE_URL=http://your-backend-url/api
   ```

2. **API services are already configured**:
   - `src/api/authApi.js` - Authentication
   - `src/api/teamApi.js` - Teams
   - `src/api/proposalApi.js` - Proposals

3. **Authentication flow**:
   - Login/register stores token in localStorage
   - Token is automatically sent with every API request
   - Unauthorized requests redirect to login

---

## ❓ Common Questions

### Q: How do I change the theme colors?
A: Edit `tailwind.config.js` and update the color values in the `extend.colors` section.

### Q: Can I use this with a different backend?
A: Yes! Update the API endpoints in `src/api/` files to match your backend API.

### Q: How do I deploy this?
A: See README.md for deployment instructions (Vercel, Netlify, Docker).

### Q: What if I get a "port already in use" error?
A: Vite will automatically use the next available port. Check the terminal output.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com)

---

## 🐛 Troubleshooting

### Blank page in browser?
- Check browser console for errors (F12 → Console)
- Ensure the backend API is running
- Clear browser cache

### Styling not showing?
- Rebuild: `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)
- Check that Tailwind CSS is installed

### API errors?
- Ensure backend is running
- Check `VITE_API_BASE_URL` in `.env`
- Look for CORS errors in browser console

---

## 🎉 You're All Set!

The frontend is fully functional with:
- ✅ Complete page structure
- ✅ Responsive design
- ✅ Modern UI with animations
- ✅ API integration ready
- ✅ Authentication system
- ✅ Team & proposal management
- ✅ User profile system

**Next Steps:**
1. Customize the theme colors in `tailwind.config.js`
2. Connect your backend API
3. Test all features
4. Deploy to production

Happy coding! 🚀
