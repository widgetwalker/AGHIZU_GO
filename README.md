# AGHIZU_GO

## 🏥 Project Overview
AGHIZU GO is a comprehensive telemedicine platform designed to connect patients with certified doctors instantly. The application facilitates:
- **Instant Video Consultations**: Connect with doctors from home.
- **Easy Booking**: Seamless appointment scheduling.
- **Digital Prescriptions**: Receive valid digital prescriptions post-consultation.
- **24/7 Care**: Round-the-clock access to medical professionals.
- **AI Medical Assistant**: Intelligent chatbot providing instant health guidance.

## 🛠️ Technology Stack
The project is built using a modern, type-safe full-stack architecture:

### Frontend
- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/) (Fast HMR & Bundling)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Static Typing)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS) with `tailwindcss-animate`
- **UI Components**:
    - [Shadcn UI](https://ui.shadcn.com/) (Accessible, reusable components)
    - [Radix UI](https://www.radix-ui.com/) (Headless primitives)
    - [Lucide React](https://lucide.dev/) (Icons)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (Async state)
- **Routing**: [React Router](https://reactrouter.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

### Backend (Auth & API)
- **Server**: [Express.js](https://expressjs.com/) (running on Node.js)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (Hosted on [Supabase](https://supabase.com/))
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) (Type-safe SQL)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- npm or bun

### Environment Setup
1. Create a `.env` file in the root directory:
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
   > **Note**: Verify `CLIENT_URL` matches your frontend port (default 8080 or 8081).

### Installation
```bash
npm install
```

### Running the Project
To run both the frontend and backend servers concurrently:
```bash
npm run dev:all
```

- **Frontend**: [http://localhost:8080](http://localhost:8080)
- **Backend**: [http://localhost:3001](http://localhost:3001)

### Development Scripts
- `npm run dev`: Starts only the frontend (Vite).
- `npm run dev:auth`: Starts only the backend (Auth server).
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.

## 📂 Project Structure
```
AGHIZU_GO-main/
├── server/             # Backend (Express + Better Auth)
│   ├── index.ts        # Server entry point
│   ├── auth.ts         # Better Auth configuration
│   ├── chat.ts         # AI Chatbot API
│   └── schema.ts       # Database schema (Drizzle)
├── src/                # Frontend (React)
│   └── components/
│       └── ChatBot.tsx # AI Medical Assistant Widget
├── public/             # Static assets
├── .env                # Environment variables (not committed)
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Vite configuration
```

## 📝 Features & Requirements (PRD Summary)
- **User Authentication**: Secure sign-up/sign-in using Email/Password via Better Auth.
- **AI Medical Chatbot**: 24/7 AI-powered medical assistant providing instant health guidance and appointment booking.
- **Database Schema**: Users, Sessions, Accounts, Verification tokens managed via Drizzle ORM.
- **Responsive Design**: Mobile-first UI tailored for healthcare accessibility.
- **Real-time Validation**: Form inputs validated instantly with Zod.
