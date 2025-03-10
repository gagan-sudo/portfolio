import  { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import AppRoutes from './routes';

function App() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-cubic',
        });
      }, []);

      

  return (
    <BrowserRouter>
        <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <AppRoutes />
        </main>
      </div>
   </BrowserRouter>
  )
}

export default App