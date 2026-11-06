import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthContext } from './context/AuthContext.jsx'
import {ToastContainer} from 'react-toastify'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
<AuthContext>
    <ToastContainer/>
    <AppRoutes />
</AuthContext>
</QueryClientProvider>
)
