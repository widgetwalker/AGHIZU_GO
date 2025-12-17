<div align="center">

# 🏥 AGHIZU GO

### Expert Healthcare Anytime, Anywhere

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Getting Started](#-getting-started) • [Documentation](#-project-structure)

</div>

---

## 📋 Overview

**AGHIZU GO** is a modern, full-stack telemedicine platform that connects patients with certified healthcare professionals instantly. Built with cutting-edge technologies, it provides a seamless, secure, and accessible healthcare experience.

### ✨ Key Highlights

- 🎥 **Instant Video Consultations** - Connect with doctors from the comfort of your home
- 📅 **Easy Appointment Booking** - Seamless scheduling system
- 💊 **Digital Prescriptions** - Receive valid e-prescriptions post-consultation
- 🔒 **Secure Authentication** - Enterprise-grade security with Better Auth
- 📱 **Responsive Design** - Mobile-first UI for all devices
- ⚡ **Real-time Validation** - Instant form feedback with Zod

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev/) | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Shadcn UI](https://ui.shadcn.com/) | Component Library |
| [Radix UI](https://www.radix-ui.com/) | Headless Primitives |
| [TanStack Query](https://tanstack.com/query/latest) | Data Fetching |
| [React Router](https://reactrouter.com/) | Routing |
| [React Hook Form](https://react-hook-form.com/) | Form Management |
| [Zod](https://zod.dev/) | Schema Validation |

### Backend
| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Runtime Environment |
| [Express.js](https://expressjs.com/) | Web Framework |
| [Better Auth](https://www.better-auth.com/) | Authentication |
| [PostgreSQL](https://www.postgresql.org/) | Database |
| [Supabase](https://supabase.com/) | Database Hosting |
| [Drizzle ORM](https://orm.drizzle.team/) | Type-safe ORM |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16.x or higher
- **npm** or **bun**
- **PostgreSQL** database (Supabase recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/widgetwalker/AGHIZU_GO.git
   cd AGHIZU_GO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Authentication (Better Auth)
   VITE_BETTER_AUTH_URL=http://localhost:3001
   BETTER_AUTH_URL=http://localhost:3001
   BETTER_AUTH_SECRET=your-secure-random-secret-key-min-32-chars

   # Database (Supabase / PostgreSQL)
   # Use the Transaction mode connection string (port 6543)
   DATABASE_URL=postgresql://[USER]:[PASSWORD]@[HOST]:6543/postgres

   # Server Config
   PORT=3001
   CLIENT_URL=http://localhost:8080
   ```

4. **Run the application**
   ```bash
   npm run dev:all
   ```

   The application will be available at:
   - **Frontend**: http://localhost:8080
   - **Backend**: http://localhost:3001

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend only (Vite dev server) |
| `npm run dev:auth` | Start backend only (Auth server) |
| `npm run dev:all` | Start both frontend and backend concurrently |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

---

## 📂 Project Structure

```
AGHIZU_GO/
├── 📁 server/              # Backend (Express + Better Auth)
│   ├── index.ts            # Server entry point
│   ├── auth.ts             # Better Auth configuration
│   └── schema.ts           # Database schema (Drizzle)
├── 📁 src/                 # Frontend (React)
│   ├── 📁 components/      # Reusable UI components
│   ├── 📁 pages/           # Route pages
│   └── main.tsx            # App entry point
├── 📁 public/              # Static assets
├── .env                    # Environment variables (not committed)
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration
└── vite.config.ts          # Vite configuration
```

---

## 🎯 Features

### 🔐 Authentication & Security
- Secure email/password authentication via Better Auth
- Session management with secure cookies
- Database-backed user verification

### 👨‍⚕️ Healthcare Features
- Doctor profiles and specialization listings
- Appointment booking system
- Video consultation integration
- Digital prescription management

### 💻 Technical Features
- Server-side rendering ready
- Type-safe database queries with Drizzle ORM
- Real-time form validation
- Responsive mobile-first design
- Dark mode support
- Accessible UI components (WCAG compliant)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Built with ❤️ for better healthcare accessibility**

[⬆ Back to Top](#-aghizu-go)

</div>
