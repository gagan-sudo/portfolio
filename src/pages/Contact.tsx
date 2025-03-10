import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import useWebDir from '../hooks/useWebDir';

export default function Contact() {
  // Declare state for success message
  const [messageSent, setMessageSent] = useState(false);
  const {dir} = useWebDir()
  const {t} = useTranslation()


  // Reference for the form
  const form = useRef<HTMLFormElement | null>(null);


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
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_name', 'template_name', form.current, {  // checkout emailjs for the all credentials 
          publicKey: 'emailjs_public_key',  // use your keys , do not use mine😂
        })
        .then(
          () => {
            setMessageSent(true); // Set success message state
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            setMessageSent(false); // Ensure failure resets success message
          }
        );
    }
  };

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
                  <Mail className={`w-5 h-5 text-blue-600 ${dir?'mr-3':'ml-3'} `} />
                  <span>{t('emailAddress')}</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className={`w-5 h-5 text-blue-600 ${dir?'mr-3':'ml-3'}`} />
                  <span>{t('address')}</span>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
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
                name="from_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                name="email_id"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
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
              ></textarea>
            </div>
            {messageSent && (
            <div className="mt-4 text-center text-green-600 font-semibold">
              {t('successMessage')}
            </div>
          )}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              value="Send"
            >
              {t('sendMessage')}
            </button>
          </form>

          {/* Show success message when email is sent */}
         
        </div>
      </div>
    </div>
  );
}