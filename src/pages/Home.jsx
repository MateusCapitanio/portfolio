import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="">
            <Header />
            <main className="flex justify-around mt-5">
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

                </section>
                <img className="w-96 rounded-full" alt="perfilPhoto" src="https://avatars.githubusercontent.com/u/82842070?v=4" />
            </main>
        </div>
    );
}

export default Home;
