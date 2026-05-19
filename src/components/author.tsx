import React from 'react';

interface AuthorProps {
    name: string;
    website: string;
    isMe?: boolean;
    lastAuthor?: string;
}

const Author: React.FC<AuthorProps> = ({ name, website, isMe, lastAuthor }) => {
    return (
        <span className="text-center inline-block">
            <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={`no-underline${
                    isMe ? 'text-stone' : 'text-stone-700'
                }`}
            >
                {name}
            </a>
            {lastAuthor ? null : <>,&nbsp;</>}
        </span>
    );
};

export type { AuthorProps };
export default Author;
