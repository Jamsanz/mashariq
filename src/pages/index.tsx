import AboutUs from "../components/Home/AboutUs";
import ScrollSection from "../components/Home/ScrollSection";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Service";
import { OurService } from "../utils/variables";
import { MdOutlineSecurity } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import Footer from "../components/Home/Footer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <AboutUs />
      <ScrollSection title={t("cyber_partner")} />
      <Services
        title={t("what_we_do")}
        info={{
          ...OurService[0],
          title: t("what_we_do_title"),
          description: t("what_we_do_description"),
        }}
        icon={<MdOutlineSecurity className="h-6 w-6 md:h-12 md:w-12 mx-auto" />}
      />
      <ScrollSection title={t("secure_future")} />
      <Services
        title={t("how_help")}
        info={{
          ...OurService[1],
          title: t("how_help_title"),
          description: t("how_help_description"),
        }}
        icon={<FiHelpCircle className="h-6 w-6 md:h-12 md:w-12 mx-auto" />}
      />
      <Footer />
    </>
  );
};

export default Home;
