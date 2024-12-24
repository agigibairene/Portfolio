import { FaJsSquare } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';

const data = [
    {
        icon: <FaJsSquare className='about-icon' />,
        title: "Frontend",
        description: ` I'm a frontend developer with experience in building responsive
            and optimized sites`
    },
    {
        icon: <FaServer className='about-icon' />,
        title: "Backend",
        description: `I have experience developing fast and optimised back-end systems and APIs`
    },
    {
        icon: <FaMobileAlt className='about-icon'/>,
        title: "Mobile Development",
        description: `I'm a mobile developer with experience in building optimized mobile apps
        `
    }
]

export default data