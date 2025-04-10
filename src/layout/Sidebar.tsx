import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu, X, Home, User, Code2, Briefcase, Mail, Download, Github, Linkedin,
  // Twitter
} from 'lucide-react';
// import ProfilePic from "../assets/profile_pic.webp";
// import ProfilePic from "../assets/profile_pic.svg";
import ProfilePic from "../assets/profile_pic.jpg";
import CV from '../assets/Gagandeep_Singh_Resume.pdf'
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'react-i18next';
import useWebDir from '../hooks/useWebDir';
import { toast } from 'sonner';



export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dir } = useWebDir()
  const { t } = useTranslation()

  // const translate = {
  //   home: "Home",
  //   about: "About",
  //   skills: "Skills",
  //   projects: "Projects",
  //   contact: "Contact",
  //   name: "Gagan",
  //   frontendDeveloper: "Frontend Developer",

  // }



  const navItems = [
    { path: '/', icon: Home, label: t('home'), button: false },
    { path: '/about', icon: User, label: t('about'), button: false },
    { path: '/skills', icon: Code2, label: t('skill'), button: false },
    { path: '/projects', icon: Briefcase, label: t('project'), button: false },
    { path: '/contact', icon: Mail, label: t('contact'), button: false },
    { path: '/download link', icon: Download, label: t('resume'), button: true },
  ];


  const handleResumeDownload = () => {
 try{   const a = document.createElement('a')
    a.href = CV
    a.download = "resume"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    toast.success('Resume is download')
  }catch(error:any){
    
    toast.error(error.message)
  }
    // window.open(CV,'_blank')
  }


  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-8 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className=' absolute top-5 right-4'>
        <LanguageSelector />
      </div>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 text-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{t('name')}</h2>
            <p className="text-gray-600">{t('frontendDeveloper')}</p>
          </div>

          <nav className="flex-1 px-4">
            {navItems.map(({ path, icon: Icon, label, button }) => (
              <div>
                {button ? <button className={
                  `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors bg-blue-500 hover:bg-blue-700  `
                } title='download cv' onClick={handleResumeDownload} > <Icon size={20} className={`${dir ? 'mr-3' : 'ml-3'}`} />
                  {label}</button> : <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                  <Icon size={20} className={`${dir ? 'mr-3' : 'ml-3'}`} />
                  {label}
                </NavLink>}
              </div>
            ))}
          </nav>

          <div className="p-6 border-t flex justify-between items-center">
            <div className={`flex justify-between space-x-4 mt-2`}>
              <a
                href="https://github.com/gagan-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 hover:text-gray-900 ${!dir ? 'ml-3' : ''}`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gagandeep-singh-b7971623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 hover:text-gray-900 `}
              >
                <Twitter size={20} />
              </a> */}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}