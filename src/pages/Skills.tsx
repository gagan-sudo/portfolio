import { useTranslation } from "react-i18next";

  
  export default function Skills() {

    const {t} = useTranslation()

    // const translate = {
    //     skillsExpertise: "Skills & Expertise",
    //     skills: [
    //         {
    //           category: "Frontend",
    //         },
    //         {
    //           category: "Tools & Others",
    //         },
    //       ]
    // }

    const skills = [
        {
          category: t('skills')[0]?.category,
          items: [
            { name: 'JavaScript', level: 90 },
            { name: 'React.js', level: 90 },
            { name: 'TypeScript', level: 75 },
            { name: 'React Native', level: 60 },
            { name: 'Material-UI', level: 90 },
            { name: 'Firebase', level: 80 },
            { name: 'Next.js', level: 50 },
            { name: 'Tailwind CSS', level: 90 },
          ],
        },
        {
          category: t('skills')[1]?.category,
          items: [
            { name: 'Git', level: 85 },
            { name: 'Redux-Toolkit', level: 75 },
            { name: 'VScode', level: 80 },
            { name: 'Android Studio', level: 60 },
          ],
        },
      ];

    return (
      <div className="min-h-screen p-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
            {t('skillsExpertise')}
          </h2>
  
          <div className="space-y-12">
            {skills.map((category, index) => (
              <div
                key={category.category}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white rounded-lg shadow-lg p-6"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }