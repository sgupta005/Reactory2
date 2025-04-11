# System Patterns

## Architecture

Reactory2 follows the Next.js App Router architecture pattern:

- `/src/app` - Contains all routes and page components
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and shared logic
- `/src/drizzle` - Database schema and ORM configuration
- `/src/features` - Feature-specific components and logic

## Design Patterns

- **Server Components/Client Components** - Next.js 15 pattern for server-rendered and client-side interactive components
- **API Routes** - Serverless functions for backend logic
- **Authentication** - Using NextAuth for user authentication
- **Database Access** - Drizzle ORM for type-safe database interactions
- **Component Composition** - Using Radix UI primitives with custom styling

## State Management

- React's built-in state management (useState, useContext)
- Server state management through server components
- Form state management with react-hook-form

## Styling Approach

- TailwindCSS for utility-based styling
- Class Variance Authority (CVA) for component variants
- Tailwind Merge for conditional class composition
- Component-specific styles with proper organization

## Routing

- Next.js App Router for file-based routing
- Middleware for route protection and authentication checks

## Data Flow

- Server-side data fetching in server components
- Client-side data fetching where needed for interactivity
- Form submission and validation with react-hook-form and zod

## Code Organization

- Feature-based organization in the `/src/features` directory
- Reusable UI components in `/src/components`
- Utility functions in `/src/lib`
- Database schema in `/src/drizzle`

## Note

As development progresses, this document will be updated to reflect the actual system patterns implemented in the codebase.
