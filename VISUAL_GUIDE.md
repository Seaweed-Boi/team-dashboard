# 🎨 Team Decision Board - Visual Preview & File Guide

## 📁 Complete File Structure

```
Team-Dashboard/
├── frontend/                               ← YOU ARE HERE
│   ├── public/                             # Static assets (empty, ready for images)
│   │   └── (add favicon, images here)
│   │
│   ├── src/
│   │   ├── App.jsx                        ✅ Main app with 7 routes
│   │   ├── main.jsx                       ✅ Entry point
│   │   │
│   │   ├── api/                           ✅ API Integration
│   │   │   ├── authApi.js                 ✅ Auth endpoints
│   │   │   ├── axios.js                   ✅ HTTP client setup
│   │   │   ├── proposalApi.js             ✅ Proposal endpoints
│   │   │   └── teamApi.js                 ✅ Team endpoints
│   │   │
│   │   ├── components/                    ✅ Reusable Components
│   │   │   ├── Navbar.jsx                 ✅ Top navigation
│   │   │   ├── Footer.jsx                 ✅ Bottom footer
│   │   │   ├── ProposalCard.jsx           ✅ Proposal display
│   │   │   ├── TeamCard.jsx               ✅ Team display
│   │   │   ├── CommentBox.jsx             ✅ Comments section
│   │   │   └── Loader.jsx                 ✅ Loading spinner
│   │   │
│   │   ├── context/                       ✅ State Management
│   │   │   └── AuthContext.jsx            ✅ Auth provider
│   │   │
│   │   ├── hooks/                         ✅ Custom Hooks
│   │   │   └── userAuth.js                ✅ useAuth hook
│   │   │
│   │   ├── pages/                         ✅ Page Components
│   │   │   ├── HomePage.jsx               ✅ Landing page
│   │   │   ├── LoginPage.jsx              ✅ Login form
│   │   │   ├── RegisterPage.jsx           ✅ Registration
│   │   │   ├── Dashboard.jsx              ✅ Main dashboard
│   │   │   ├── TeamBoard.jsx              ✅ Team board
│   │   │   ├── ProposalPage.jsx           ✅ Proposals browser
│   │   │   └── ProfilePage.jsx            ✅ User profile
│   │   │
│   │   ├── styles/                        ✅ Styling
│   │   │   ├── tailwind.css               ✅ Tailwind setup
│   │   │   └── indes.css                  ✅ Custom styles
│   │   │
│   │   ├── utils/                         ✅ Utilities
│   │   │   └── formatDate.js              ✅ Date formatting
│   │   │
│   │   └── assets/                        # Images & assets folder
│   │
│   ├── index.html                         ✅ HTML template
│   │
│   ├── Configuration Files:
│   │   ├── package.json                   ✅ Dependencies & scripts
│   │   ├── vite.config.js                 ✅ Vite configuration
│   │   ├── tailwind.config.js             ✅ Tailwind theme
│   │   ├── postcss.config.js              ✅ PostCSS setup
│   │   ├── .env.example                   ✅ Environment template
│   │   └── .gitignore                     ✅ Git ignore rules
│   │
│   └── Documentation:
│       └── README.md                      ✅ Full documentation
│
├── Documentation Files (Root):
├── QUICK_START.md                         ✅ 5-minute setup
├── SETUP_INSTRUCTIONS.md                  ✅ Detailed guide
├── COMPLETION_SUMMARY.md                  ✅ What's built
└── FEATURE_CHECKLIST.md                   ✅ Feature list

Total: 20+ React files + Configuration + Documentation
```

---

## 🎯 File Purpose Guide

### Entry Point Files
| File | Purpose | Status |
|------|---------|--------|
| index.html | HTML template | ✅ Complete |
| main.jsx | Application entry point | ✅ Complete |
| App.jsx | Main component with routing | ✅ Complete |

### Pages (7 Total)
| File | Route | Purpose | Status |
|------|-------|---------|--------|
| HomePage.jsx | / | Landing page with features | ✅ Complete |
| LoginPage.jsx | /login | User login form | ✅ Complete |
| RegisterPage.jsx | /register | User registration | ✅ Complete |
| Dashboard.jsx | /dashboard | Main dashboard | ✅ Complete |
| TeamBoard.jsx | /team-board | Team discussion board | ✅ Complete |
| ProposalPage.jsx | /proposals | Browse proposals | ✅ Complete |
| ProfilePage.jsx | /profile | User profile | ✅ Complete |

### Components (6 Total)
| File | Purpose | Usage | Status |
|------|---------|-------|--------|
| Navbar.jsx | Navigation | All pages | ✅ Complete |
| Footer.jsx | Footer | All pages | ✅ Complete |
| ProposalCard.jsx | Display proposal | Dashboard, TeamBoard, ProposalPage | ✅ Complete |
| TeamCard.jsx | Display team | Dashboard | ✅ Complete |
| CommentBox.jsx | Comments section | TeamBoard | ✅ Complete |
| Loader.jsx | Loading spinner | Used throughout | ✅ Complete |

### API Services (4 Total)
| File | Purpose | Functions | Status |
|------|---------|-----------|--------|
| axios.js | HTTP client | Base setup, interceptors | ✅ Complete |
| authApi.js | Authentication | Login, register, profile | ✅ Complete |
| teamApi.js | Teams | CRUD, members, join/leave | ✅ Complete |
| proposalApi.js | Proposals | CRUD, voting, comments | ✅ Complete |

### State Management
| File | Purpose | Features | Status |
|------|---------|----------|--------|
| AuthContext.jsx | Auth state | Login, register, logout | ✅ Complete |
| userAuth.js | Custom hook | Access auth context | ✅ Complete |

### Styling
| File | Purpose | Content | Status |
|------|---------|---------|--------|
| tailwind.css | Tailwind setup | Directives, components | ✅ Complete |
| indes.css | Custom styles | Animations, utilities | ✅ Complete |

### Utilities
| File | Purpose | Functions | Status |
|------|---------|-----------|--------|
| formatDate.js | Date utilities | Format, timeAgo, dateRange | ✅ Complete |

### Configuration
| File | Purpose | Content | Status |
|------|---------|---------|--------|
| package.json | Dependencies | All required packages | ✅ Complete |
| vite.config.js | Build config | Vite settings | ✅ Complete |
| tailwind.config.js | Theme config | Colors, animations | ✅ Complete |
| postcss.config.js | CSS processing | PostCSS plugins | ✅ Complete |

---

## 🎨 Visual Design Overview

### Color Palette
```
Primary Background:  #000000 (Black)
Primary Accent:      #00BFFF (Light Blue)
Secondary Accent:    #1E90FF (Dark Blue)
Text Primary:        #FFFFFF (White)
Text Secondary:      #9CA3AF (Gray-400)
```

### Typography
```
Headings:   Semibold/Bold sizes
Body:       Regular weight
Monospace:  For code/technical content
```

### Spacing System
```
px (1px)
2 (8px)
3 (12px)
4 (16px)
6 (24px)
8 (32px)
12 (48px)
16 (64px)
```

### Component Styles
```
Buttons:        Primary, Secondary, Icon variants
Cards:          Glass effect with backdrop blur
Inputs:         Glass effect with glow on focus
Modals:         Animated overlays
Badges:         Status and category badges
```

---

## 🔄 Data Flow

```
User Input (Form)
        ↓
React Component
        ↓
API Service (authApi, teamApi, proposalApi)
        ↓
Axios (with interceptors)
        ↓
Backend API
        ↓
Response
        ↓
Context/State Update
        ↓
Component Re-render
        ↓
User sees updated UI
```

---

## 🎯 Routing Structure

```
/                          → HomePage
/login                     → LoginPage
/register                  → RegisterPage
/dashboard                 → Dashboard (protected)
/team-board                → TeamBoard (protected)
/proposals                 → ProposalPage (protected)
/profile                   → ProfilePage (protected)
```

---

## 🔐 Authentication Flow

```
1. User visits /register
   ↓
2. Fills registration form
   ↓
3. Submits to authApi.register()
   ↓
4. Backend returns user + token
   ↓
5. Token stored in localStorage
   ↓
6. User context updated
   ↓
7. Redirected to /dashboard
   ↓
8. User logged in ✓
```

---

## 📊 Component Hierarchy

```
App (Root)
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   ├── Auth Buttons
│   └── Mobile Menu
├── Main Content (Routes)
│   ├── HomePage
│   │   ├── Hero Section
│   │   ├── Features Grid
│   │   └── CTA Buttons
│   ├── LoginPage
│   │   └── Login Form
│   ├── RegisterPage
│   │   └── Register Form
│   ├── Dashboard
│   │   ├── Stats Cards
│   │   ├── TeamCard (multiple)
│   │   └── ProposalCard (multiple)
│   ├── TeamBoard
│   │   ├── Team Info
│   │   ├── Toolbar
│   │   ├── ProposalCard (multiple)
│   │   └── CommentBox
│   ├── ProposalPage
│   │   ├── Search/Filter
│   │   └── ProposalCard (multiple)
│   └── ProfilePage
│       ├── Avatar
│       ├── Form
│       └── Settings
└── Footer
    ├── Links
    └── Social Icons
```

---

## 🎬 Animation Types

1. **Page Transitions**: Fade in/up on mount
2. **Hover Effects**: Glow, scale, color change
3. **Component Animations**: Slide, fade, pulse
4. **Loading States**: Spinning icon with glow
5. **Modal Animations**: Scale + fade in/out
6. **Button Animations**: Glow on hover

---

## 📱 Responsive Design

### Mobile (<640px)
- Single column layout
- Full-width cards
- Hamburger menu
- Stacked buttons
- Touch-friendly spacing

### Tablet (640-1024px)
- 2 column layout (where applicable)
- Adjusted padding/margins
- Desktop navigation
- Mixed layouts

### Desktop (>1024px)
- 3-4 column grids
- Side-by-side layouts
- Full navigation
- Optimized spacing

---

## 🔗 API Endpoints Expected

```
Auth Endpoints:
POST   /auth/login
POST   /auth/register
POST   /auth/refresh-token
GET    /auth/profile
PUT    /auth/profile
POST   /auth/logout

Team Endpoints:
GET    /teams
POST   /teams
GET    /teams/:id
PUT    /teams/:id
DELETE /teams/:id
GET    /teams/:id/members
POST   /teams/:id/members
DELETE /teams/:id/members/:memberId
GET    /teams/:id/proposals
POST   /teams/:id/join
POST   /teams/:id/leave

Proposal Endpoints:
GET    /proposals
POST   /proposals
GET    /proposals/:id
PUT    /proposals/:id
DELETE /proposals/:id
POST   /proposals/:id/vote
POST   /proposals/:id/comments
GET    /proposals/:id/comments
DELETE /proposals/:id/comments/:commentId
```

---

## 🛠️ Development Workflow

```
1. Start Dev Server
   npm run dev
   ↓
2. Make Changes
   Edit components, styles, etc.
   ↓
3. Hot Reload
   Vite auto-reloads changes
   ↓
4. Test Feature
   Test in browser
   ↓
5. Repeat
   Go to step 2
   ↓
6. Build for Production
   npm run build
   ↓
7. Deploy
   Upload dist/ folder
```

---

## 📦 Bundle Information

**Production Build**
- Optimized JavaScript
- CSS minification
- Tree shaking enabled
- Code splitting active
- Asset optimization

**Typical Bundle Size**: ~150-200KB (gzipped)

---

## ✨ Key Features Implementation

### Authentication
- JWT token-based
- localStorage persistence
- Auto-redirect on 401
- Token in all API calls

### State Management
- React Context (Auth)
- Local component state
- No Redux needed (simple app)

### Styling
- Tailwind CSS utility-first
- Custom animations
- Glassmorphism effects
- Responsive grid system

### API Integration
- Axios with interceptors
- Automatic token injection
- Error handling
- Base URL configuration

---

## 🎯 Testing Scenarios

1. **Authentication**
   - Register new user
   - Login with credentials
   - Auto-logout on invalid token

2. **Teams**
   - Create team
   - View team details
   - Join/leave team

3. **Proposals**
   - Create proposal
   - Vote on proposal
   - Filter/search proposals

4. **Comments**
   - Add comment
   - Delete comment
   - View comment thread

5. **Profile**
   - Update profile
   - Change preferences
   - View activity

6. **Responsive**
   - Mobile view
   - Tablet view
   - Desktop view

---

## 📚 File Dependencies

```
App.jsx
├── React Router
├── All Pages
├── Navbar
└── Footer

LoginPage/RegisterPage
├── useAuth hook
├── useNavigate
└── Form components

Dashboard
├── useAuth hook
├── TeamCard component
├── ProposalCard component
└── Loader component

TeamBoard
├── ProposalCard component
├── CommentBox component
├── Modals
└── Animations (Framer Motion)

ProfilePage
├── useAuth hook
├── Form components
└── Settings UI
```

---

## 🚀 Deployment Checklist

- [ ] All pages working
- [ ] All API calls correct
- [ ] Environment variables set
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All features tested
- [ ] Ready to deploy!

---

## 📞 Quick Reference

**Start Dev**: `npm run dev`
**Build**: `npm run build`
**Preview**: `npm run preview`
**Port**: http://localhost:5173

**Main Components**:
- Navbar (all pages)
- Footer (all pages)
- Loader (during data fetch)
- Modals (create/edit)

**Key Hooks**:
- useAuth (authentication)
- useNavigate (routing)
- useState (component state)
- useEffect (side effects)

---

**Everything is ready! Start building! 🚀**
