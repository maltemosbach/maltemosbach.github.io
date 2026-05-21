import React, { useEffect, useState } from 'react';
import { BsStar } from 'react-icons/bs';

interface GithubStarsProps {
    repo: string;
    variant?: 'chip' | 'inline';
}

const GithubStars: React.FC<GithubStarsProps> = ({ repo, variant = 'chip' }) => {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        let active = true;
        fetch(`https://api.github.com/repos/${repo}`)
            .then((r) => r.json())
            .then((d) => {
                if (active && typeof d.stargazers_count === 'number') {
                    setStars(d.stargazers_count);
                }
            })
            .catch(() => {});
        return () => {
            active = false;
        };
    }, [repo]);

    const display = stars === null ? '—' : stars.toLocaleString();

    if (variant === 'inline') {
        return (
            <span className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground">
                <BsStar size={12} />
                {display}
            </span>
        );
    }

    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-sm text-warning bg-highlight-bg border border-highlight-border rounded-md">
            <BsStar size={12} />
            {display}
        </span>
    );
};

export default GithubStars;
