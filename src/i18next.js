import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { All, All_ar, backEnd, backEnd_ar, PROJECTS, PROJECTS_ar, PROJECTSVideos, PROJECTSVideos_ar } from "./constants";

i18next.use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                Technologies: "Technologies",
                nav: {
                    About: "About"
                    , Technology: "Technology"
                    , Home: "Home"
                    , Tutorial: "Tutorial"
                    , Contact: "Contact",
                    name: "BW",
                    lang:
                        [
                            { code: "en", name: "English" },
                            { code: "ar", name: "Arabic" },
                        ]
                    ,
                },
                hero: {
                    cv: "Download My Cv",
                    typeWriterWords: `I'am`,
                    name: "Bahaa Wafy",
                    HERO_CONTENT: `
                    I'm a Third-year IT Student My position is Mern Stack  Developer specializing in React.js , Next.js , Node.js and MongoDB My
coding wand crafts enchanting, user-focused web experiences, blending innovation and functionality into
seamless interaction. Driven by a passion for the extraordinary, every line of code I write is a step towards
redefining the ordinary.
                    `
                },
                About: {
                    head: {
                        about: "About",
                        me: "Me",
                    }
                    , title: `
I am a passionate MERN stack developer with a strong foundation in building full-stack applications. My expertise spans modern technologies like Next.js, React, Nest.js, MongoDB, Express, and JWT. With a focus on delivering efficient, scalable, and user-friendly solutions, I enjoy working on both front-end and back-end development. I'm always eager to explore new technologies and contribute to innovative projects that push the boundaries of web development`
                },
                experience: {
                    head: "Experience",
                    data: [
                        {
                            year: "oct2023 to oct2024",
                            role: "Full Stack Developer",
                            company: "Route Academy",
                            description: `Completed intensive training in Full Stack Web Development at Route Academy, focusing on React.js and Node.js, under the mentorship of Amira Ezaat and Ahmed Abd Al-Muti, gaining practical experience in creating dynamic and scalable web applications.`,
                            technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Node.js", "Express.js", "JWT", "Postman"],
                        },
                    ]
                },
                Education: {
                    head: "My Education",
                    where: "Delta University For Science & Technology",
                    when: "2022 - 2026",
                    what: "Student in Technology",
                },
                Projects: {
                    front: "Front",
                    back: "Back",
                    all: "ALL",
                    head: "Projects",
                    OtherProjects: "Other Projects",
                    data: {
                        front: PROJECTS,
                        back: backEnd,
                        all: All,
                        PROJECTSVideos: PROJECTSVideos

                    }
                },
                Contact: {
                    head: "Contact Us",
                    title: `Contact us for more information and Get notified when publish something new`,
                    palceholderEmail: `Email Address:`,
                    palceholderMessage: `Your Message:`,
                    submit: `Submit`,
                }
            }
        },
        ar: {
            translation: {
                Technologies: "التقنيات",
                nav: {
                    About: "حول"
                    , Technology: "التكنولوجيا"
                    , Home: "الرئيسية"
                    , Tutorial: "دليل تعليمي"
                    , Contact: "اتصل بنا",
                    name: "ب و",
                    lang:
                    [
                        { code: "en", name: "انجلش" },
                        { code: "ar", name: "عربى" },
                    ],
                },
                hero: {
                    cv: "تحميل سيرتي الذاتية",
                    typeWriterWords: `انا`,
                    name: "بهاء وافى",
                    HERO_CONTENT: `أنا طالب في السنة الثالثة في تخصص تكنولوجيا المعلومات، وأعمل كمطور MERN Stack متخصص في React.js و Next.js و Node.js و MongoDB.
أستخدم شفراتي البرمجية لصنع تجارب ويب ساحرة تركز على المستخدم، حيث أمزج بين الابتكار والوظائف لإنشاء تفاعل سلس. مدفوعًا بشغفي لخلق تجارب استثنائية، أعتبر كل سطر من الكود خطوة نحو إعادة تعريف المعتاد.`
                },
                About: {
                    head: {
                        about: "عنى",
                        me: "",
                    }
                    , title: `أنا مطور MERN Stack شغوف، ولدي أساس قوي في بناء تطبيقات الويب الكاملة. أمتلك خبرة في التقنيات الحديثة مثل Next.js، React، Nest.js، MongoDB، Express، وJWT. أركز على تقديم حلول فعالة، قابلة للتطوير، وسهلة الاستخدام، وأستمتع بالعمل على كل من الواجهة الأمامية والخلفية. أسعى دائمًا لاكتشاف تقنيات جديدة والمساهمة في مشاريع مبتكرة تدفع حدود تطوير الويب.`
                },
                experience: {
                    head: "الخبرة",
                    data: [
                        {
                            year: "أكتوبر 2023 إلى أكتوبر 2024",
                            role: "مطور Full Stack",
                            company: "Route Academy",
                            description: `أكملت تدريبًا مكثفًا في تطوير الويب الكامل في Route Academy، مع التركيز على React.js و Node.js، تحت إشراف أميرة عزت وأحمد عبد المعطي، مما أتاح لي اكتساب خبرة عملية في إنشاء تطبيقات ويب ديناميكية وقابلة للتطوير.`,
                            technologies: [
                                "JavaScript",
                                "React.js",
                                "Next.js",
                                "MongoDB",
                                "Node.js",
                                "Express.js",
                                "JWT",
                                "Postman"
                            ]
                        }
                    ]
                },
                Education: {
                    head: "تعليمي",
                    where: "جامعة الدلتا للعلوم والتكنولوجيا",
                    when: "2022 - 2026",
                    what: "طالب في مجال التكنولوجيا"
                },
                Projects: {
                    front: "الواجهة الأمامية",
                    OtherProjects: "مشاريع اخرى",
                    back: "الواجهة الخلفية",
                    all: "الكل",
                    head: "المشاريع",
                    data: {
                        front: PROJECTS_ar,
                        back: backEnd_ar,
                        all: All_ar,
                        PROJECTSVideos: PROJECTSVideos_ar
                    }
                },
                Contact: {
                    head: "اتصل بنا",
                    title: "تواصل معنا لمزيد من المعلومات واحصل على إشعارات عند نشر شيء جديد",
                    palceholderEmail: "البريد الإلكتروني:",
                    palceholderMessage: "رسالتك:",
                    submit: "إرسال",
                }
            }
        },
    }
})


export default i18next;