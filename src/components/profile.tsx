import React from 'react';
import ActionLink from './actionLink';

const links = [
    { label: 'Email', url: 'mailto:maltemosbach@gmail.com' },
    { label: 'Google Scholar', url: 'https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao' },
    { label: 'GitHub', url: 'https://github.com/maltemosbach' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mosbach/' },
    // { label: 'CV', url: '/resume.pdf' },
];

const Profile: React.FC = () => {
    return (
        <div>
            <div className="flex items-center">
                <img
                    src="/portrait_small.png"
                    alt="Malte Mosbach"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl flex-none"
                />
                <div className="ml-8">
                    <h2 className="text-4xl font-medium text-foreground">Malte Mosbach</h2>
                    <div className="mt-1 text-muted-foreground">PhD candidate @ University of Bonn</div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                        {links.map((link) => (
                            <ActionLink key={link.label} url={link.url}>{link.label}</ActionLink>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-muted border border-border rounded-xl p-5 mt-8">
                <div className="text-2xl font-medium leading-tight mb-4 text-foreground">About</div>
                <p className="text-muted-foreground leading-relaxed">
                    I am a PhD candidate at the{' '}
                    <a href="https://www.ais.uni-bonn.de/" className="text-link">University of Bonn</a>, advised by{' '}
                    <a href="https://www.ais.uni-bonn.de/behnke/" className="text-link">Sven Behnke</a>.
                    During my PhD, I was fortunate to spend time at{' '}
                    <a href="https://ai.meta.com/research/" className="text-link">Meta AI</a>, working with{' '}
                    <a href="https://arjunmajum.github.io/" className="text-link">Arjun Majumdar</a>{' '}
                    on language-conditioned policies and world models.
                    I hold a bachelor's from{' '}
                    <a href="https://www.tu-dortmund.de/en/" className="text-link">TU Dortmund</a>{' '}
                    and a master's with distinction from{' '}
                    <a href="https://www.rwth-aachen.de/" className="text-link">RWTH Aachen University</a>.
                </p>
            </div>
        </div>
    );
};

export default Profile;
