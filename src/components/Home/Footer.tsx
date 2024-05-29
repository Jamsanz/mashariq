import * as Form from '@radix-ui/react-form';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Input from "../input";
import TextArea from '../textarea';
import Button from '../Button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact-us" className="min-h-[300px] md:min-h-[650px] bg-black relative flex pb-6">
      {/* top curve */}
      <div className="w-full absolute md:block -top-1 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="190"
          className="md:h-[120px] lg:h-[190px] hidden xl:block -mt-16"
          viewBox="0 0 1440 190"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M908 51.9998C698.196 -4.91241 234.943 -39.6716 0 84.3286V189.499H1440V43.0005C1440 185.174 1125.5 111 908 51.9998Z"
            fill="white"
          />
        </svg>
        <img src="/assets/sd-curve.svg" className="w-full md:block xl:hidden" />
      </div>
      <div className="w-full md:w-[1200px] text-white mt-[70px] md:mt-[260px] mx-auto mb-8 px-6 sm:px-7 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col md:flex-row gap-y-7 justify-between gap-x-[150px]">
          <div className="inline-flex flex-col gap-y-5 max-w-[600px]">
            <h2 className="text-3xl md:text-5xl">{t('get_in_touch')}</h2>
            <p>{t('get_in_touch_text')}</p>
            <div>
              <p>Address: Riyadh, Saudi Arabia</p>
              <p>Phone: +966 (0) 533333344</p>
              <p>Email: hello@mashariq.com</p>
            </div>
            <ul className="md:flex gap-2 mt-5 hidden">
              <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaFacebook /> </li>
              <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaTwitter /> </li>
              <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaInstagram /> </li>
              <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"> <FaLinkedinIn /></li>
            </ul>
          </div>
          <Form.Root className="w-full md:w-[600px] flex flex-col gap-3 md:gap-4">
            <Form.Field name="name">
              <Form.Label className='mb-2 block'>{t('name')}</Form.Label>
              <Form.Control asChild required>
                <Input placeholder={t('full_name')} name="name" />
              </Form.Control>
              <Form.Message className="text-left mt-1 text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
                Please enter your name
              </Form.Message>
            </Form.Field>
            <Form.Field name="phone">
              <Form.Label className='block mb-2'>{t('phone')}</Form.Label>
              <Form.Control asChild required>
                <Input type='tel' placeholder={t('phone_number')} name="phone" />
              </Form.Control>
              <Form.Message className="text-left mt-1 text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
                Please enter your phone number
              </Form.Message>
            </Form.Field>
            <Form.Field name="email">
              <Form.Label className='block mb-2'>{t('email')}</Form.Label>
              <Form.Control type='email' asChild required>
                <Input placeholder={t('email_address')} type='email' name="email" />
              </Form.Control>
              <Form.Message className="text-left mt-1 text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
                Please enter your email
              </Form.Message>
            </Form.Field>
            <Form.Field name="body">
              <Form.Label className='block mb-2'>{t('message')}</Form.Label>
              <Form.Control asChild required>
                <TextArea placeholder={t('message')} name="message" />
              </Form.Control>
              <Form.Message className="text-left mt-1 text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
                Please enter your message
              </Form.Message>
            </Form.Field>
            <Form.Submit asChild className="mt-4">
              <Button type="submit" >
                {/* {loading ? (
                  <>
                    Submitting
                    <img src="/assets/loading-gif.gif" alt="loading" className="inline" />
                  </>
                ) : ( */}
                  {t('submit')}
                {/* )} */}
              </Button>
            </Form.Submit>
          </Form.Root>
        </div>
        <ul className="flex gap-2 mt-7 md:hidden">
          <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaFacebook /> </li>
          <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaTwitter /> </li>
          <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"><FaInstagram /> </li>
          <li className="bg-gray-600 hover:bg-[#003285] hover:cursor-pointer p-3 rounded-full"> <FaLinkedinIn /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
