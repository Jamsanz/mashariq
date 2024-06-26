import { Typewriter } from "react-simple-typewriter";
import Header from "../Header"
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const { t } = useTranslation();


  const heroImageBackgroundWrapper: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url("/assets/view-3.jpeg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <header
      style={heroImageBackgroundWrapper}
      className="h-[65vh] md:h-screen lg:bg-fixed relative bg-bottom md:bg-bottom"
    >
      <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 left-0 w-full" />
      <Header />
      <div className="md:h-[calc(100vh-172px)] mt-6 md:mt-0 w-full grid place-items-center">
        <div className="text-center my-auto">
          <h1 className="text-white text-center tracking-[-2.08px] text-[32px] max-w-[300px] sm:max-w-none md:text-[50px] xl:text-[64px] 3xl:text-[75px] font-extrabold mb-6">
            <Typewriter
              words={[t("Protecting Your Digital Future")]}
              cursor={false}
              typeSpeed={70}
              delaySpeed={1000}
            />
          </h1>
          <p className="3xl:text-[24px] font-roboto mx-auto max-w-[300px] md:max-w-[500px] text-white mb-10 xl:max-w-[699px]">
            {t('banner_description')}
          </p>
          <a className="px-6 lg:py-3 hover:bg-[#003285] font-medium hover:text-white w-fit border text-lg border-black rounded-full py-2 fold:text-xs inline-flex gap-2 justify-center items-center bg-[#fff] border-none text-center text-[#212121]" href="#contact-us"> {t('contact_us')} </a>
        </div>
        <div className="w-full absolute md:block -bottom-1 ">
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
      </div>
    </header>
  )
}

export default Hero