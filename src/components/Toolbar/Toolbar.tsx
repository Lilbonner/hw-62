import React from "react";
import {NavLink} from "react-router-dom";

const Toolbar: React.FC = () => {
    return (
        <>
            <header className="bg-gray-400 h-20">
                <div className="flex justify-normal">
                    <nav className="mt-6">
                        <NavLink className="navLinks text-2xl ml-16" to="/">Home</NavLink>
                        <NavLink className="navLinks text-2xl ml-16" to="/AboutUs">About Me</NavLink>
                        <NavLink className="navLinks text-2xl ml-16" to="/contacts">Contacts</NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Toolbar;
