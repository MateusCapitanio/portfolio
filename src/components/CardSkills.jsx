import React from 'react';
import {
    SiReact,
    SiJest,
    SiDocker,
    SiTailwindcss,
    SiTypescript,
    SiExpress,
    SiNextdotjs
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';

const CardSkills = () => {
    return (
        <div>
            <section className="flex flex-wrap justify-center">
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiNextdotjs size={45} color="white" />
                    <p className="mt-4">Next.js</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiTypescript size={45} color="blue" />
                    <p className="mt-4">Typescript</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiJest size={45} color="red" />
                    <p className="mt-4">Jest</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <IoLogoNodejs  size={45} color="green" />
                    <p className="mt-4">Node.js</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiDocker  size={45} color="aquamarine" />
                    <p className="mt-4">Docker</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiTailwindcss  size={45} color="aquamarine" />
                    <p className="mt-4">Tailwind</p>
                </div>
                <div className="flex flex-col items-center text-cente text-white h-44 pt-10 rounded-md	 m-4 p-4 max-w-md w-36 hover:bg-yellow-200 hover:text-black-950 hover:duration-300 border border-yellow-200 text-xl">
                    <SiExpress  size={45} color="white" />
                    <p className="mt-4">Express</p>
                </div>
            </section>
        </div>
    );
}

export default CardSkills;
