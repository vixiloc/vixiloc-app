import { useState } from 'react';
import { FaHamburger, FaReact, FaRegWindowClose } from 'react-icons/fa';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    let Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Tech Stack", link: "#ts" },
    ]

    return (
        <>
            <div className="sticky top-0 left-0 z-10 w-full bg-black shadow-md">
                <div className="items-center justify-between py-4 md:flex md:px-10 px-7">
                    <div className="flex items-center text-2xl font-bold cursor-pointer text-slate-200">
                        <span className="pt-2 mr-1 text-3xl text-indigo-600">
                            <FaReact />
                        </span>
                        Vixiloc
                    </div>
                    <div onClick={() => setShowMenu(!showMenu)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
                        {showMenu ? <FaRegWindowClose /> : <FaHamburger />}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 bg-black pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${showMenu ? 'top-20 ' : 'top-[-490px]'}`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
                                    <a className='text-slate-200 hover:text-slate-300' href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar