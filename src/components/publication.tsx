import React from 'react';
import ActionLink from './actionLink';
import Author, { AuthorProps } from './author';

export interface PublicationTag {
    label: string;
    variant: 'success' | 'warning';
}

interface PublicationProps {
    teaser: { src: string };
    title: string;
    projectLink?: string;
    conference: string;
    conferenceWebsite?: string;
    authors: Array<AuthorProps>;
    arxivId?: string;
    paperLink?: string;
    bibtexLink?: string;
    codeLink?: string;
    tags?: PublicationTag[];
    highlighted?: boolean;
}

const tagVariantClasses: Record<PublicationTag['variant'], string> = {
    success: 'text-success bg-success-bg border-success',
    warning: 'text-warning bg-warning-bg border-warning',
};

// Toggle: true = all videos rendered in a fixed 4:3 box (cropped via object-cover);
// false = each video keeps its natural aspect ratio (cards will have variable heights).
const VIDEO_FIXED_ASPECT = true;

const Publication: React.FC<PublicationProps> = ({
    teaser,
    title,
    projectLink,
    conference,
    conferenceWebsite,
    authors,
    arxivId,
    paperLink,
    bibtexLink,
    codeLink,
    tags,
    highlighted,
}) => {
    const resolvedPaperLink = paperLink || (arxivId ? `https://arxiv.org/abs/${arxivId}` : undefined);
    const primaryLink = resolvedPaperLink || projectLink;

    return (
        <div className={`border rounded-xl p-5 mb-6 ${highlighted ? 'bg-highlight-bg border-highlight-border' : 'bg-muted border-border'}`}>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className={`w-full sm:w-1/3 flex-none ${VIDEO_FIXED_ASPECT ? 'aspect-[16/9]' : ''}`}>
                    <video src={teaser.src} muted playsInline loop autoPlay className={`w-full rounded-md border border-border ${VIDEO_FIXED_ASPECT ? 'h-full object-cover' : ''}`} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                    <div className="text-base font-medium text-foreground leading-snug">
                        {title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed">
                        {authors.map((author, index) => (
                            <Author key={index} {...author} />
                        ))}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm text-link">
                        <span>
                            {conferenceWebsite ? (
                                <a href={conferenceWebsite}>{conference}</a>
                            ) : (
                                conference
                            )}
                        </span>
                        {tags?.map((tag) => (
                            <span
                                key={tag.label}
                                className={`inline-flex items-center px-2.5 py-1 border rounded-md ${tagVariantClasses[tag.variant]}`}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        {primaryLink && <ActionLink url={primaryLink}>paper</ActionLink>}
                        {bibtexLink && <ActionLink url={bibtexLink}>bibtex</ActionLink>}
                        {codeLink && <ActionLink url={codeLink}>code</ActionLink>}
                        {resolvedPaperLink && projectLink && (
                            <ActionLink url={projectLink}>project page</ActionLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publication;
