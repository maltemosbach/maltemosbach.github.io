import React from 'react';

interface AuthorProps {
    name: string;
    website: string;
    isMe?: boolean;
    lastAuthor?: boolean;
}

const Author: React.FC<AuthorProps> = ({ name, isMe, lastAuthor }) => {
    const color = isMe ? 'text-foreground' : 'text-muted-foreground';

    return (
        <span className="text-center inline-block">
            <span className={color}>{name}</span>
            {lastAuthor ? null : <>,&nbsp;</>}
        </span>
    );
};

export type { AuthorProps };
export default Author;
