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

export interface Articles {
  name: string;
  type: string;
  demo: string;
  tag: string;
  date: string;
  featured?: boolean;
}

export const articles: Articles[] = [
  {
    name: "DNS: How Your Browser Finds a Website",
    type:
      "A breakdown of the DNS lookup chain, from your browser's cache to root and authoritative servers.",
    demo: "https://medium.com/@ireneagigiba/dns-how-your-browser-finds-a-website-6b20b48049ec",
    tag: "networking",
    date: "Aug 2026",
  },
  {
    name: "Django Architecture",
    type:
      "Explains how Django's MVT architecture and URL dispatcher work together to create structured and scalable applications.",
    demo: "https://medium.com/@ireneagigiba/django-architecture-495b643c2e3e",
    tag: "backend",
    date: "Jun 2026",
    featured: true,
  },
  {
    name: "Hoisting in JavaScript",
    type:
      "A simple explanation of JavaScript hoisting, execution context, and memory allocation.",
    demo: "https://akawin.hashnode.dev/hoisting-titlein-js",
    tag: "javascript",
    date: "May 2026",
  },
  {
    name: "How the Internet Works",
    type: "An explanation of what happens when you search on the internet.",
    demo: "https://medium.com/@ireneagigiba/how-the-internet-works-518686933e98",
    tag: "networking",
    date: "Mar 2026",
  },
];


export interface Contribution {
  name: string;
  repo: string;
  badge: string;
  description: string;
  link: string;
  linkText: string;
}

export const contributions: Contribution[] = [
  {
    name: "djangocms-stories",
    repo: "django-cms",
    badge: "merged",
    description:
      "Traced a signal bug causing publish dates to never be set, and wired the fix into djangocms-versioning.",
    link: "https://github.com/django-cms/djangocms-stories/pull/89",
    linkText: "View pull request",
  },
  {
    name: "Djangonaut Space",
    repo: "2026",
    badge: "mentee",
    description:
      "Completed an 8-week Django mentorship with weekly code reviews and maintainer pairing.",
    link: "https://djangonaut.space/",
    linkText: "View program",
  },
  {
    name: "workshop-registration",
    repo: "djangocampus",
    badge: "PR merged",
    description:
      "Built a searchable country dropdown for 70+ countries and fixed dialog responsiveness on small screens.",
    link: "https://github.com/djangocampus/workshop-registration/pull/10",
    linkText: "View pull request",
  },
  {
    name: "djangocampus-ui",
    repo: "djangocampus",
    badge: "PR merged",
    description:
      "Swapped social icons for accessible Lucide icons with ARIA labels and array-mapped quick links.",
    link: "https://github.com/djangocampus/djangocampus-ui/pull/13",
    linkText: "View pull request",
  },
];