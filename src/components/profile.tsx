import React from 'react';
import Actionlink from './actionLink';

const Profile: React.FC = () => {
    return (
        <div className="flex justify-between">
            <div className="w-[24%] flex justify-center items-center">
                <img src="/portrait_small.png" alt="Profile Picture"
                    className="object-cover rounded-full" />
            </div>
            <div
                className="w-[75%] flex  items-center border-hidden border-x-8">
                <div className="p-8 ml-4">
                    <h2 className="text-4xl mb-4">Malte Mosbach</h2>

                    <div className="mt-4 mb-4 text-gray-800 leading-relaxed">
                        I am a PhD candidate at the University of Bonn, advised by <a href="https://www.ais.uni-bonn.de/behnke/" className="underline hover:text-gray-600">Sven Behnke</a>.
                        My research interests lie broadly in reinforcement and representation learning for robotics.
                        During my PhD, I spent time at <a href="https://ai.meta.com/research/" className="underline hover:text-gray-600">Meta AI</a> working with <a href="https://arjunmajum.github.io/" className="underline hover:text-gray-600">Arjun Majumdar</a> on language-conditioned policies and world models.
                    </div>

                    <a href={"mailto:maltemosbach@gmail.com"} className="text-gray-800 hover:text-gray-600">maltemosbach@gmail.com</a>
                    &nbsp;/&nbsp;
                    <a href={"https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao"} className="text-gray-800 hover:text-gray-600">Google Scholar</a>
                    &nbsp;/&nbsp;
                    <a href={"https://github.com/maltemosbach"} className="text-gray-800 hover:text-gray-600">GitHub</a>
                    &nbsp;/&nbsp;
                    <a href={"https://www.linkedin.com/in/mosbach/"} className="text-gray-800 hover:text-gray-600">LinkedIn</a>
                    &nbsp;/&nbsp;
                    <a href={"/resume.pdf"} className="text-gray-800 hover:text-gray-600">CV</a>

                    {/*<Actionlink url="mailto:mosbach@ais.uni-bonn.de">E-Mail me</Actionlink>*/}
                    {/*<Actionlink url="https://de.linkedin.com/in/mosbach">Connect on LinkedIn</Actionlink>*/}
                </div>

            </div>

        </div>

    );
};

export default Profile;
