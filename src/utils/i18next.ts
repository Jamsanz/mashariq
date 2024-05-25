import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      ar: {
        translation: {
          "Protecting Your Digital Future": "حماية مستقبلك الرقمي",
          banner_description:
            "في مشارق، نحن ملتزمون بحماية بياناتك والدفاع ضد التهديدات السيبرانية وضمان سلامتك على الإنترنت. حلولنا المتطورة وفريقنا الخبير يوفران حماية لا مثيل لها للشركات والأفراد على حد سواء. ابقَ آمنًا، ابقَ واثقًا.",
          contact_us: "تواصل معنا",
          who_we_are_title: " من نحن",
          who_we_are_description:
            "شركة مشارق لتقنية المعلومات هي شركة سعودية تقدم خدمات رائدة في مجال الأمن السيبراني عبر مجموعة من الخبراء و الاستشاريين. تعمل الشركة بالتفاعل مع رؤية المملكة 2030 وصولاً إلى اقتصاد مزدهر ، وطن طموح، و مجتمع حيوي عبر تعزيز ثقافة التميز في القطاعين العام والخاص. توفر مشارق حلولا وخدمات متكاملة في كل من الاستشارات والتدريب والحلول التقنية. حيث نلبي احتياجات قطاعات متعددة. نعتمد على خبرتنا بشكل رئيسي في تطوير الحلول التي ستمنح عملائنا فرصة حقيقية للنمو والازدهار للوصول لفضاء سيبراني سعودي آمن وموثوق.",
          home: "الرئيسية",
          about_us: "من نحن",
          services: "الخدمات",
          tech_soln: "الحلول التقنية",
          awareness: "التوعية والتدريب",
          contact: "تواصل معنا",
          our_mission: "مهمتنا",
          our_vision: "رؤيتنا",
          our_values: "قيمتنا",
          mission:
            "تتمثل مهمتنا في توفير خدمات استشارية ومدارة وحلول برمجية مبتكرة وموثوقة واقتصادية لعملائنا. نسعى بشغف لتوفير تقنية ذكية تحل مشاكل العمل لدى عملائنا وأن ندعم ثقتهم في مجال المن السيبراني.",
          vision:
            " وتتلخص رؤيتنا في خلق منتجات أكثر استدامة وتنفيذها بشكل يؤدي إلى خلق أعمالا أكثر استدامة ومستقبلا أفضل.",
          values:
            "نحن نتمسك بالنزاهة، ونسعى جاهدين لتحقيق التميز، ونحتضن الابتكار، ونعطي الأولوية لرضا العملاء. إن التزامنا بالأمن والتعاون والاستدامة والتعلم المستمر يحدد نهجنا ويقود نجاحنا",
        },
      },
      en: {
        translation: {
          "Protecting Your Digital Future": "Protecting Your Digital Future",
          banner_description:
            "At Mashariq, we are dedicated to safeguarding your data, defending against cyber threats, and ensuring your online safety. Our cutting-edge solutions and expert team provide unparalleled protection for businesses and individuals alike. Stay secure, stay confident.",
          home: "Home",
          about_us: "About Us",
          contact: "Contact",
          contact_us: "Contact Us",
          services: "Services",
          tech_soln: "Technical Solutions",
          awareness: "Awareness & Training",
          who_we_are_title: "Who We Are",
          our_mission: "Our Mission",
          our_vision: "Our Vision",
          our_values: "Our Values",
          who_we_are_description:
            "Mashreq Information Technology Company is a Saudi company that provides pioneering services in the field of cybersecurity through a group of experts and consultants. The company works in interaction with the Kingdom’s Vision 2030 to achieve a prosperous economy, an ambitious nation, and a vibrant society by promoting a culture of excellence in the public and private sectors. Mashreq provides integrated solutions and services in consulting, training, and technology solutions. We meet the needs of multiple sectors. We rely mainly on our experience to develop solutions that will give our customers a real opportunity to grow and prosper in accessing a safe and reliable Saudi cyberspace.",
          mission:
            "Our mission is to provide innovative, reliable and economical consulting, managed services and software solutions to our clients. We passionately strive to provide smart technology that solves our customers' business problems and support their confidence in the field of cybersecurity.",
          vision:
            "Our vision is to create more sustainable products and implement them in a way that leads to creating a more sustainable business and a better future.",
          values:
            "We uphold integrity, strive for excellence, embrace innovation, and prioritize customer satisfaction. Our commitment to security, collaboration, sustainability, and continuous learning defines our approach and drives our success.",
        },
      },
    },
  });

export default i18next;
