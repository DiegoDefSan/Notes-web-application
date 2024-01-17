import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PopFormProvider } from './contexts/PopFormContext.tsx'
import { ModifyingNoteProvider } from './contexts/ModifyingNoteContext.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <ModifyingNoteProvider>
    <PopFormProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </PopFormProvider>
  </ModifyingNoteProvider>
)
