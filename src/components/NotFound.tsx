import { useTranslation } from "react-i18next"

function NotFound() {

    const {t} = useTranslation()

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-6xl mx-auto items-center ">
                <div className="flex-1" data-aos="fade-up">
                    <h1 className="text-5xl font-bold mb-6">
                        {t('notFound')}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound