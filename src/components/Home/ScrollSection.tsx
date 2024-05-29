import { CSSProperties } from "react";
interface IProps {
  title?: string;
  bgImage?: string;
}
const ScrollSection = (props: IProps) => {
  const { title, bgImage } = props;
  const backgroundImg = bgImage ?? "/assets/view-3.jpeg";
  const backgroundImage: CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  } 
  return (
    <footer style={backgroundImage} className="h-[300px] md:h-[650px] bg-center bg-fixed relative grid place-items-center">
      <h3 className="mt-10 text-white text-xl md:text-3xl">{title}</h3>
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
    </footer>
  )
}

export default ScrollSection;
