import { PiTargetDuotone } from "react-icons/pi";
import { HiOutlineEye } from "react-icons/hi";
import { IoDiamondOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="about-us" className="max-w-5xl mx-auto mb-8 px-6 sm:px-7 md:px-8 lg:px-12 xl:px-0">
      <div data-aos="fade-left" className="max-w-2xl mx-auto my-8 flex flex-col gap-y-4 md:gap-y-7 text-center bg-white h-[400px]">
        <img src={'/assets/encrypted.png'} className="h-6 w-6 md:h-12 md:w-12 mx-auto" alt="key" />
        <h2 className="font-jakarta text-lg md:text-5xl text-center font-medium tracking-tighter">{t('who_we_are_title')}</h2>
        <p className="text-justify tracking-tight">
          {t('who_we_are_description')}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div
          data-aos="fade-up"
          data-testid="service-card"
          className={`pl-[30px] flex-1 hover:bg-[#003285] hover:text-white max-w-[400px] shadow md:max-w-[340px] lg:max-w-[384px] pr-[22px] cursor-pointer md:!px-[30px] py-10 rounded-2xl hover:shadow-md`}
        >
          <PiTargetDuotone className="block mb-6 md:mb-10 w-10 h-10 md:w-20 md:h-20" />
          <h3 className="text-[18px] md:text-[22px] md:tracking-[-0.44px] font-semibold mb-4 font-jakarta">
            {t('our_mission')}
          </h3>
          <p className="mb-6 md:tracking-[-0.32px]">{t('mission')}</p>
        </div>
        <div
          data-aos="fade-up"
          data-testid="service-card"
          className={`pl-[30px] flex-1 hover:bg-[#003285] hover:text-white max-w-[400px] shadow md:max-w-[340px] lg:max-w-[384px] pr-[22px] cursor-pointer md:!px-[30px] py-10 rounded-2xl hover:shadow-md`}
        >
          <HiOutlineEye className="block mb-6 md:mb-10 w-10 h-10 md:w-20 md:h-20" />
          <h3 className="text-[18px] md:text-[22px] md:tracking-[-0.44px] font-semibold mb-4 font-jakarta">
            {t('our_vision')}
          </h3>
          <p className="mb-6 md:tracking-[-0.32px]">{t('vision')}</p>
        </div>
        <div
          data-aos="fade-up"
          data-testid="service-card"
          className={`pl-[30px] flex-1 hover:bg-[#003285] hover:text-white max-w-[400px] shadow md:max-w-[340px] lg:max-w-[384px] pr-[22px] cursor-pointer md:!px-[30px] py-10 rounded-2xl hover:shadow-md`}
        >
          <IoDiamondOutline className="block mb-6 md:mb-10 w-10 h-10 md:w-20 md:h-20" />
          <h3 className="text-[18px] md:text-[22px] md:tracking-[-0.44px] font-semibold mb-4 font-jakarta">
            {t('our_values')}
          </h3>
          <p className="mb-6 md:tracking-[-0.32px]">{t('values')}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
