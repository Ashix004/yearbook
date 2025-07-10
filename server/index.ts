import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { Request, Response } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist/public')));
}

// API routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Development route - redirect to Vite dev server or show development message
if (process.env.NODE_ENV === 'development') {
  app.get('/', (req: Request, res: Response) => {
    res.json({ 
      message: 'Development server is running',
      endpoints: {
        health: '/api/health'
      },
      note: 'This is the Express API server. The React frontend should be served by Vite on a different port.'
    });
  });
}

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '../dist/public/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});