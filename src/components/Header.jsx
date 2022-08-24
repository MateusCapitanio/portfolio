import React from 'react';

const Header = () => {
    return (
        <header className="h-16 shadow-md w-full flex items-center justify-around">
            <h2 className="font-extrabold text-xl">Mateus Capitanio</h2>
            <ul className="flex">
                <li className="mx-6 font-medium"><a href='#'>Home</a></li>
                <li className="mx-6 font-medium"><a href='#'>Sobre</a></li>
                <li className="mx-6 font-medium"><a href='#'>Projetos</a></li>
            </ul>
            <a
                href="https://api.whatsapp.com/send/?phone=5521973047946&text&type=phone_number&app_absent=0"
                target="_blank"
                className="
                    font-medium border
                    border-gray-800
                    p-1
                    px-4
                    rounded
                    hover:bg-green-500
                    hover:text-white
                    hover:border-white
                    hover:duration-300"
                rel="noreferrer"
            >Whatsapp</a>
        </header>
    );
}

export default Header;
