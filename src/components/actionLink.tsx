import React from 'react';

interface ActionLinkProps {
    children: React.ReactNode;
    url?: string;
}

const baseClasses = "inline-flex items-center px-2.5 py-1 font-mono text-sm text-foreground bg-glass border border-border backdrop-blur-md rounded-md";
const interactiveClasses = "hover:border-link hover:opacity-100 transition-colors duration-200";

const ActionLink: React.FC<ActionLinkProps> = ({ children, url }) => {
    if (url) {
        const target = url.startsWith("#") ? "_self" : "_blank";
        return (
            <a href={url} target={target} className={`${baseClasses} ${interactiveClasses}`}>
                {children}
            </a>
        );
    }
    return <span className={baseClasses}>{children}</span>;
};

export default ActionLink;
