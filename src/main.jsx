import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProviders from './providers/AuthProviders';
import { router } from './route/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        
          <RouterProvider router={router} />
      
      </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>,


AOS.init({
  offset: 200,
  duration: 500,
  easing: 'ease-in-sine',
  delay: 100,
})
)
