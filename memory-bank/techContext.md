# Technical Context

## Core Technologies

- **Next.js 15** - React framework with App Router architecture
- **React 19** - UI library
- **TypeScript** - Static typing for JavaScript
- **PostgreSQL** - Relational database (via Neon Database)
- **Drizzle ORM** - Type-safe database toolkit

## Frontend

- **TailwindCSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Framer Motion** - Animation library
- **Next Themes** - Theme switching support
- **Sonner** - Toast notifications
- **Lucide React** - Icon library
- **React Icons** - Additional icon set
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **CVA (class-variance-authority)** - Component variant management
- **clsx/tailwind-merge** - Class name utilities

## Backend

- **NextAuth** - Authentication for Next.js
- **Drizzle ORM** - Database ORM
- **Neon Serverless** - PostgreSQL connection

## Development

- **ESLint** - Code linting
- **Next.js Development Server** - Local development with TurboPack
- **Drizzle Kit** - Database schema management and migrations

## Deployment

- Not specified, but likely Vercel (based on Next.js adoption)

## Infrastructure

- **Database**: Neon Database (PostgreSQL)
- **Authentication**: Managed through NextAuth

## Development Setup

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev

# Database commands
npm run db:generate  # Generate database migrations
npm run db:migrate   # Apply migrations
```

## Technical Constraints

- Must follow Next.js App Router patterns
- Authentication managed through NextAuth
- Database schema defined with Drizzle ORM
- UI built with React and TailwindCSS

## Integration Points

- Authentication providers (through NextAuth)
- Database connection (Neon)
- Possibly external APIs (to be determined)

## Note

This document will be updated as more technical details are discovered through development.
