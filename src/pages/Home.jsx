import React from 'react';
import Header from '../components/Header';
import { 
    SiJavascript,
    SiReact,
    SiJest,
    SiDocker,
    SiTailwindcss,
    SiRedux,
    SiTypescript
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io'

const Home = () => {
    return (
        <div className="">
            <Header />
            <main className="flex justify-around mt-5 flex-wrap">
                <section className="w-1/2">
                    <h1 className="text-6xl mt-20 font-extrabold">
                        Olá, meu nome é Mateus Capitanio
                    </h1>
                    <div className="flex items-center mt-16 font-extrabold">
                        <h2 className="text-2xl">
                            Sou um desenvolvedor
                        </h2>
                        <span className="bg-yellow-300 p-1 px-8 mx-4 text-3xl rounded-full">
                            JS
                        </span>
                    </div>
                    <div className="mt-2">
                        <p>Estudo Javascript e React a um pouco mais de <strong>1 ano.</strong></p>
                        <p>Busco minha primeira oportunidade de trabalho como Dev Web pra evoluir mais.</p>
                    </div>

                    <section className="mt-10">
                        <h2 className="text-2xl my-4 font-extrabold">Envie-me um email:</h2>
                        <a 
                            className="
                                p-3
                                font-medium
                                border
                                rounded
                                hover:bg-yellow-300
                                hover:border-white
                                hover:rounded
                                hover:duration-300
                                border-slate-800"
                            href="mailto:mateuscapitaniowork@gmail.com"
                        >mateuscapitaniowork@gmail.com</a>
                    </section>

                </section>
                <img className="w-auto mt-10 rounded-full" alt="perfilPhoto" src="https://avatars.githubusercontent.com/u/82842070?v=4" />
            </main>
            <section className="flex flex-col h-52 mt-10 items-center bg-black-950">
                <h1 className="text-white text-4xl mt-6 font-thin">Habilidades</h1>
                <ul className="flex mt-12 items-center flex-wrap">
                    <li className="m-2 text-white font-extrabold"><SiJavascript size={45} color="yellow" /> </li>
                    <li className="m-2 text-white font-extrabold"><SiTypescript size={45} color="blue" /> </li>
                    <li className="m-2 text-white font-extrabold"><SiReact size={45} color="aquamarine" /></li>
                    <li className="m-2 text-white font-extrabold"><SiJest size={45} color="red" /></li>
                    <li className="m-2 text-white font-extrabold"><IoLogoNodejs size={45} color="green" /></li>
                    <li className="m-2 text-white font-extrabold text-xl">Express.js</li>
                    <li className="m-2 text-white font-extrabold"><SiDocker size={45} color="aquamarine" /></li>
                    <li className="m-2 text-white font-extrabold"><SiTailwindcss size={45} color="aquamarine" /></li>
                    <li className="m-2 text-white font-extrabold"><SiRedux size={45} color="purple" /></li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
