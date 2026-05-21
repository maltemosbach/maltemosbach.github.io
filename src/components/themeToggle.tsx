import React, { useEffect, useState } from 'react';
import { BsDisplay, BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

type Theme = 'system' | 'light' | 'dark';

const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'system', icon: <BsDisplay size={12} />, label: 'System theme' },
    { value: 'light', icon: <BsSunFill size={12} />, label: 'Light theme' },
    { value: 'dark', icon: <BsMoonStarsFill size={12} />, label: 'Dark theme' },
];

const applyToDocument = (theme: Theme) => {
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
    } else {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }
};

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('system');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme') as Theme | null;
        setTheme(stored === 'light' || stored === 'dark' ? stored : 'system');

        // Follow OS theme changes live while in 'system' mode.
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = () => {
            if (localStorage.getItem('theme')) return; // explicit choice, ignore
            applyToDocument('system');
        };
        mq.addEventListener('change', handleSystemChange);
        return () => mq.removeEventListener('change', handleSystemChange);
    }, []);

    const handleSelect = (newTheme: Theme) => {
        setTheme(newTheme);
        if (newTheme === 'system') {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', newTheme);
        }
        applyToDocument(newTheme);
    };

    return (
        <div className="inline-flex items-center bg-glass border border-border rounded-full p-1">
            {options.map((option) => {
                const isActive = mounted && theme === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelect(option.value)}
                        aria-label={option.label}
                        aria-pressed={isActive}
                        className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-200 ${
                            isActive
                                ? 'bg-muted text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {option.icon}
                    </button>
                );
            })}
        </div>
    );
};

export default ThemeToggle;
