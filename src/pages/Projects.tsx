
import { useTranslation } from 'react-i18next';
import watchs from '../assets/watchs.png'
import zentry from '../assets/zentry.png'



export default function Projects() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {t} = useTranslation() as any


  const projects = [
      {
        title: t('projects')[0]?.title,
        description: t('projects')[0]?.description,
        image: watchs,
        technologies: ['NextJs', 'TypeScript','Tailwind CSS','Toast'],
        demoUrl: 'https://watchs-eight.vercel.app/',
        githubUrl: 'https://github.com/gagan-sudo/watchs',
      },
      {
        title: t('projects')[1]?.title,
        description: t('projects')[1]?.description,
        image: zentry,
        technologies: ['React', 'TypeScript','gsap','Tailwind CSS'],
        demoUrl: 'https://zentry-clone-oojh.onrender.com/',
        githubUrl: 'https://github.com/gagan-sudo/zentry_clone',
      },
    ];

  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          {t('myProjects')}
        </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('liveDemo')}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('gitHub')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}