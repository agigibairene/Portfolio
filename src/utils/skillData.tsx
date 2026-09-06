import discoverBooks from "../assets/book-discover.png";
import seedlinq from "../assets/seedlinq.png";
import netflix from "../assets/netflix.png";
import portfolio from "../assets/portfolio.png";

export interface SkillCategory {
    name: string;
    skills: string[];
}

export const langs: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Dart'],
    },
    {
        name: 'Tools',
        skills: ['Git', 'Docker', 'Linux'],
    },
    {
        name: 'Frameworks',
        skills: ['React', 'Django', 'Next.js'],
    },
];

export interface Project{
    image: string
    name: string
    type: string
    desc: string
    github: string
    demo: string
}

export const projects : Project[] = [
    {
      image: seedlinq,
      name: "SEEDLINQ",
      type: "React-TS / Django",
      desc: "Connecting farmers with investors through a full-stack crowdfunding platform.",
      github: "https://github.com/agigibairene/Capstone_project",
      demo: "https://seedlinq.vercel.app/",
    },
    {
      image: discoverBooks,
      name: "Discover Books",
      type: "React-TS / Node.js",
      desc: "A book discovery platform with search, filtering, and personalized browsing experience.",
      github: "https://github.com/agigibairene/Discover_BookHub",
      demo: "https://discovery-app-five.vercel.app/",
    },
    {
      image: netflix,
      name: "NetflixGPT",
      type: "ReactJS / Firebase",
      desc: "AI-powered movie recommendation app inspired by Netflix UI and Mistral-AI suggestions.",
      github: "https://github.com/agigibairene/Netflix-gpt",
      demo: "https://netflix-gpt-seven-smoky.vercel.app/",
    },
    {
      image: portfolio,
      name: "Portfolio",
      type: "ReactJS",
      desc: "A personal developer portfolio showcasing projects, skills, and technical journey.",
      github: "https://github.com/agigibairene/Portfolio",
      demo: "https://portfolio-hdhr.vercel.app/",
    },
 
];

export interface Articles{
    name: string
    type: string
    demo: string
}

export const articles: Articles[] = [
    {
      name: "{{ Django Architecture }}",
      type:
        "Explains how Django’s MVT architecture and URL dispatcher work together to create structured and scalable applications.",
      demo: "https://medium.com/@ireneagigiba/django-architecture-495b643c2e3e",
    },
    {
      name: "<Hoisting in JavaScript />",
      type:
        "A simple explanation of JavaScript hoisting, execution context, and memory allocation.",
      demo: "https://akawin.hashnode.dev/hoisting-titlein-js",
    },
    {
      name: "How the Internet works",
      type: "An explanation of what happens when you search on the internet",
      demo: "https://medium.com/@ireneagigiba/how-the-internet-works-518686933e98",
    },
]

export const opensource: Articles[] = [
    {
      name: "DjangoCampus UI",
      type: "Improved responsiveness, fixed footer and registration form, added animations, icons, and country dropdown during Hacktoberfest.",
      demo: "https://djangocampus.tech/",
    },
]