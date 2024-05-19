import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes
import Noticias from "./Components/Noticias.js";
import Root from "./Components/Root.jsx";
import Bienvenido from "./Components/Bienvenido.js";
import Aprender from "./Components/Aprender.js";
import Jugar from "./Components/Jugar.js";
import FotoDelDia from "./Components/FotoDelDia/FotoDelDia.js";
import Pasapalabra from "./Components/Juegos/Pasapalabra.js";
import Trivia from "./Components/Juegos/Trivia.jsx";
import Memoria from "./Components/Juegos/Memoria.js";
import Ahorcado from "./Components/Juegos/Ahorcado.js";
import Sun from "./Components/Aprender/Sun.jsx";
import Mercury  from "./Components/Aprender/Mercury.jsx";
import Venus from "./Components/Aprender/Venus.jsx"
import Earth from "./Components/Aprender/Earth.jsx";
import Mars from "./Components/Aprender/Mars.jsx";
import Jupiter from "./Components/Aprender/Jupiter.jsx";
import Saturn from "./Components/Aprender/Saturn.jsx";
import Uranus from "./Components/Aprender/Uranus.jsx";
import Neptune from "./Components/Aprender/Neptune.jsx";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import MasFotos from "./Components/FotoDelDia/MasFotos.js";

library.add(fas, far);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Bienvenido/>,
            },
            {
                path: "aprender",
                element: <Aprender/>
            },
            {
                path: "infosun",
                element: <Sun/>
            },
            {
                path: "infoMercury",
                element: <Mercury/>
            },
            {
                path: "infoVenus",
                element: <Venus/>
            },
            {
                path: "infoEarth",
                element: <Earth/>
            },
            {
                path: "infoMars",
                element: <Mars/>
            },
            {
              path: "infoJupiter",
              element: <Jupiter/>  
            },
            {
                path: "infoSaturn",
                element: <Saturn/>
            },
            {
                path: "infoUranus",
                element: <Uranus/>
            },
            {
                path: "infoNeptune",
                element: <Neptune/>
            },
            {
                path: "jugar",
                element: <Jugar/>
            },
            {
                path: "foto",
                element: <FotoDelDia/>
            },
            {
                path: "foto/masfotos",
                element: <MasFotos/>
            },
            {
                path: "noticias/*",
                element: <Noticias/>
            },
            {
                path: "jugar/pasapalabra",
                element: <Pasapalabra/>
            },
            {
                path: "jugar/Trivia",
                element: <Trivia/>
            },
            {
                path: "jugar/Memoria",
                element: <Memoria/>
            },
            {
                path: "jugar/Ahorcado",
                element: <Ahorcado/>
            }

        ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router}/>
    );
};

export default App;
  
