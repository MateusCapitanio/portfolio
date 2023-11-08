import {
  SiReact,
  SiJest,
  SiDocker,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiCypress
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { DiLinux } from 'react-icons/di'

const CardSkills = () => {

  return (
    <div>
      <section className="flex flex-wrap justify-center">
        <div
          className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiNextdotjs
            className='bg-[#262626] p-2 rounded-md'
            size={55} color='white' />
          <p className="mt-4">Next.js</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiReact
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="aquamarine" />
          <p className="mt-4">React.js</p>
        </div>
        <div
          className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <DiLinux
            className='bg-[#262626] p-2 rounded-md'
            size={55} color='white' />
          <p className="mt-4">Linux</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiTypescript
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="blue" />
          <p className="mt-4">Typescript</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiJest
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="red" />
          <p className="mt-4">Jest</p>
        </div>
        <div
          className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiCypress
            className='bg-[#262626] p-2 rounded-md'
            size={55} color='white' />
          <p className="mt-4">Cypress</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiExpress
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="white" />
          <p className="mt-4">Express</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <IoLogoNodejs
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="green" />
          <p className="mt-4">Node.js</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiDocker
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="aquamarine" />
          <p className="mt-4">Docker</p>
        </div>
        <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
          <SiTailwindcss
            className='bg-[#262626] p-2 rounded-md'
            size={55} color="aquamarine" />
          <p className="mt-4">Tailwind</p>
        </div>


      </section>
    </div>
  );
}

export default CardSkills;
