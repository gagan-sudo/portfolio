import { useTranslation } from "react-i18next";

interface AboutDescription {
    data: string;
  }
  

  interface Experience {
    type: string;
    company: string;
    year: string;
  }
  

export default function About() {

    const {t} = useTranslation()

     const aboutDescription: AboutDescription[] = t('aboutDescription', { returnObjects: true }) as unknown as AboutDescription[];
  

     const experienceFrom : Experience[] = t('experienceFrom', { returnObjects: true }) as unknown as Experience[];
    
    return (
        <div className="min-h-screen p-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">{t('aboutMe')}</h2>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8 space-y-6" data-aos="fade-up">
                    {aboutDescription.map((data,index)=>(
                             <p className="text-lg text-gray-700 " key={index}>
                             {data.data}
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
                            {experienceFrom.map((data,index)=>(
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