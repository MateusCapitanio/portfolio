import React, { useState } from 'react';
import CardProjects from './CardProjects';

const Header = () => {
    const [visibleCard, setVisibleCard] = useState(false);
    return (
        <header className="h-16 fixed bg-white shadow-md w-full flex items-center justify-around">
            <section className="flex flex-wrap">
                <h2 className="font-extrabold text-xl">Portfólio</h2>
                <ul className="flex">
                    <li className="mx-6 font-medium"><a href="#home">Home</a></li>
                    <li className="mx-6 font-medium"><a href="#sobre">Sobre</a></li>
                    <li className="mx-6 font-medium"><a href="#habilidades">Habilidades</a></li>
                    <li className="mx-6 font-medium">
                        <button type="button" onClick={() => setVisibleCard(!visibleCard)}>Projetos</button>
                        {visibleCard ? <CardProjects /> : ''}
                    </li>
                    
                </ul>
                <section>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5521973047946&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="
                            font-medium border
                            border-gray-800
                            p-1
                            mx-2
                            px-4
                            rounded
                            hover:bg-green-500
                            hover:text-white
                            hover:border-white
                            hover:duration-300"
                        rel="noreferrer"
                    >Whatsapp</a>
                    <a
                        href="https://www.linkedin.com/in/mateuscapitanio/"
                        target="_blank"
                        className="
                            font-medium border
                            border-gray-800
                            p-1
                            mx-2
                            px-4
                            rounded
                            hover:bg-blue-500
                            hover:text-white
                            hover:border-white
                            hover:duration-300"
                        rel="noreferrer"
                    >Linkedin</a>
                </section>
            </section>
        </header>
    );
}

export default Header;
