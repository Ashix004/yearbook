import React from 'react'
import { Router, Route, Switch } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import HomePage from './pages/HomePage'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Switch>
              <Route path="/" component={HomePage} />
              <Route>
                <div className="flex items-center justify-center min-h-screen">
                  <h1 className="text-2xl font-bold">Page Not Found</h1>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App