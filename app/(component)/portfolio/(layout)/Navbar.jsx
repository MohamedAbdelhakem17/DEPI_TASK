import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-blue-700 fixed top-0 w-full' >
            <div className="container py-3 px-5 flex items-center justify-between">
                <Link href={"/portfolio"} className='no-underline  font-bold font-mono text-2xl text-slate-50 hover:scale-75 hover:font-thin main-transition'>MyPortfolio.</Link>

                <ul className='list-none flex items-start gap-x-6 m-0'>
                    <li><Link href={"/portfolio"} className='link main-transition'>Home</Link></li>
                    <li><Link href={"/portfolio/about"} className='link'>About</Link></li>
                    <li><Link href={"/portfolio/services"} className='link'>Services</Link></li>
                    <li><Link href={"/portfolio/project"} className='link'>Project</Link></li>
                    <li><Link href={"/portfolio/contact"} className='link'>Contact</Link></li>
                </ul>

            </div>
        </nav>
    )
}
