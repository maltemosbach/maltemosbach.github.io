import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"

import esann_2021 from "./videos/esann_2021.mp4"
import icra_2024 from "./videos/icra_2024.mp4"
import case_2023 from "./videos/case_2023.mp4"
import case_2025 from "./videos/case_2025_faster.mp4"
import irc_2022 from "./videos/irc_2022.mp4"
import humanoids_2022 from "./videos/humanoids_2022.mp4"
import humanoids_2025 from "./videos/humanoids_2025_16_9.mp4"
import csci_2020 from "./videos/csci_2020.mp4"
import sold from "./videos/sold.mp4"
import pvom from "./videos/pvom.mp4"

import Publication from "../components/publication";
import OpenSource from "../components/openSource";
import Profile from "../components/profile";
import Footer from "../components/footer";
import Nav from "../components/nav";


const Article: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-5xl px-6 flex-none content-start">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => {
    const title = "Malte Mosbach";
    const description = "PhD candidate at the University of Bonn building intelligent embodied agents through reinforcement and imitation learning.";
    const url = "https://maltemosbach.github.io";
    const image = `${url}/portrait_small.png`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    );
};

const mosbachAndBehnke = [
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];

const mosbachMorawAndBehnke = [
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Kara Moraw", website: "" },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];

const mosbachEwertzVillarAndBehnke = [
    { name: "Malte Mosbach*", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Jan Niklas Ewertz*", website: "", isMe: false },
    { name: "Angel Villar-Corrales", website: "http://www.angelvillarcorrales.com/templates/home.php", isMe: false },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];

const scheidererMosbachPosadaMorenoAndMeisen = [
    { name: "Christian Scheiderer", website: "" },
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Andrés Posada-Moreno", website: "" },
    { name: "Tobias Meisen", website: "", lastAuthor: true },
];

const kreisMosbachRipke = [
    { name: "Benedikt Kreis", website: "https://www.hrl.uni-bonn.de/people/kreis" },
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Anny Ripke", website: "https://www.linkedin.com/in/anny-ripke-678122339" },
    { name: "Ehsan Ullah", website: "linkedin.com/in/iamehsanullah" },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", },
    { name: "Maren Bennewitz", website: "https://www.hrl.uni-bonn.de/people/bennewitz", lastAuthor: true },
];


const schoenbachWiedemannMemmesheimer = [
    { name: "Vincent Schönbach", website: "" },
    { name: "Marvin Wiedemann", website: "" },
    { name: "Raphael Memmesheimer", website: "" },
    { name: "Malte Mosbach", website: "https://maltemosbach.github.io", isMe: true },
    { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
];


const publications = [
    {
        teaser: { type: 'video', src: case_2025 },
        title: 'Integration of the TIAGo Robot into Isaac Sim with Mecanum Drive Modeling and Learned S-Curve Velocity Profiles',
        arxivId: '2510.10273',
        codeLink: 'https://github.com/AIS-Bonn/tiago_isaac',
        conference: 'CASE 2025',
        authors: schoenbachWiedemannMemmesheimer,
    },
    {
        teaser: { type: 'video', src: humanoids_2025 },
        title: 'Interactive Shaping of Granular Media Using Reinforcement Learning',
        arxivId: '2509.06469',
        projectLink: 'https://humanoidsbonn.github.io/granular_rl/',
        codeLink: 'https://github.com/HumanoidsBonn/granular_rl',
        conference: 'Humanoids 2025',
        authors: kreisMosbachRipke,
    },
    {
        teaser: { type: 'video', src: sold },
        title: 'SOLD: Slot Object-Centric Latent Dynamics Models for Relational Manipulation Learning from Pixels',
        arxivId: '2410.08822',
        projectLink: 'https://slot-latent-dynamics.github.io/',
        codeLink: 'https://github.com/maltemosbach/sold',
        conference: 'ICML 2025',
        authors: mosbachEwertzVillarAndBehnke,
        highlighted: true,
    },
    {
        teaser: { type: 'video', src: pvom },
        title: 'Prompt-responsive Object Retrieval with Memory-augmented Student-Teacher Learning',
        arxivId: '2505.02232',
        projectLink: 'https://memory-student-teacher.github.io/',
        conference: 'ICRA 2025',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: icra_2024 },
        title: 'Grasp Anything: Combining Teacher-Augmented Policy Gradient Learning with Instance Segmentation to Grasp Arbitrary Objects',
        arxivId: '2403.10187',
        projectLink: 'https://maltemosbach.github.io/grasp_anything/',
        conference: 'ICRA 2024',
        authors: mosbachAndBehnke,
        highlighted: true,
    },
    {
        teaser: { type: 'video', src: case_2023 },
        title: 'Learning Generalizable Tool Use with Non-rigid Grasp-pose Registration',
        arxivId: '2307.16499',
        projectLink: 'https://maltemosbach.github.io/generalizable_tool_use/',
        conference: 'CASE 2023',
        tags: [{ label: 'Best Conference Paper', variant: 'success' as const }],
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: irc_2022 },
        title: 'Efficient Representations of Object Geometry for Reinforcement Learning of Interactive Grasping Policies',
        arxivId: '2211.10957',
        projectLink: 'https://maltemosbach.github.io/geometry_aware_grasping_policies/',
        conference: 'IRC 2022',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: humanoids_2022 },
        title: 'Accelerating Interactive Human-like Manipulation Learning with GPU-based Simulation and High-quality Demonstrations',
        arxivId: '2212.02126',
        projectLink: 'https://maltemosbach.github.io/interactive_human_like_manipulation',
        conference: 'Humanoids 2022',
        conferenceWebsite: 'https://humanoids2022.org',
        authors: mosbachMorawAndBehnke,
    },
    {
        teaser: { type: 'video', src: esann_2021 },
        title: 'Fourier-based Video Prediction through Relational Object Motion',
        arxivId: '2110.05881',
        codeLink: 'https://git.ais.uni-bonn.de/mosbach/relational_video_pred',
        conference: 'ESANN 2021',
        authors: [
            { name: 'Malte Mosbach', website: 'https://maltemosbach.github.io', isMe: true},
            { name: "Sven Behnke", website: "https://www.ais.uni-bonn.de/behnke/", lastAuthor: true },
        ],
    },
    {
        teaser: { type: 'video', src: csci_2020 },
        title: 'Transfer of Hierarchical Reinforcement Learning Structures for Robotic Manipulation Tasks',
        paperLink: 'https://ieeexplore.ieee.org/document/9458186',
        codeLink: 'https://github.com/maltemosbach/Learning-Transferable-Hierarchical-Structures-for-Robotic-Mainpulation',
        conference: 'CSCI 2020',
        authors: scheidererMosbachPosadaMorenoAndMeisen,
    },
];


const openSourceProjects = [
    {
        repo: 'allenai/vla-evaluation-harness',
        description: 'Evaluation harness for Vision-Language-Action models.',
        role: 'contributor' as const,
    },
    {
        teaser: { type: 'video', src: sold },
        title: 'SOLD Official implementation',
        repo: 'maltemosbach/sold',
        description: 'Official implementation of the ICML 2025 paper "SOLD: Slot Object-Centric Latent Dynamics Models for Relational Manipulation Learning from Pixels".',
    },
    {
        repo: 'maltemosbach/multi-object-fetch',
        description: 'Multi-object robotic benchmark evaluating manipulation and relational reasoning capabilities.',
    },
];



const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            <Nav />
            <main className="pt-20">
                <Article>
                    <div id="about" className="mt-8">
                        <Profile/>
                    </div>
                    <div id="publications" className="container mx-auto max-w-5xl mt-16 flex justify-between items-center">
                    <div className="flex text-2xl font-medium leading-tight">
                        Publications and preprints
                    </div>

                    {/* <div className="flex">
                        <a href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao" className="text-gray-800 hover:text-gray-600">
                            View all
                        </a>
                    </div> */}
        </div>
                    {/*<div className="text-left leading-loose">*/}
                    {/*    A complete, up-to-date list of publications can be found on <a*/}
                    {/*    href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao"*/}
                    {/*    className="link underline">Google*/}
                    {/*    Scholar</a>.*/}
                    {/*</div>*/}
                    <div className="mt-4 text-muted-foreground">
                        Sorted by recency, with{' '}
                        <span className="bg-highlight-bg border border-highlight-border px-1.5 py-0.5 rounded">representative</span>
                        {' '}papers highlighted.
                    </div>
                    <div className="mt-6">
                        {publications.map((pub, index) => (
                            <Publication key={index} {...pub} />
                        ))}
                    </div>
                    <div id="open-source" className="container mx-auto max-w-5xl mt-16 flex justify-between items-center">
                        <div className="flex text-2xl font-medium leading-tight">
                            Selected open-source projects
                        </div>

                        {/* <div className="flex">
                            <a href="https://github.com/maltemosbach" className="text-gray-800 hover:text-gray-600">
                                View all
                            </a>
                        </div> */}
                    </div>
                    <div className="mt-4 text-muted-foreground">
                        Some reference implementations and tooling released alongside my research and repos I&apos;ve {' '}
                        <span className="border border-link rounded px-1.5 py-0.5">contributed</span> {' '} to.
                    </div>
                    <div className="mt-6">
                        {openSourceProjects.map((project, index) => (
                            <OpenSource key={index} {...project} />
                        ))}
                    </div>
                    <Footer/>
                </Article>
            </main></div>
    );
};

export default IndexPage;
