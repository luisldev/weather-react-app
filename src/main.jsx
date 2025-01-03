import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import '@fontsource-variable/onest';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-background min-h-screen p-4'>
        <App />
      </main>
    </NextUIProvider>
  </StrictMode>,
)
