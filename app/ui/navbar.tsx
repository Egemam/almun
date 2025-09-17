'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return(
        <nav className={`fixed top-0 z-50 h-20 w-full bg-[#060608] duration-300 text-white shadow-xl shadow-black/10`}>
            <div className="w-full flex items-center justify-center px-4 md:px-8">

                {/* Desktop Navigation */}
                <div className="hidden items-center justify-center gap-6 space-x-8 md:grid md:grid-cols-3">
                    <Link className="text-lg font-semibold transition-colors hover:text-[#dad1c1]" href="/">HOME</Link>
                    <Link className="text-lg font-semibold transition-colors hover:text-[#dad1c1]" href={"/"}><Image src="/logo.png" alt="logo" width={80} height={80} className="h-12 w-12 md:h-16 md:w-16"/></Link>
                    <Link className="text-lg font-semibold transition-colors hover:text-[#dad1c1]" href="/contact">CONTACT US!</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-between md:hidden w-full items-center">
                    <Image src={"/logo.png"} className="" alt={"logo"} height={70} width={70}/>
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-8 h-8"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className={`bg-black/90 duration-300 border-t border-white/20 shadow-lg`}>
                    <div className="flex flex-col space-y-0">
                        <Link
                            className="px-6 py-4 text-lg font-semibold border-b border-white/10 transition-colors hover:bg-white/10 hover:text-[#dad1c1]"
                            href="/"
                            onClick={closeMenu}
                        >
                            HOME
                        </Link>
                        <Link
                            className="px-6 py-4 text-lg font-semibold transition-colors hover:bg-white/10 hover:text-[#dad1c1]"
                            href="/"
                            onClick={closeMenu}
                        >
                            CONTACT US!
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}