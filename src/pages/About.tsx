import { useTranslation } from "react-i18next";

export default function About() {

    const {t} = useTranslation()

    // const translate = {
    //     aboutMe: "About Me",
    //     aboutDescription: [
    //             "I'm a frontend developer, building modern web applications. My journey in web development started with a passion for creating beautiful user interfaces and has evolved into a deep understanding of modern frontend technologies.",
    //             "I specialize in React.js and its ecosystem, with a strong focus on building scalable and maintainable applications. I'm passionate about user experience, accessibility, and writing clean, efficient code.",
    //     ],
    //     education: "Education",
    //     clgName: "Visvesvaraya Technological University",
    //     eduDeg: "Bachelor in Computer Science",
    //     year: "2021-2025",
    //     experience: "Experience",
    //     experienceFrom: [
    //         {
    //         type: "Full Stack Developer Intern",
    //         company: "Dotch Endeavours",
    //         year: "Sept-2023 to Nov-2023",
    //     },
    // ]

    // }

    return (
        <div className="min-h-screen p-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">{t('aboutMe')}</h2>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8 space-y-6" data-aos="fade-up">
                    {Array.isArray(t('aboutDescription')) && t('aboutDescription').map((data,index)=>(
                             <p className="text-lg text-gray-700 " key={index}>
                             {data}
                         </p>
                    ))
                    }
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
                        <h3 className="text-xl font-bold mb-4">{t('education')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="font-semibold">{t('eduDeg')}</h4>
                                <p className="text-gray-600">{t('clgName')}</p>
                                <p className="text-gray-500">{t('year')}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
                        <h3 className="text-xl font-bold mb-4">{t('experience')}</h3>
                        <ul className="space-y-4">
                            {Array.isArray(t('aboutDescription')) && t('experienceFrom').map((data,index)=>(
                            <li key={index}>
                                <h4 className="font-semibold">{data.type}</h4>
                                <p className="text-gray-600">{data.company}</p>
                                <p className="text-gray-500">{data.year}</p>
                            </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}