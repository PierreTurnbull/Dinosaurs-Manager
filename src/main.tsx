import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './tailwind.css'
import './main.css'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

axios.defaults.baseURL = import.meta.env.VITE_API_URL + "/rest/v1"
axios.defaults.headers.common["apikey"] = import.meta.env.VITE_API_KEY

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
)
