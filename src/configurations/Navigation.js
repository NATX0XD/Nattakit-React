import React from 'react'

import About from '../pages/About'
import Home from '../pages/Home'

const Navigation = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        icon: "fa-solid fa-house"
    },
    {
        name: "About",
        path: "/about",
        element: <About />,
        icon: "fa-solid fa-user"
    }
]

export default Navigation


