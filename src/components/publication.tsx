import React from 'react';
import Author, { AuthorProps } from './author';

interface PublicationProps {
    teaser: { type: 'video', src: string };
    title: string;
    projectLink: string;
    conference: string;
    date: string
    conferenceAward?: string;
    authors: Array<AuthorProps>;
}

const Publication: React.FC<PublicationProps> = ({ teaser, title, projectLink, conference, date, authors}) => {

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        const video = event.currentTarget.querySelector('video');
        if (video) {
            video.pause();
        }
    };

    return (
        <div
            className="publication-entry flex bg-transparent mb-12"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
            <div className="publication-details flex flex-col justify-start mr-6 ml-0">
                <div className="text-stone-800 font-bold hover:underline">
                    <a href={projectLink}>{title}</a>


                </div>
                <div className="author-list mt-1">
                    {authors.map((author, index) => (
                        <Author key={index} {...author} className="author" />
                    ))}
                </div>
                <div className="flex items-center text-stone-600 mt-2.5">
                    {conference}
                </div>
            </div>
            <div className="publication-video w-[160px] h-[120px] overflow-hidden mt-1.5">
                {teaser.type === 'video' && (
                    <a href={projectLink}>
                        <video src={teaser.src} muted playsInline loop autoPlay></video>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Publication;
