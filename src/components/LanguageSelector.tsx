import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import useWebDir from '../hooks/useWebDir'

function LanguageSelector() {

   const {i18n} = useTranslation()
   const {dir} = useWebDir()

    const languages = [
        {code: "en", lang: "English"},
        {code: "fr", lang: "Français"},
        {code: "hi", lang: "हिन्दी"},
        {code: "ar", lang: "اللغة العربية"},
    ]

    const handleLangChange = (e:ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
    }

    console.log(dir)


  return (
    <select  defaultValue={i18n.language}  title='langselector' onChange={handleLangChange}>
        {
            languages.map((data,index)=>(
                <option className={` text-center`}  key={index} value={data.code}>{data.lang}</option>
            ))
        }
    </select>
  )
}

export default LanguageSelector