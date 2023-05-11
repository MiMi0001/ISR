import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {ErrorPage} from "./components/ErrorPage"
import {ISRApp} from "./components/ISRApp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ISRApp/>,
        errorElement: <ErrorPage/>,
        // children: [
        //     {
        //         path: "/pokemons",
        //         element: <PokemonList/>,
        //         loader: pokemonListLoader
        //     },
        //     {
        //         path: "/types",
        //         element: <TypeList/>,
        //         loader: typeListLoader
        //     },
        //     {
        //         path: "/pokemon/:pokemonId",
        //         element: <PokemonDetail/>,
        //         loader: pokemonLoader
        //     }
        // ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
