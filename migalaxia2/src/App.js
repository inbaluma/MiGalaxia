import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes
import Noticias from "./Components/Noticias.js";
import Root from "./Components/Root.jsx";
import Bienvenido from "./Components/Bienvenido.js";
import Aprender from "./Components/Aprender.js";
import Jugar from "./Components/Jugar.js";
import FotoDelDia from "./Components/FotoDelDia.js";
import Pasapalabra from "./Components/Juegos/Pasapalabra.js";
import Trivia from "./Components/Juegos/Trivia.js";
import Memoria from "./Components/Juegos/Memoria.js";
import Ahorcado from "./Components/Juegos/Ahorcado.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

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
                path: "jugar",
                element: <Jugar/>
            },
            {
                path: "foto",
                element: <FotoDelDia/>
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
                path: "jugar/trivia",
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
  
