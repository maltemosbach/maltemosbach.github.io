import React from 'react';
import GithubStars from './githubStars';

interface OpenSourceProps {
    repo: string;
    description: string;
    link?: string;
    // Legacy fields, kept for backwards compatibility in the data array.
    teaser?: { src: string };
    title?: string;
    paperLink?: string;
}

const OpenSource: React.FC<OpenSourceProps> = ({ repo, description, link }) => {
    const repoUrl = link || `https://github.com/${repo}`;

    return (
        <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-muted border border-border rounded-xl px-5 py-4 mb-3 hover:bg-muted-hover hover:opacity-100 transition-colors duration-200"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="font-mono text-base text-foreground">{repo}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{description}</div>
                </div>
                <GithubStars repo={repo} variant="inline" />
            </div>
        </a>
    );
};

export default OpenSource;
