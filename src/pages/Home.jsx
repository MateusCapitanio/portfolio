import React, { useEffect } from 'react';
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
import { IoLogoNodejs } from 'react-icons/io';

import '../styles/homeStyle.css';

const Home = () => {
    // const options = { 
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 1,
    // }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                const arrayEntries = Array.from(entries);
                arrayEntries.forEach((entry) => {
                    console.log(entry);
                    entry.target.classList.add('init-hidden-off');
                })
            }
        });

        Array.from(document.querySelectorAll('.init-hidden')).forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="">
            <main className="flex justify-around flex-wrap">
                <Header />
                <section id="home" className="w-1/2 mt-20">
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
                <img className="w-auto mt-20 rounded-full" alt="perfilPhoto" src="https://avatars.githubusercontent.com/u/82842070?v=4" />
            </main>

            <div id="sobre" className="flex justify-center">
                <hr/>
            </div>

            <section className="flex justify-around init-hidden">
                <div className="text-lg font-mono w-96">Meu nome é Mateus felipe Ribeiro Capitanio, tenho 26 anos,
                    nascido e crescido em Realengo, Rio de Janeiro. Sempre fui
                    muito apaixonado em tecnologia, adoro videogames, computadores.
                    Sempre fui muito dedicado aos estudos, e quando estava no meu ensino médio
                    fazendo um curso de Design Gráfico e Web Designer, eu tive o meu primeiro contato com programação.
                    Desde então eu segui estudando por conta própria, até que ingressei na Trybe
                    e à partir daí venho evoluindo mais e mais a cada dia.
                </div>
                <div className=" flex w-1/2 justify-center"><h1 className="text-6xl mt-20 font-extrabold text-center underline underline-offset-4 decoration-yellow-300">Um pouco <br/>sobre a minha história</h1></div>
            </section>

            <div className="flex justify-center">
                <hr/>
            </div>

            <section id="habilidades" className="flex justify-between init-hidden flex-col h-96 mt-20 items-center bg-black-950">
                <h1 className="text-white text-6xl mt-12 font-thin">Habilidades</h1>
                <ul className="flex m-20 items-center flex-wrap">
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
                <p className="text-white text-lg m-2">Copyright &copy; 2022 - Mateus Capitanio</p>
            </section>
        </div>
    );
}

export default Home;
