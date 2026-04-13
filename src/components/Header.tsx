'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Publications', href: '/publications' },
    { name: 'Memo', href: '/memo' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' },
    { name: 'Tools', href: '/tools' },
]

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/rin-yokoyama',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 0.296c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.578 0-.286-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.984-.399 3.005-.404 1.02.005 2.047.138 3.005.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.623-5.475 5.921.43.37.815 1.102.815 2.222 0 1.604-.014 2.896-.014 3.289 0 .32.216.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'ORCiD',
        href: 'https://orcid.org/0000-0003-3298-3542',
        icon: (
            <svg viewBox="0 0 72 72" className="h-5 w-5">
                <path fill="#A6CE39" d="M72,36 C72,55.884375 55.884375,72 36,72 C16.115625,72 0,55.884375 0,36 C0,16.115625 16.115625,0 36,0 C55.884375,0 72,16.115625 72,36 Z" />
                <g transform="translate(18.868966, 12.910345)" fill="#FFFFFF">
                    <polygon points="5.03734929 39.1250878 0.695429861 39.1250878 0.695429861 9.14431787 5.03734929 9.14431787 5.03734929 22.6930505 5.03734929 39.1250878" />
                    <path d="M11.409257,9.14431787 L23.1380784,9.14431787 C34.303014,9.14431787 39.2088191,17.0664074 39.2088191,24.1486995 C39.2088191,31.846843 33.1470485,39.1530811 23.1944669,39.1530811 L11.409257,39.1530811 L11.409257,9.14431787 Z M15.7511765,35.2620194 L22.6587756,35.2620194 C32.49858,35.2620194 34.7541226,27.8438084 34.7541226,24.1486995 C34.7541226,18.1301509 30.8915059,13.0353795 22.4332213,13.0353795 L15.7511765,13.0353795 L15.7511765,35.2620194 Z" />
                    <path d="M5.71401206,2.90182329 C5.71401206,4.441452 4.44526937,5.72914146 2.86638958,5.72914146 C1.28750978,5.72914146 0.0187670918,4.441452 0.0187670918,2.90182329 C0.0187670918,1.33420133 1.28750978,0.0745051096 2.86638958,0.0745051096 C4.44526937,0.0745051096 5.71401206,1.36219458 5.71401206,2.90182329 Z" />
                </g>
            </svg>
        ),
    },
    {
        name: 'Zenn',
        href: 'https://zenn.dev/rin_yokoyama',
        icon: (
            <svg viewBox="0 0 88.3 88.3" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                <g fill="#3EA8FF">
                    <path d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9 C2.8,82.5,3.2,83.3,3.9,83.3z" />
                    <path d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1 h16.3C61.3,83.3,62.1,82.9,62.5,82.1z" />
                </g>
            </svg>
        ),
    },
    {
        name: 'Email',
        href: 'mailto:yokoyama@cns.s.u-tokyo.ac.jp',
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L12 12.5l8-6.49V6H4zm16 2.25l-7.55 4.72a1 1 0 0 1-1.1 0L4 8.25V18h16V8.25z" />
            </svg>
        ),
    },
]

export default function Header() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="bg-white shadow-md dark:bg-gray-900 dark:shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-200 mb-2">
                        Rin-memo
                    </h1>
                    <h2 className="text-lg md:text-xl text-primary-600 dark:text-primary-400">
                        Personal Web Site of Rin Yokoyama
                    </h2>
                </div>

                <nav>
                    <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200 font-medium px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary-400 dark:hover:bg-gray-700"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                        {mounted && <ThemeToggle />}
                    </div>
                </nav>
            </div>
        </header>
    )
}