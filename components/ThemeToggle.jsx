'use client'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light'
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle dark mode">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    )
}