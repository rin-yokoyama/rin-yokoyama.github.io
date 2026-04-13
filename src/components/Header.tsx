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
  { name: 'Osaka', href: '/osaka' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Photo Gallery', href: '/photo-gallery' },
  { name: 'Links', href: '/links' },
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9.5 15.5c.494 1.048 1.747 1.75 3.5 1.75 1.976 0 3.5-1.352 3.5-3.75s-1.524-3.75-3.5-3.75c-1.59 0-2.864.911-3.244 2.263" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="11.25" r=".75" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Zenn',
    href: 'https://zenn.dev/rin_yokoyama',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M4 5h16v14H4z" fill="none" />
        <path d="M8 7h8v2H8zm0 4h6v2H8zm0 4h4v2H8z" />
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