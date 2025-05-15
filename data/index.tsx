export const myProjects = [
  {
    title: "Animated Apple iPhone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects",
    img: "/p4.svg",
    squareImg: "/assets/projectThumbnails/appleWebsite.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://astounding-entremet-533284.netlify.app/",
    isTop: true,
    githubLink: "https://github.com/EitanBeCe/AppleWebsiteReact",
  },
  {
    title: "Consumrz.com",
    des: "Company I'm currently working in. Creating this amazing powerfull App for more than 3 years",
    img: "/assets/projectThumbnails/consumrz2.webp",
    iconLists: ["/ts.svg"],
    link: "https://consumrz.com/",
    isTop: true,
  },
  {
    title: "Brainwave website",
    des: "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    img: "/assets/projectThumbnails/brainwave2.webp",
    iconLists: ["/ts.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://brainwaive.netlify.app/",
    isTop: true,
    githubLink: "https://github.com/EitanBeCe/Brainwave",
  },
  {
    title: "Employees list - Redux and React",
    link: "https://vocal-dragon-aa24cc.netlify.app/",
    img: "/assets/projectThumbnails/employee.webp",
    des: "The user can add/remove employees, set them 'for raise' with a star and add them a bonus. One can filter employees in different ways and search them. Written on React using Class components.",
    iconLists: ["/re.svg"],
    githubLink: "https://github.com/EitanBeCe/EmployeesListReact",
  },
  {
    title: "Social network - React + TS",
    link: "https://lighthearted-valkyrie-121c98.netlify.app/",
    img: "/assets/projectThumbnails/social-network2.webp",
    des: "Made in 3 days. Login, add/edit/delete posts, likes. Theme changer",
    iconLists: ["/re.svg", "/ts.svg"],
    isTop: true,
    githubLink: "https://github.com/EitanBeCe/social-network",
  },
  {
    title: "Expenses tracker - React",
    link: "https://silly-halva-f811ec.netlify.app/",
    img: "/assets/projectThumbnails/expenses.webp",
    des: "Nice side project created for adding and tracking your expenses. Beautifully and dynamically displays your expenses during the months of the year.",
    iconLists: ["/re.svg"],
    isTop: true,
    githubLink: "https://github.com/EitanBeCe/ExpensesTrackerApp",
  },
  {
    title: "My first Portfolio",
    link: "https://admirable-caramel-c8bf42.netlify.app/",
    img: "/assets/projectThumbnails/firstPortfolio.webp",
    des: "The beginning of my journey in 2022",
    iconLists: ["/ts.svg"],
    isTop: true,
    githubLink: "https://github.com/EitanBeCe/Portfolio",
  },
  {
    // Duplicate for Hero
    title: "Animated Apple iPhone 3D Website.",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects",
    img: "/p4.svg",
    squareImg: "/assets/projectThumbnails/appleWebsite.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://astounding-entremet-533284.netlify.app/",
  },
  {
    title: "Marvel - Marvel API",
    link: "https://wonderful-bunny-bb3b3e.netlify.app/",
    img: "/assets/projectThumbnails/marvel.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  },
  {
    title: "Cart - Redux",
    link: "https://tubular-arithmetic-530f6d.netlify.app/",
    img: "/assets/projectThumbnails/redux_cart2.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  },
  {
    title: "Food cart - React",
    link: "https://reliable-croissant-98be10.netlify.app/",
    img: "/assets/projectThumbnails/food.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  },
  {
    title: "GitHub",
    link: "https://github.com/EitanBeCe",
    img: "/assets/projectThumbnails/github_.webp",
    des: "My GitHub Profile",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
  {
    // Duplicate for Hero with other photo
    title: "Consumrz.com.",
    des: "Company I'm currently working in. Creating this amazing powerfull App for more than 3 years",
    img: "/assets/projectThumbnails/consumrz4.png",
    iconLists: ["/ts.svg"],
    link: "https://consumrz.com/",
  },
  {
    title: "Linkedin",
    link: "https://github.com/EitanBeCe",
    img: "/assets/projectThumbnails/linkedin.webp",
    des: "My profile with all my experience, projects and story",
    iconLists: [],
  },
  {
    // Duplicate for Hero
    title: "Expenses tracker - React.",
    link: "https://silly-halva-f811ec.netlify.app/",
    img: "/assets/projectThumbnails/expenses.webp",
    des: "Nice side project created for adding and tracking your expenses. Beautifully and dynamically displays your expenses during the months of the year.",
    iconLists: ["/re.svg"],
  },
  // {
  //   // Duplicate for Hero
  //   title: "GitHub.",
  //   link: "https://github.com/EitanBeCe",
  //   img: "/assets/projectThumbnails/github.webp",
  //   des: "My GitHub Profile",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  // },
];

const getYearsOfExperience = () => {
  const start = new Date(2022, 0); // jan 2022
  const now = new Date();

  const diffInMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    now.getMonth() -
    start.getMonth();
  const years = diffInMonths / 12;

  return years % 1 === 0 ? `${years}+` : `${Math.floor(years)}.5+`;
};

export const myNumbers = [
  {
    number: getYearsOfExperience(),
    title: "Years of\nExperience",
  },
  {
    number: "30+",
    title: "Projects\nCompleted",
  },
  {
    number: "4",
    title: "Spoken\nLanguages",
  },
  {
    number: "2000+",
    title: "Commits\non Gitlab",
  },
  {
    number: "500+",
    title: "Commits\non Github",
  },
  {
    number: "3000+",
    title: "Happy Clients\non Consumrz.com",
  },
];

// export const mySkills = [
//   {
//     title: "React.js",
//     icon: "/re.svg",
//     appear: [0.05, 0.1],
//     x: "0%",
//     y: "35%",
//   },
//   {
//     title: "Next.js",
//     icon: "/next.svg",
//     appear: [0.1, 0.15],
//     x: "0%",
//     y: "43%",
//   },
//   {
//     title: "JavaScript",
//     icon: "/js.svg",
//     appear: [0.15, 0.2],
//     x: "0%",
//     y: "51vh",
//   },
//   {
//     title: "TypeScript",
//     icon: "/ts.svg",
//     appear: [0.2, 0.25],
//     x: "0%",
//     y: "59%",
//   },
//   {
//     title: "Tailwind",
//     icon: "/tail.svg",
//     appear: [0.25, 0.3],
//     x: "0%",
//     y: "67%",
//   },
//   {
//     title: "Three.js",
//     icon: "/three.svg",
//     appear: [0.3, 0.35],
//     x: "86.3%",
//     y: "35%",
//   },
//   {
//     title: "GSAP",
//     icon: "/gsap.svg",
//     appear: [0.35, 0.4],
//     x: "86.3%",
//     y: "43%",
//   },
//   {
//     title: "SwiftUI",
//     icon: "/swiftUI.svg",
//     appear: [0.4, 0.45],
//     x: "86.3%",
//     y: "51%",
//   },
//   {
//     title: "Java",
//     icon: "/java.svg",
//     appear: [0.45, 0.5],
//     x: "86.3%",
//     y: "59%",
//   },
//   {
//     title: "NovaUI",
//     // icon: "/nova.svg",
//     appear: [0.5, 0.55],
//     x: "86.3%",
//     y: "67%",
//   },
// ];

// type navItems = {
//   name: string;
//   link: string;
//   icon?:
// }[];

export const mySkills = [
  {
    title: "React.js",
    icon: "/re.svg",
    appear: [0.07, 0.46, 0.76],
    x: "6%",
    y: "18%",
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    icon: "/next.svg",
    appear: [0.1, 0.47, 0.76],
    x: "60%",
    y: "30%",
    link: "https://nextjs.org/",
  },
  {
    title: "JavaScript",
    icon: "/js.svg",
    appear: [0.15, 0.48, 0.76],
    x: "42%",
    y: "38%",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "TypeScript",
    icon: "/ts.svg",
    appear: [0.2, 0.49, 0.76],
    x: "26%",
    y: "30%",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "TailwindCSS",
    icon: "/tail.svg",
    appear: [0.25, 0.5, 0.76],
    x: "10%",
    y: "80%",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Three.js",
    icon: "/three.svg",
    appear: [0.3, 0.51, 0.76],
    x: "74%",
    y: "14%",
    link: "https://threejs.org/",
  },
  {
    title: "GSAP",
    icon: "/gsap.svg",
    appear: [0.35, 0.52, 0.76],
    x: "26%",
    y: "66%",
    link: "https://gsap.com",
  },
  {
    title: "SwiftUI",
    icon: "/swiftUI.svg",
    appear: [0.4, 0.53, 0.76],
    x: "72%",
    y: "84%",
    link: "https://developer.apple.com/xcode/swiftui/",
  },
  {
    title: "Java",
    icon: "/java.svg",
    appear: [0.45, 0.54, 0.76],
    x: "50%",
    y: "64%",
    link: "https://www.java.com/en/",
  },
  {
    title: "NovaUI",
    appear: [0.5, 0.55, 0.76],
    x: "40%",
    y: "90%",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    // className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building the Consumrz.com app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for iOS platforms using SwiftUI and NovaUI.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "App Developer at Consumrz.com",
    desc: "Developed a cross-platform App in a startup with our team, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Application Manager, Lead Frontend Developer at Consumrz.com",
    desc: "Developing and maintaining user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/eitan-elberg/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/EitanBeCe",
  },
  // {
  //   id: 3,
  //   img: "/twit.svg",
  // },
];
