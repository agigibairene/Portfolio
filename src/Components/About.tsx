import profile from '../assets/Irene.jpg'


export default function About(){
    return(
        <section className="max-w-4xl mx-auto mt-20">
            <span className="text-[#00abf0]">// about me</span>
            <div className="grid grid-cols-[1fr] md:grid-cols-[1.4fr_1fr] gap-12 items-start mt-5">
                <div className='text-gray-200'>
                    <p className='mb-4'>I'm a software engineer with two years of experience, most of it spent on backend systems that need to hold up under real traffic, not just work on my laptop. I like taking systems apart to see how they actually behave — a slow query, a flaky deploy, a build process nobody wanted to touch.</p>
                    <p className='mb-4'>I care most about code that's easy for the next person to read, including future me. Outside of my day job, I contribute to a couple of small open-source tools and I'm slowly working through building a distributed key-value store from scratch, mostly to understand consensus algorithms properly.</p>
                    <p className='mb-4'>Looking for a team where shipping something correct matters more than shipping something fast, and where I can keep learning from engineers further along than me.</p>
                </div>

                <div className='border border-gray-700 rounded-lg p-5'>
                 <div className='w-full border border-gray-700 rounded-lg overflow-hidden'>
                    <img src={profile} alt="" className='w-full h-full object-cover block'/>
                 </div>
                 <dl className='grid grid-cols-[auto_1fr] m-0 gap-6 text-gray-200'>
                    <dt>Currently in</dt><dd className='m-0'>Ghana (remote-friendly)</dd>
                    <dt>experience</dt><dd className='m-0'>1 year, professional</dd>
                    <dt>focus</dt><dd className='m-0'>Full stack</dd>
                </dl>
                </div>
            </div>
        </section>
    )
}