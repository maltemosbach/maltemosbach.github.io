import React from 'react';
import ActionLink from './actionLink';
import ThemeToggle from './themeToggle';

const Footer: React.FC = () => {
    return (
        <footer className="mb-4 mt-16">
            <div className="container mx-auto max-w-5xl flex justify-between items-center">
                <div className="flex flex-wrap items-center gap-2">
                    <ActionLink url="https://www.uni-bonn.de/en/imprint">imprint</ActionLink>
                    <ActionLink url="https://www.uni-bonn.de/en/data-protection-policy">data protection policy</ActionLink>
                </div>

                <div className="flex items-center gap-4">
                    <div className="font-mono text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Malte Mosbach
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
