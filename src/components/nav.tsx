import React from 'react';

const navLinks = [
    { label: 'about', href: '#about' },
    { label: 'publications', href: '#publications' },
    { label: 'open-source', href: '#open-source' },
];

const Nav: React.FC = () => {
    const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-nav-bg backdrop-blur-2xl border-b border-border">
            <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
                <a
                    href="#"
                    onClick={scrollToTop}
                    className="font-mono text-base text-foreground hover:opacity-100"
                >
                    Malte Mosbach
                </a>
                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-sm text-muted-foreground hover:text-foreground hover:opacity-100 transition-colors duration-200 hidden sm:inline"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
