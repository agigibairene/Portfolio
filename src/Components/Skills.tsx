import { langs } from '../utils/skillData';

export default function Skills() {
    return (
        <section className="max-w-4xl mx-auto mt-36">
            <p className='text-white'>// <span className='text-(--special-color)'>tools</span></p>

            <h2 className="text-white font-bold text-3xl">
                Langs, Tools and Frameworks I use
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {langs.map((category) => (
                    <div
                        className="bg-(--card-color) rounded-xl p-6 shadow-md"
                        key={category.name}
                    >
                        {/* Card title */}
                        <h2 className="text-white mb-3">{category.name}</h2>

                        {/* Skills inside this card */}
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-sm bg-white/10 text-white px-2 py-1 rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}