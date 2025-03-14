import { Mail, MapPin } from 'lucide-react';
import {  useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import {
  isValidInput,
  maxLength,
} from '../utils/validation';
import * as Yup from 'yup';
import useWebDir from '../hooks/useWebDir';
import { useFormik } from 'formik';
import { toast } from 'sonner';

export default function Contact() {
  // Declare state for success message
  const [messageSent, setMessageSent] = useState(false);

  const { dir } = useWebDir();
  const { t } = useTranslation();

  // const tran = {
  //   enterName: "Please enter your name",
  //   enterEmail: 'Please enter your email',
  //   enterMessage: 'Please enter message',
  //   nameIsRequired: "Name is required",
  //   minimumName5Required: "Minimum 5 character are required",
  //   maximumName50Allowed: "Maximum 50 character are allowed",
  //   emailIsRequired: "Email is required",
  //   validEmailAddress: "Enter a valid email address",
  //   messageIsRequired: "Message is required",
  //   messageSendSuccessfully: "Message send successfully!",
  //   tryAgainMessageIsFailed: "Try again message is failed...",
  //   minimumMessage50CharacterRequired: "Minimum 50 character are required",
  //   maximumMessage500CharacterAllowed: "Maximum 500 character are allowed",
  // }

  // Reference for the form
  // const form = useRef<HTMLFormElement | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required(t("nameIsRequired"))
        .min(5, t("minimumName5Required"))
        .max(51, t("maximumName50Allowed")),
      email: Yup.string()
        .required(t("emailIsRequired"))
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          t("validEmailAddress")
        ),
      message: Yup.string()
        .required(t("messageIsRequired"))
        .min(50, t("minimumMessage50CharacterRequired"))
        .max(501, t("maximumMessage500CharacterAllowed")),
    }),
    onSubmit: async (values) => {
      setMessageSent(true)
      // const form = document.getElementById('contact-form');
    //   const form: HTMLElement | null = document.querySelector("#contact-form")
    //   // Populate the form with values
    //   if (form) {
    //     (form as HTMLFormElement).name.value = values.name;
    //     (form as HTMLFormElement).email.value = values.email;
    //     (form as HTMLFormElement).message.value = values.message;
    // }

    const form: HTMLFormElement | null = document.querySelector("#contact-form");
if (form) {
    const nameInput = form.querySelector<HTMLInputElement>("input[name='name']");
    const emailInput = form.querySelector<HTMLInputElement>("input[name='email']");
    const messageInput = form.querySelector<HTMLTextAreaElement>("textarea[name='message']");

    if (nameInput) nameInput.value = values.name;
    if (emailInput) emailInput.value = values.email;
    if (messageInput) messageInput.value = values.message;
}



     if(form){ emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then(
          () => {
            toast.success(t("messageSendSuccessfully"));
            formik.resetForm()
          },
          (error) => {
            toast.error(t("tryAgainMessageIsFailed"), error.text);
          }
        );}

      setTimeout(() => {
        setMessageSent(false)
      }, 5000)

    }
  })


  // const translate = {
  //   getInTouch: "Get in Touch",
  //   contactInformation: "Contact Information",
  //   emailAddress: "gaganbhangu34484@gmail.com",
  //   address: "Mohali, Punjab, India",
  //   nme: "Name",
  //   email: "Email",
  //   message: "Message",
  //   successMessage: "Your message has been sent successfully!",
  //   sendMessage: "Send Message",
  // }

  // Handle form submission


  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          {t('getInTouch')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">{t('contactInformation')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className={`w-5 h-5 text-blue-600 ${dir ? 'mr-3' : 'ml-3'} `} />
                  <span>{t('emailAddress')}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className={`w-5 h-5 text-blue-600 ${dir ? 'mr-3' : 'ml-3'}`} />
                  <span>{t('address')}</span>
                </div>
              </div>
            </div>
          </div>

          <form
            // ref={form}
            onSubmit={formik.handleSubmit}
            id='contact-form'
            className="space-y-6"
            data-aos="fade-left"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('nme')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("enterName")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                value={formik.values.name}
                onChange={(e) => {
                  if (!isValidInput(e.target.value)) {
                    return
                  }
                  if (!maxLength(e.target.value, 50)) {
                    toast.info(t("maximumName50Allowed"))
                    return
                  }
                  formik.handleChange(e)
                }}

              />
              {formik.errors.name && (
                <p className=' text-red-500'>
                  {
                    formik.errors.name
                  }
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('email')}
              </label>
              <input
                type="text"
                id="email"
                placeholder={t("enterEmail")}
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                value={formik.values.email}
                onChange={(e) => {
                  if (!isValidInput(e.target.value)) {
                    return
                  }
                  // if(!isValidEmail(e.target.value)){
                  //   alert("Enter a valid email")
                  //   return
                  // }
                  formik.handleChange(e)
                }}
              />
              {formik.errors.email && (
                <p className=' text-red-500'>
                  {
                    formik.errors.email
                  }
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('message')}
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder={t("enterMessage")}
                value={formik.values.message}
                onChange={(e) => {
                  if (!isValidInput(e.target.value)) {
                    return
                  }
                  if (!maxLength(e.target.value, 500)) {
                    toast.info(t("maximumMessage500CharacterAllowed"))
                    return
                  }
                  formik.handleChange(e)
                }}
              ></textarea>
              {formik.errors.message && (
                <p className=' text-red-500'>
                  {
                    formik.errors.message
                  }
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 ${messageSent ? 'bg-blue-200' : 'bg-blue-600'}  text-white rounded-lg hover:${messageSent ? 'bg-blue-200' : 'bg-blue-700'} transition-colors`}
              value="Send"
              disabled={messageSent}
            >
              {t('sendMessage')}
            </button>
          </form>


        </div>
      </div>
    </div>
  );
}