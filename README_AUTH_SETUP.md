# Better Auth Setup Guide

This project uses Better Auth for authentication with Supabase as the database backend.

## Prerequisites

1. Make sure you have Node.js installed
2. Get your Supabase database connection string

## Setup Steps

### 1. Get Supabase Database Connection String

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** → **Database**
4. Under **Connection string**, select **URI**
5. Copy the connection string (it should look like):
   ```
   postgresql://postgres.dgkfbrxagpwmdjxtlbxd:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres
   ```
6. Replace `[YOUR-PASSWORD]` with your actual database password

### 2. Create Environment Variables

Create a `.env` file in the root directory:

```env
# Better Auth Configuration
VITE_BETTER_AUTH_URL=http://localhost:3001
BETTER_AUTH_URL=http://localhost:3001
BETTER_AUTH_SECRET=change-this-to-a-random-secret-key-minimum-32-characters-long

# Supabase Database Connection
DATABASE_URL=postgresql://postgres.dgkfbrxagpwmdjxtlbxd:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

# Server Configuration
PORT=3001
CLIENT_URL=http://localhost:8080
```

**Important:**
- Replace `[YOUR-PASSWORD]` with your actual Supabase database password
- Generate a secure random string for `BETTER_AUTH_SECRET` (at least 32 characters)
- You can generate a secret using: `openssl rand -base64 32`

### 3. Install Additional Dependencies (if needed)

```bash
npm install ts-node concurrently --save-dev
```

### 4. Database Tables

The Better Auth tables have already been created in your Supabase database:
- `users_auth` - User accounts
- `session` - Active sessions
- `account` - OAuth provider accounts
- `verification` - Email verification tokens
- `ratelimit` - Rate limiting

### 5. Run the Application

You need to run two servers:

**Option 1: Run separately (recommended for development)**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Auth Server:
```bash
npm run dev:auth
```

**Option 2: Run together**
```bash
npm run dev:all
```

### 6. Access the Application

- Frontend: http://localhost:8080
- Auth API: http://localhost:3001/api/auth

## Available Routes

- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - User dashboard (requires authentication)
- `/` - Home page
- `/doctors` - Browse doctors
- `/consultation` - Book consultation

## User Management in Supabase

After users sign up, they will be visible in your Supabase dashboard:

1. Go to Supabase Dashboard
2. Navigate to **Table Editor**
3. Open the `users_auth` table
4. You'll see all registered users there

You can also view sessions in the `session` table.

## Troubleshooting

### "Cannot connect to database"
- Verify your `DATABASE_URL` in `.env` is correct
- Make sure you're using the connection pooling URL (port 6543)
- Check that your Supabase database password is correct

### "Better Auth server not responding"
- Make sure the auth server is running on port 3001
- Check that `VITE_BETTER_AUTH_URL` matches the server URL
- Verify CORS settings in `server/index.ts`

### "Users not appearing in Supabase"
- Check the `users_auth` table (not `user_profiles`)
- Better Auth stores users in `users_auth`, but you can create a trigger to sync to `user_profiles`

## Syncing with user_profiles Table

To sync Better Auth users with your `user_profiles` table, you can create a database trigger:

```sql
CREATE OR REPLACE FUNCTION sync_user_to_profiles()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, email, full_name, role)
  VALUES (NEW.id, NEW.email, NEW.name, 'patient')
  ON CONFLICT (id) DO UPDATE
  SET email = NEW.email,
      full_name = NEW.name,
      updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sync_user_trigger
AFTER INSERT OR UPDATE ON users_auth
FOR EACH ROW
EXECUTE FUNCTION sync_user_to_profiles();
```

This will automatically create/update user_profiles when users are created in Better Auth.

