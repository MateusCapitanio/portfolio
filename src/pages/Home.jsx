import React, { useEffect } from 'react';
import Header from '../components/Header';

import '../styles/homeStyle.css';
import CardSkills from '../components/CardSkills';

const Home = () => {
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
        <div className="text-center sm:text-left">
            <main className="flex justify-around flex-wrap">
                <Header />
                <section id="home" className="w-1/2 mt-20">
                    <h1 className="text-6xl mt-20 font-extrabold">
                        Olá, meu nome é Mateus Capitanio
                    </h1>
                    <div className="flex flex-wrap items-center mt-16 font-extrabold">
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
                    <section className="mt-10 text-left">
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
                <img className="w-64 sm:w-auto mt-20 rounded-full" alt="perfilPhoto" src="https://avatars.githubusercontent.com/u/82842070?v=4" />
            </main>

            <div id="sobre" className="flex justify-center">
                <hr/>
            </div>

            <section className="flex justify-around init-hidden flex-wrap">
                <div className=" flex w-1/2 justify-center"><h1 className="text-6xl lg:mt-56 font-extrabold text-center underline underline-offset-4 decoration-yellow-200">Um pouco <br/>sobre a minha história</h1></div>
                <div className="text-lg m-10 font-mono w-96">Meu nome é Mateus felipe Ribeiro Capitanio, tenho 26 anos,
                    carioca, nascido e crescido no Rio de Janeiro. Sempre fui
                    muito apaixonado em tecnologia, adoro videogames, computadores.
                    Sempre fui muito dedicado aos estudos e, quando estava no meu ensino médio
                    fazendo um curso de Web Design, tive meu primeiro contato com programação, onde me apaixonei e
                    desde então eu segui estudando por conta própria, até que ingressei na Trybe
                    e à partir daí venho evoluindo mais e mais a cada dia. Meu maior objetivo com a programação
                    é poder impactar a vida das pessoas positivamente através da tecnologia.
                </div>
            </section>

            <div className="flex justify-center">
                <hr/>
            </div>

            <section id="habilidades" className="flex init-hidden flex-col h-auto mt-10 items-center bg-black-950">
                <h1 className="text-white text-4xl mt-12 font-thin">Habilidades</h1>
                <CardSkills />
                <p className="text-white text-lg">Copyright &copy; 2022 - Mateus Capitanio</p>
            </section>
        </div>
    );
}

export default Home;
