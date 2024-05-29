import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { OurService } from "./variables";

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
          what_we_do: "الذي نفعله",
          what_we_do_title: "",
          what_we_do_description:
            "تساعدك خدمات مشارق الإستشارية والمُدارة على تشغيل إدارتك الخاصة بك بشكل أكثر كفاءة وأمانًا. من خلال الاستفادة من خدماتنا، يمكننا زيادة قدراتك التشغيلية وتحسينها في كل من البيئات الجديدة والحالية. يمكن أن تساعد خدماتنا في تعزيز مهاراتك وخبراتك في حوكمة وعمليات الأمن السيبراني كمسرّع قصير المدى أو حل طويل المدى؛ مما يتيح لك التركيز على حوكمة مؤسستك في مجال الأمن السيبراني والإلتزام بتطبيق سياسات الهيئة الوطنية للأمن السيبراني وإدارة مخاطر الأنظمة التقنية فيها. توفر لك الخدمات الإستشارية والمُدارة المرونة التشغيلية، وتعزز الأمان والامتثال، وستساعدك على تحسين السعة واتخاذ الإجراءات اللازمة لتحقيق ميزانياتك المحددة. توفر خدماتنا نموذج تشغيل متسقًا لبيئتك بأكملها من خلال الاستفادة من أفضل ممارسات حواجز الحماية والمراقبة والأمن وإدارة الحوادث لكل من أعباء العمل التقليدية والحديثة.",
          how_help: "كيف تستطيع شركة مشارق لتقنية المعلومات مساعدتك؟",
          how_help_title: "",
          how_help_description: `صُممت خدماتنا لتقديم المساعدة في تأمين منظمتك من خلال التقييم والتنفيذ المناسبين لمعايير الهيئة الوطنية للأمن السيبراني، مع تحقيق الامتثال للتشريعات الوطنية في الوقت نفسه، تتلخص هذه الخدمات في:
            <br />
            <br />
            <ul class="md:mr-3 flex flex-col gap-0.5 items-end">
              <li class="flex"> تحليل الفجوات (Gap Analysis) وإجراء تقييم النضج <span class="ml-2 block">•</span></li>
              <li class="flex">تطبيق الضوابط الأساسية للأمن السيبراني وجميع الضوابط المناسبة لمنظّمتك <span class="ml-2 block">•</span></li>
              <li class="flex">تصميم وتطوير استراتيجية الأمن السيبراني <span class="ml-2 block">•</span></li>
              <li class="flex">تصميم وتطوير سياسات وإجراءات الأمن السيبراني <span class="ml-2 block">•</span></li>
              <li class="flex">تصميم وتطبيق أُطر الأمن السيبراني اللازمة <span class="ml-2 block">•</span></li>
              <li class="flex">تقديم برامج تدريب ونقل المعرفة وتوعية العامل البشري <span class="ml-2 block">•</span></li>
              <li class="flex"> تدقيق ومراجعة نُظم الجودة والحوكمة وإدارة المخاطر <span class="ml-2 block">•</span></li>
              <li class="flex"> تركيب وتشغيل الحلول الأمنية (المادية والإلكترونية) <span class="ml-2 block">•</span></li>
              <li class="flex"> إجراء مراجعة مفصلة وشاملة لوضع الأمن السيبراني في مؤسستك <span class="ml-2 block">•</span></li>
              <li class="flex"> تقديم الاستشارات الموضوعية <span class="ml-2 block">•</span></li>
            </ul>
    `,
          secure_future: "تأمين مستقبلك الرقمي",
          cyber_partner: "شريكك في التميز في مجال الأمن السيبراني",
          see_more: "شاهد المزيد",
          see_less: "انظر أقل",
          mashariq: "مشارق",
          get_in_touch: "ابقى على تواصل",
          get_in_touch_text:
            "نحن نحب أن نسمع منك! سواء كانت لديك أسئلة حول خدماتنا، أو كنت بحاجة إلى الدعم، أو كنت ترغب في استكشاف كيف يمكن لشركة المشرق لتكنولوجيا المعلومات المساعدة في تأمين أصولك الرقمية، فإن فريقنا موجود لمساعدتك. اتصل بنا اليوم ودعنا نعمل معًا لإنشاء فضاء إلكتروني أكثر أمانًا وموثوقية.",
          name: "اسم",
          full_name: "الاسم الكامل",
          phone: "هاتف",
          phone_number: "رقم التليفون",
          email: "بريد إلكتروني",
          email_address: "عنوان البريد الإلكتروني",
          message: "رسالة",
          submit: "يُقدِّم",
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
          what_we_do: "What We do",
          what_we_do_title: OurService[0].title,
          what_we_do_description: OurService[0].description,
          how_help: "How Can We help You?",
          how_help_description: OurService[1].description,
          how_help_title: "",
          secure_future: "Securing Your Digital Future",
          cyber_partner: "Your Partner in Cybersecurity Excellence",
          see_more: "see more",
          see_less: "see less",
          mashariq: "Mashariq",
          get_in_touch: "Get In Touch",
          get_in_touch_text:
            "We'd love to hear from you! Whether you have questions about our services, need support, or want to explore how Mashreq Information Technology Company can help secure your digital assets, our team is here to assist you. Contact us today and let’s work together to create a safer and more reliable cyberspace.",
          name: "Name",
          full_name: "Full Name",
          phone: "Phone",
          phone_number: "Phone Number",
          email: "Email",
          email_address: "Email Address",
          message: "Message",
          submit: "Submit",
        },
      },
    },
  });

export default i18next;
