import profile from '../assets/Irene.jpg'

export default function About() {
    return (
        <section id="about">
            <div className="max-w-4xl mx-auto my-10 px-6 md:px-0">
                <p className="text-white mb-4">
                    // <span className="text-(--special-color)">about</span>
                </p>
                <h2 className="text-white font-bold text-3xl">
                    About me
                </h2>
                <div className="grid grid-cols-[1fr] md:grid-cols-[1.4fr_1fr] gap-12 items-start mt-5">
                    <div className="text-gray-200">
                        <p className="mb-4">
                            I'm a software engineer from Ghana who enjoys turning ideas
                            into practical, reliable, and user-friendly applications.
                            I primarily work with React, TypeScript, JavaScript, Django,
                            Django REST Framework, and PostgreSQL, building both the
                            interfaces people interact with and the systems behind them.
                        </p>

                        <p className="mb-4">
                            I enjoy understanding how things work beneath the surface,
                            from designing REST APIs and authentication systems to
                            building responsive interfaces and connecting applications
                            to databases. I'm also interested in cybersecurity and how
                            software can be designed with security in mind from the
                            beginning.
                        </p>

                        <p className="mb-4">
                            Beyond software development, I have a strong interest in
                            agriculture and the potential of technology to create better
                            opportunities for farmers and young people. I'm constantly
                            learning, building projects, contributing to open-source
                            communities, and looking for opportunities to grow alongside
                            other engineers.
                        </p>
                    </div>

                    <div className="border border-gray-700 rounded-lg p-5">
                        <div className="w-full border border-gray-700 rounded-lg overflow-hidden">
                            <img
                                src={profile}
                                alt="Irene Agigba"
                                className="w-full h-full object-cover block"
                            />
                        </div>

                        <dl className="grid grid-cols-[auto_1fr] m-0 gap-6 text-gray-200 mt-5">
                            <dt>Currently in</dt>
                            <dd className="m-0">Ghana</dd>

                            <dt>experience</dt>
                            <dd className="m-0">Software Engineering</dd>

                            <dt>focus</dt>
                            <dd className="m-0">Full Stack Development</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-700"></div>
        </section>
    )
}