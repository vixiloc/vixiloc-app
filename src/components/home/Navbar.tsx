import { useState } from 'react';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-xl normal-case btn btn-ghost" href='/'>Vixiloc</a>
                </div>
                <div className="flex-none md:hidden">
                    {/* Tombol hamburger */}
                    <button onClick={toggleMenu} className="btn btn-square btn-ghost">
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${showMenu ? "block" : "hidden"}`}>
                    <ul className="px-1 menu menu-horizontal">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#ts">Tech Stack</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar