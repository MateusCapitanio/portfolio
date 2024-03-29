import React, { useEffect, useState } from 'react';
import CardProjects from './CardProjects';

const Header = () => {
  const [visibleCard, setVisibleCard] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 992) {
      setVisibleLinks(false)
    }
  }, [])

  return (
    <header className="h-16 bg-white shadow-md flex items-center justify-around w-screen overflow-x-scroll overflow-y-hidden lg:overflow-x-hidden whitespace-nowrap">
      <h2 className=" font-extrabold text-xl hidden">Portfólio</h2>
      <ul className="flex">
        <li className="mx-6 font-medium">
          <button type="button" onClick={() => setVisibleCard(!visibleCard)}>Projetos</button>
          {visibleCard ? <CardProjects /> : ''}
        </li>
        <li className="mx-6 font-medium "><a href="#home">Home</a></li>
        <li className="mx-6 font-medium"><a href="#sobre">Sobre</a></li>
        <li className="mx-6 font-medium"><a href="#habilidades">Habilidades</a></li>

      </ul>
      <section>
        {visibleLinks && (
          <>
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
            <a
              href="https://www.github.com/mateuscapitanio/"
              target="_blank"
              className="
                        font-medium border
                        border-gray-800
                        p-1
                        mx-2
                        px-4
                        rounded
                        hover:bg-black-950
                        hover:text-white
                        hover:border-white
                        hover:duration-300"
              rel="noreferrer"
            >Github</a>
          </>
        )}
      </section>
    </header>
  );
}

export default Header;
