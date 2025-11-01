# 🏥 AGHIZU GO - Telemedicine Platform

<div align="center">

![AGHIZU GO](https://img.shields.io/badge/AGHIZU-GO-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-000000?style=for-the-badge)

**A comprehensive telemedicine platform enabling remote healthcare delivery through secure video consultations, digital prescriptions, and doorstep medical services.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

AGHIZU GO is a modern, full-featured telemedicine platform that connects patients with healthcare providers through a secure, user-friendly web application. The platform facilitates remote consultations, digital prescription management, and doorstep healthcare services.

### Key Objectives

- **Reduce physical clinic visits by 70%** for non-emergency cases
- **Achieve 95% appointment adherence** via reminders and real-time scheduling
- **Ensure 99.9% uptime** for video consultation sessions
- **Process payments securely** with <1% failure rate
- **Track doorstep services** to <2-hour delivery window in urban areas

---

## ✨ Features

### 🔐 Authentication & User Management
- **Better Auth Integration** - Secure email/password authentication
- **User Roles** - Support for Patients, Doctors, and Admins
- **Session Management** - Secure session handling with automatic expiration
- **Password Validation** - Real-time password strength indicator
- **Profile Management** - Complete user profile system

### 👨‍⚕️ Doctor Features
- **Doctor Search & Discovery** - Advanced search with filters
- **Specialty Filtering** - Filter by medical specialties
- **Availability Management** - Real-time availability tracking
- **Rating System** - Patient reviews and ratings
- **Professional Profiles** - Detailed doctor profiles with qualifications

### 📅 Appointment Management
- **Real-time Booking** - Schedule consultations with available slots
- **Time Slot Selection** - Dynamic slot availability based on doctor schedule
- **Rescheduling & Cancellation** - Flexible appointment management
- **Appointment History** - Complete appointment tracking
- **Status Tracking** - Real-time appointment status updates

### 💊 Medical Services
- **Digital Prescriptions** - Electronic prescription generation
- **Medical Records** - Comprehensive medical history tracking
- **Vital Signs Tracking** - Record and track patient vitals
- **Prescription Management** - Active and past prescriptions

### 🚪 Doorstep Services
- **Home Health Checkups** - Schedule vital sign checks at home
- **Medicine Delivery** - Prescription medication delivery service
- **Real-time Tracking** - Track service provider location
- **Service History** - Complete doorstep service records

### 🎨 User Experience
- **Dark/Light Mode** - System preference detection with persistent storage
- **Responsive Design** - Mobile-first, fully responsive interface
- **Smooth Animations** - Enhanced hover effects and transitions
- **Intuitive Navigation** - Clean, modern UI with excellent UX

### 🔒 Security & Compliance
- **HIPAA/GDPR Ready** - Compliance-focused architecture
- **Row Level Security (RLS)** - Database-level access control
- **Secure Authentication** - Industry-standard auth practices
- **Data Encryption** - Secure data handling

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching

### Backend
- **Better Auth** - Authentication framework
- **Express.js** - Auth server
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Database (via Supabase)

### Database & Infrastructure
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Real-time capabilities
  - Database migrations

### Development Tools
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **Concurrently** - Run multiple scripts
- **tsx** - TypeScript execution

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Supabase Account** - [Sign up](https://supabase.com/)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/widgetwalker/AGHIZU_GO.git
cd AGHIZU_GO
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a project at [Supabase Dashboard](https://supabase.com/dashboard)
2. Get your database connection string from **Settings → Database**
3. The database schema will be created automatically via migrations (see [Database Setup](#-database-schema))

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Better Auth Configuration
VITE_BETTER_AUTH_URL=http://localhost:3001
BETTER_AUTH_URL=http://localhost:3001
BETTER_AUTH_SECRET=your-random-secret-key-minimum-32-characters-long

# Supabase Database Connection
# Get from: Supabase Dashboard → Settings → Database → Connection string (URI)
DATABASE_URL=postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres

# Server Configuration
PORT=3001
CLIENT_URL=http://localhost:8080
```

**Important:**
- Replace `[PROJECT_REF]`, `[PASSWORD]`, and `[REGION]` with your actual Supabase credentials
- Generate `BETTER_AUTH_SECRET` using: `openssl rand -base64 32`

---

## ⚙️ Configuration

### Database Setup

The complete database schema is defined in Supabase migrations. All tables, relationships, indexes, and RLS policies are automatically configured. Key tables include:

- **User Management**: `user_profiles`, `patients`, `doctors`
- **Appointments**: `appointments`, `appointment_reschedules`
- **Medical Records**: `prescriptions`, `medical_records`, `vitals`
- **Services**: `doorstep_requests`, `medicine_deliveries`
- **System**: `payments`, `notifications`, `reviews`

See [README_AUTH_SETUP.md](./README_AUTH_SETUP.md) for detailed database setup instructions.

---

## 🏃 Running the Application

### Development Mode

You need to run two servers: the frontend and the auth server.

**Option 1: Run Both Servers Together**
```bash
npm run dev:all
```

**Option 2: Run Servers Separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Auth Server:
```bash
npm run dev:auth
```

### Access the Application

- **Frontend**: http://localhost:8080
- **Auth API**: http://localhost:3001/api/auth
- **Health Check**: http://localhost:3001/health

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
AGHIZU_GO/
├── server/                 # Backend server
│   ├── auth.ts            # Better Auth configuration
│   ├── index.ts           # Express server setup
│   └── schema.ts          # Drizzle ORM schema definitions
├── src/
│   ├── components/        # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── ...            # Feature components
│   ├── pages/             # Route pages
│   │   ├── SignIn.tsx     # Sign in page
│   │   ├── SignUp.tsx     # Sign up page
│   │   ├── Dashboard.tsx  # User dashboard
│   │   ├── Doctors.tsx    # Doctor search/browse
│   │   ├── Consultation.tsx  # Book consultation
│   │   └── Index.tsx      # Home page
│   ├── lib/
│   │   ├── auth.ts        # Better Auth client
│   │   ├── supabase-queries.ts  # Database query functions
│   │   └── utils.ts       # Utility functions
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
├── database.types.ts       # Generated TypeScript types
├── supabaseclient.js      # Supabase client configuration
└── package.json           # Dependencies and scripts
```

---

## 🗄️ Database Schema

The platform uses a comprehensive PostgreSQL database with the following key entities:

### Core Tables
- **user_profiles** - User account information
- **patients** - Patient-specific medical data
- **doctors** - Doctor professional information
- **appointments** - Consultation bookings
- **prescriptions** - Digital prescriptions
- **medical_records** - Complete medical history
- **doorstep_requests** - Home service requests
- **payments** - Transaction records
- **notifications** - Multi-channel notifications
- **reviews** - Patient feedback and ratings

### Security
- **Row Level Security (RLS)** enabled on all tables
- **Role-based access control** (Patient, Doctor, Admin)
- **Secure authentication** via Better Auth

See the database migrations in Supabase for complete schema details.

---

## 🔌 API Endpoints

### Authentication (Better Auth)
- `POST /api/auth/sign-up` - User registration
- `POST /api/auth/sign-in` - User login
- `POST /api/auth/sign-out` - User logout
- `GET /api/auth/session` - Get current session

### Application Routes
- `/` - Home page
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - User dashboard (protected)
- `/doctors` - Browse and search doctors
- `/consultation` - Book appointment

---

## 🔐 Authentication

This project uses **Better Auth** for secure authentication, integrated with Supabase as the database backend.

### Features
- Email/password authentication
- Secure session management
- Automatic user profile sync to Supabase
- Role-based access control

### Setup
See [README_AUTH_SETUP.md](./README_AUTH_SETUP.md) for detailed authentication setup instructions.

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Configure environment variables in your hosting platform

### Backend Deployment

The Better Auth server needs to be deployed separately (e.g., Railway, Render, or a VPS).

### Environment Variables for Production

Update your production `.env` with:
- Production Supabase database URL
- Production Better Auth URL
- Secure `BETTER_AUTH_SECRET`
- Production `CLIENT_URL`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure RLS policies are updated for new tables

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 📞 Support

For issues, questions, or contributions:

- **GitHub Issues**: [Open an issue](https://github.com/widgetwalker/AGHIZU_GO/issues)
- **Documentation**: See [README_AUTH_SETUP.md](./README_AUTH_SETUP.md) for setup guides

---

## 🎯 Roadmap

- [ ] Video consultation integration (Twilio/Agora)
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] AI symptom checker enhancement
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Email/SMS notification system
- [ ] Doctor onboarding workflow

---

## 🙏 Acknowledgments

- [Better Auth](https://www.better-auth.com/) - Authentication framework
- [Supabase](https://supabase.com/) - Backend infrastructure
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling

---

<div align="center">

**Built with ❤️ for better healthcare accessibility**

[⭐ Star this repo](https://github.com/widgetwalker/AGHIZU_GO) if you find it helpful!

</div>
