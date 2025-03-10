import { useEffect,  useState } from 'react'
import { useTranslation } from 'react-i18next'

function useWebDir() {

    const { i18n } = useTranslation()
    const [dir, setDir] = useState(i18n.dir() === "ltr" ? true : false)


    useEffect(() => {
        document.body.dir = i18n.dir()
        setDir(i18n.dir() === "ltr" ? true : false)
    }, [i18n, i18n.language])

    return { dir }
}

export default useWebDir