import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes
import Noticias from "./Components/Noticias.js";
import Root from "./Components/Root.jsx";
import Bienvenido from "./Components/Bienvenido.js";
import Aprender from "./Components/Aprender.js";
import Jugar from "./Components/Jugar.js";
import FotoDelDia from "./Components/FotoDelDia.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import EmblaCarousel from "./Components/Aprender/EmblaCarousel.jsx";

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
                path: "noticias",
                element: <Noticias/>
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
  
