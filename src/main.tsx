import {createRoot} from 'react-dom/client'
import './index.css'
import {MainLayout} from "./layouts/MainLayout.tsx";

createRoot(document.getElementById('root')!).render(<MainLayout/>)
