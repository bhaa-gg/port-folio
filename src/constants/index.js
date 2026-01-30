import project1 from '../assets/MyImg/Screenshot (274).png'
import project2 from '../assets/MyImg/Screenshot (275).png'
import project3 from '../assets/MyImg/Screenshot (276).png'
import project4 from '../assets/MyImg/Screenshot (277).png'
import project5 from '../assets/MyImg/Screenshot (278).png'
import project6 from '../assets/MyImg/Screenshot (279).png'

export const HERO_CONTENT = `I'm a Third-year IT Student My position is Mern Stack  Developer specializing in React.js , Next.js , Node.js and MongoDB My
coding wand crafts enchanting, user-focused web experiences, blending innovation and functionality into
seamless interaction. Driven by a passion for the extraordinary, every line of code I write is a step towards
redefining the ordinary.`

export const ABOUT_TEXT = `
I am a dedicated and versatile Front-End developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL,, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`

export const ABOUT_TEXT_2 = `
I am a passionate MERN stack developer with a strong foundation in building full-stack applications. My expertise spans modern technologies like Next.js, React, Nest.js, MongoDB, Express, and JWT. With a focus on delivering efficient, scalable, and user-friendly solutions, I enjoy working on both front-end and back-end development. I'm always eager to explore new technologies and contribute to innovative projects that push the boundaries of web development.`

export const EXPERIENCES = [
  {
    year: 'oct2023 to oct2024',
    role: 'Full Stack Developer',
    company: 'Route Academy',
    description: `Completed intensive training in Full Stack Web Development at Route Academy, focusing on React.js and Node.js, under the mentorship of Amira Ezaat and Ahmed Abd Al-Muti, gaining practical experience in creating dynamic and scalable web applications.`,
    technologies: [
      'Javascript',
      'React.js',
      'Next.js',
      'mongoDB',
      'Node.js',
      'Express.js',
      'JWT',
      'Postman',
    ],
  },
]

export const PROJECTSVideos = [
  {
    title: 'Snapcart Application',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7422283439342616576?compact=1',
  },
  {
    title: 'Super Market Management',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7291116439153893382?compact=1',
  },
  {
    title: 'Bw Book',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271298034263629825?compact=1',
  },
  {
    title: 'Udemy Application',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237250289823608832?compact=1',
  },
  {
    title: 'Socket io Application',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234459206437789696?compact=1',
  },
]
export const PROJECTS = [
  {
    type: 'FullStack',
    title: 'Snapcart',
    image:
      'https://res.cloudinary.com/dlzkz7mdq/image/upload/v1769807750/snapCartBanner_p80dyj.png',
    demo: 'https://snapcarts.vercel.app/',
    description:
      'Snapcart is a real-time full-stack grocery delivery platform connecting users, admins, and delivery partners. Users can browse groceries, place orders, track deliveries live on the map, and chat directly with delivery partners. Admins can broadcast orders, analyze locations, and assign deliveries to nearby drivers, who can accept or reject requests. The platform also includes an AI-powered chat assistant for smart messaging and a seamless delivery experience.',
    technologies: [
      'Next.js',
      'React',
      'Angular',
      'Nest.js',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'Framer Motion',
      'Socket.IO',
      'Cloudinary',
    ],
  },

  {
    type: 'Front',
    title: 'Frech Cart',
    image: project1,
    demo: 'https://ecommerc-pop.netlify.app',
    description:
      'Fresh Cart Application , your ultimate online shopping destination for fresh groceries and everyday essentials. Designed to make your shopping experience seamless and enjoyable, Fresh Cart offers a wide range of high-quality products delivered right to your doorstep.',
    technologies: ['HTML', 'CSS', 'React', 'React Hooks', 'Bootstrap'],
  },
  {
    type: 'Front',
    title: 'Weather',
    image: project2,
    demo: 'https://bhaa-gg.github.io/Bh_WetherApp/',
    description:
      'This website Show for You the Weather for duration of 3 Days , You Can search by inputs in your city.',
    technologies: ['HTML', 'CSS', 'JavaScript', ' Weather Api'],
  },
  {
    type: 'Front',
    title: 'Book Marker',
    image: project3,
    demo: 'https://bhaa-gg.github.io/Bh_Bookmarker/',
    description: `This website User can enter name of bookmark , and Url Website , and save in table , and user can visit 
    this website and Can be adjusted to name and url of bookmark , can delete bookmark from table.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    type: 'Front',
    title: 'Yummy',
    image: project4,
    demo: 'https://bhaa-gg.github.io/Bh_Yummy/',
    description: `This website shows some meals and how they are prepared through articles and YouTube and also 
shows you the meals assigned to the area where they are located and also you can search for a specific 
meal by entering the first letter or the name of the meal.`,
    technologies: ['HTML', 'CSS', 'JQuery', 'JavaScript', 'Bootstrap'],
  },
  {
    type: 'Front',
    title: 'Smart login',
    image: project6,
    demo: 'https://bhaa-gg.github.io/Bh-SmartLoginSystem/',
    description:
      'This website user can signup ,By , Gmail and Name , Password , and signIn to his page.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Regex', 'Sweetalert'],
  },
  {
    type: 'Front',
    title: 'Notes App',
    image: project5,
    demo: 'https://note-bhaa.netlify.app/',
    description: 'This website provide for user take his note without damage or lose data.',
    technologies: ['HTML', 'CSS', 'React', 'Font awesome'],
  },
]

export const backEnd = [
  {
    type: 'Back',
    title: 'Jop Search Application',
    image: 'https://assets.roadmap.sh/guest/backend-project-ideas-zxutw.jpg',
    demo: 'https://github.com/bhaa-gg/jop_Search',
    description: 'To Make Website Like LinkedIn .',
    technologies: ['Express', 'Sqlize', 'JWT', 'Node.js'],
  },
  {
    type: 'Back',
    title: 'Ecommerce Application',
    image: 'https://assets.roadmap.sh/guest/backend-project-ideas-zxutw.jpg',
    demo: 'https://github.com/bhaa-gg/BK_Ecommerce',
    description:
      'A scalable and secure backend for an e-commerce app, enabling user authentication, product management, order processing, payment integration, and real-time notifications. .',
    technologies: [
      'Express',
      'JWT',
      'Node.js',
      'Mongoose',
      'MongoDb',
      'stripe',
      'Socket.io',
      'Cloudinary',
    ],
  },
]

const Alls = JSON.parse(JSON.stringify(PROJECTS.concat(backEnd)))
export const All = Alls.map((e) => {
  e.type = 'All'
  return e
})

export const Other = [
  {
    type: 'Other',
  },
]

export const CONTACT = {
  address: 'Egypt , Alexandia , Amria',
  phoneNo: '01210031428 ',
  email: 'bhaatiti281@gmail.com',
}

export const PROJECTSVideos_ar = [
  {
    title: 'إدارة السوبر ماركت',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7291116439153893382?compact=1',
  },
  {
    title: 'Bw Book',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7271298034263629825?compact=1',
  },
  {
    title: 'تطبيق Udemy',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7237250289823608832?compact=1',
  },
  {
    title: 'تطبيق Socket.io',
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7234459206437789696?compact=1',
  },
]

export const PROJECTS_ar = [
  {
    type: 'الواجهة الأمامية',
    title: 'عربة التسوق الطازجة',
    image: project1,
    demo: 'https://ecommerc-pop.netlify.app',
    description:
      'تطبيق Fresh Cart، وجهتك المثالية للتسوق عبر الإنترنت للمواد الغذائية الطازجة والأساسيات اليومية. تم تصميمه لجعل تجربة التسوق الخاصة بك سلسة وممتعة، حيث يوفر مجموعة واسعة من المنتجات عالية الجودة يتم توصيلها مباشرة إلى باب منزلك.',
    technologies: ['HTML', 'CSS', 'React', 'React Hooks', 'Bootstrap'],
  },
  {
    type: 'الواجهة الأمامية',
    title: 'تطبيق الطقس',
    image: project2,
    demo: 'https://bhaa-gg.github.io/Bh_WetherApp/',
    description: 'يعرض هذا الموقع حالة الطقس لمدة 3 أيام، ويمكنك البحث عن طريق إدخال اسم مدينتك.',
    technologies: ['HTML', 'CSS', 'JavaScript', ' Weather Api'],
  },
  {
    type: 'الواجهة الأمامية',
    title: 'مدير العلامات المرجعية',
    image: project3,
    demo: 'https://bhaa-gg.github.io/Bh_Bookmarker/',
    description:
      'يمكن للمستخدم إدخال اسم العلامة المرجعية ورابط الموقع وحفظه في جدول، ويمكنه زيارة الموقع وإجراء تعديلات على الاسم أو الرابط، وكذلك حذف العلامات المرجعية.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    type: 'الواجهة الأمامية',
    title: 'تطبيق Yummy',
    image: project4,
    demo: 'https://bhaa-gg.github.io/Bh_Yummy/',
    description:
      'يعرض هذا الموقع بعض الوجبات وكيفية تحضيرها من خلال المقالات واليوتيوب، كما يعرض الوجبات الخاصة بالمناطق المختلفة، ويمكن البحث عن وجبة معينة بإدخال الحرف الأول أو اسم الوجبة.',
    technologies: ['HTML', 'CSS', 'JQuery', 'JavaScript', 'Bootstrap'],
  },
  {
    type: 'الواجهة الأمامية',
    title: 'تسجيل الدخول الذكي',
    image: project6,
    demo: 'https://bhaa-gg.github.io/Bh-SmartLoginSystem/',
    description:
      'يمكن للمستخدم التسجيل عبر البريد الإلكتروني والاسم وكلمة المرور، ثم تسجيل الدخول إلى صفحته الخاصة.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Regex', 'Sweetalert'],
  },
  {
    type: 'الواجهة الأمامية',
    title: 'تطبيق الملاحظات',
    image: project5,
    demo: 'https://note-bhaa.netlify.app/',
    description: 'يوفر هذا الموقع للمستخدم إمكانية تدوين ملاحظاته دون فقدان البيانات.',
    technologies: ['HTML', 'CSS', 'React', 'Font awesome'],
  },
]

export const backEnd_ar = [
  {
    type: 'الواجهة الخلفية',
    title: 'تطبيق البحث عن الوظائف',
    image: 'https://assets.roadmap.sh/guest/backend-project-ideas-zxutw.jpg',
    demo: 'https://github.com/bhaa-gg/jop_Search',
    description: 'إنشاء موقع يشبه LinkedIn للبحث عن الوظائف.',
    technologies: ['Express', 'Sequelize', 'JWT', 'Node.js'],
  },
  {
    type: 'الواجهة الخلفية',
    title: 'تطبيق التجارة الإلكترونية',
    image: 'https://assets.roadmap.sh/guest/backend-project-ideas-zxutw.jpg',
    demo: 'https://github.com/bhaa-gg/BK_Ecommerce',
    description:
      'نظام خلفي آمن وقابل للتطوير لتطبيق التجارة الإلكترونية، يدعم تسجيل المستخدمين، إدارة المنتجات، معالجة الطلبات، تكامل الدفع، والإشعارات الفورية.',
    technologies: [
      'Express',
      'JWT',
      'Node.js',
      'Mongoose',
      'MongoDB',
      'Stripe',
      'Socket.io',
      'Cloudinary',
    ],
  },
]

const Alls_ar = JSON.parse(JSON.stringify(PROJECTS_ar.concat(backEnd_ar)))
export const All_ar = Alls_ar.map((e) => {
  e.type = 'All'
  return e
})
