import { Routes, Route } from 'react-router-dom';
import { 
  Home,
  About,
  Skills,
  Projects,
  Contact,
  NotFound
 } from './pages';     

export default function AppRoutes() {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='*'  element={<NotFound/>} />
    </Routes>
  );
}