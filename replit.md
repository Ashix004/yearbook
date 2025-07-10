# Mar Thoma Yuvajana Sakhyam - Kundara Centre

## Overview

This is a full-stack web application for the Mar Thoma Yuvajana Sakhyam Kundara Centre, built as a modern React application with Express.js backend. The application serves as a digital presence for the youth community organization, featuring contact information, community details, and event galleries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage with potential for PostgreSQL sessions (connect-pg-simple)

## Key Components

### Frontend Components
- **Main Application**: Single-page application with routing
- **UI Components**: Comprehensive shadcn/ui component library including:
  - Forms, buttons, cards, modals, and navigation components
  - Specialized components for events (EventCard, ImageGallery, LightboxModal, SocialShareModal)
  - Footer component with organization branding and contact information
- **Layout**: Responsive design with mobile-first approach
- **Theming**: Light/dark mode support with CSS custom properties
- **Social Sharing**: Individual event sharing across multiple platforms (Facebook, Twitter, WhatsApp, Telegram, LinkedIn)

### Backend Components
- **API Server**: Express.js with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL schema
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Development Server**: Vite integration for hot module replacement

## Data Flow

### Client-Side Flow
1. React application renders through Vite development server
2. React Query manages API calls and caching
3. Components use shadcn/ui for consistent UI patterns
4. State management through React hooks and React Query

### Server-Side Flow
1. Express.js handles HTTP requests with middleware chain
2. Routes are registered through a centralized router system
3. Storage interface abstracts database operations
4. Database operations use Drizzle ORM with PostgreSQL

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React icons
- **Utilities**: clsx, tailwind-merge for styling utilities
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Zod schema validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production builds

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: Uses Vite dev server with Express backend
- **Production**: Serves static files through Express with API routes
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

### Hosting Considerations
- Designed for deployment on platforms supporting Node.js
- Requires PostgreSQL database (configured for Neon Database)
- Static assets served through Express in production
- Environment variables needed for database connectivity

## Recent Changes

### January 2025
- **Office Bearers Section**: Added actual photos of all organization leaders with proper positioning and role icons
- **Footer Implementation**: Created comprehensive footer with organization branding, contact information, and quick links
- **Social Media Sharing**: Implemented individual event sharing feature with support for Facebook, Twitter, WhatsApp, Telegram, and LinkedIn platforms
- **UI Enhancements**: Added share buttons to event galleries and modal-based sharing interface

The application follows modern web development practices with a clear separation of concerns, type safety throughout, and a scalable architecture suitable for a community organization's digital presence.