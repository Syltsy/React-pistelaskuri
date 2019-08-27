import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <div>
        <NavLink to="Amislaskuri">Ammattikoululaisten pistelaskuri</NavLink>
        <NavLink to="YoLaskuri">Ylioppilaiden pistelaskuri</NavLink>
        </div>
    );
}