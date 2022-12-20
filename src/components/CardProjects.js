import React from 'react';

const CardProjects = () => {
    return (
        <div className="w-52 rounded border border-gray-400 absolute mt-2 bg-white">
            <ul>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/MateusCapitanio/FinanceXP"
                ><li className="p-2 hover:bg-yellow-200 hover:duration-300">FinanceXP</li></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/MateusCapitanio/StoreManagerBackend"
                ><li className="p-2 hover:bg-yellow-200 hover:duration-300">Store Manager</li></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/MateusCapitanio/StarWarsProject"
                ><li className="p-2 hover:bg-yellow-200 hover:duration-300">Star Wars </li></a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/MateusCapitanio/TrybeTunesProject"
                ><li className="p-2 hover:bg-yellow-200 hover:duration-300">Trybe Tunes</li></a>
            </ul>
        </div>
    );
}

export default CardProjects;
