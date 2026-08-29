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