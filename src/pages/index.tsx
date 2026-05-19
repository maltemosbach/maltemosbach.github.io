import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import { Link } from 'gatsby';

import icra_2024 from "./videos/icra_2024.mp4"
import case_2023 from "./videos/case_2023.mp4"
import irc_2022 from "./videos/irc_2022.mp4"
import humanoids_2022 from "./videos/humanoids_2022.mp4"
import csci_2020 from "./videos/csci_2020.mp4"
import sold from "./videos/sold.mp4"
import pvom from "./videos/pvom.mp4"

import Publication from "../components/publication";
import Profile from "../components/profile";
import Footer from "../components/footer";
import {AiFillGithub, AiFillLinkedin, AiOutlineGoogle} from "react-icons/ai";


const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-4xl flex-none content-start">
            {children}
        </div>
    )
}

const ArticleHeader: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-2xl flex-none content-start">
            {children}
        </div>
    )
}


export const Head: HeadFC = () => <title>Malte Mosbach</title>

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


const publications = [
    {
        teaser: { type: 'video', src: sold },
        title: 'SOLD: Slot Object-Centric Latent Dynamics Models for Relational Manipulation Learning from Pixels',
        projectLink: 'https://slot-latent-dynamics.github.io/',
        conference: 'ICML 2025',
        authors: mosbachEwertzVillarAndBehnke,
    },
    {
        teaser: { type: 'video', src: pvom },
        title: 'Prompt-responsive Object Retrieval with Memory-augmented Student-Teacher Learning',
        projectLink: 'https://memory-student-teacher.github.io/',
        conference: 'ICRA 2025',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: icra_2024 },
        title: 'Grasp Anything: Combining Teacher-Augmented Policy Gradient Learning with Instance Segmentation to Grasp Arbitrary Objects',
        projectLink: 'https://maltemosbach.github.io/grasp_anything/',
        conference: 'ICRA 2024',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: case_2023 },
        title: 'Learning Generalizable Tool Use with Non-rigid Grasp-pose Registration',
        projectLink: 'https://maltemosbach.github.io/generalizable_tool_use/',
        conference: 'CASE 2023',
        conferenceAward: '(Best Conference Paper Award)',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: irc_2022 },
        title: 'Efficient Representations of Object Geometry for Reinforcement Learning of Interactive Grasping Policies',
        projectLink: 'https://maltemosbach.github.io/geometry_aware_grasping',
        conference: 'IRC 2022',
        authors: mosbachAndBehnke,
    },
    {
        teaser: { type: 'video', src: humanoids_2022 },
        title: 'Accelerating Interactive Human-like Manipulation Learning with GPU-based Simulation and High-quality Demonstrations',
        projectLink: 'https://maltemosbach.github.io/interactive_human_like_manipulation',
        conference: 'Humanoids 2022',
        conferenceWebsite: 'https://humanoids2022.org',
        authors: mosbachMorawAndBehnke,
    },
    {
        teaser: { type: 'video', src: csci_2020 },
        title: 'Transfer of Hierarchical Reinforcement Learning Structures for Robotic Manipulation Tasks',
        projectLink: '',
        conference: 'CSCI, 2020',
        authors: scheidererMosbachPosadaMorenoAndMeisen,
    },
];



const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            {/*<header className="p-4">*/}

            {/*    <div className="container mx-auto max-w-4xl flex justify-between items-center">*/}
            {/*        <div className="text-left">*/}
            {/*            Malte Mosbach*/}
            {/*        </div>*/}
            {/*        <nav className="space-x-8">*/}
            {/*            <Link to="/" className="text-gray-800 hover:text-gray-600">Research</Link>*/}
            {/*            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <main>
                {/*<ArticleHeader>*/}
                {/*    <div className="flex flex-wrap items-center content-start">*/}
                {/*        <div className="flex-1">*/}

                {/*            /!*<h1 className="text-sm mb-2 mt-16 leading-tight text-center">Research</h1>*!/*/}

                {/*            <h1 className="text-5xl mt-16 mb-2 leading-tight text-center">Malte Mosbach</h1>*/}

                {/*            <div className="text-center text-xl">*/}
                {/*                <p>*/}
                {/*                    I am a PhD student in the <a href="https://www.ais.uni-bonn.de" className="underline">Autonomous Intelligent Systems Group</a> at University of Bonn advised by <a href="https://www.ais.uni-bonn.de/behnke/" className="underline">Sven Behnke</a>.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</ArticleHeader>*/}
                <Article>
                    <div className="mt-8">
                        <Profile/> {/* Add the Profile component */}
                    </div>
                    <div className="container mx-auto max-w-4xl mt-16 flex justify-between items-center">
                    <div className="flex text-3xl">
                        Selected Publications
                    </div>

                    <div className="flex">
                        <a href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao" className="text-gray-800 hover:text-gray-600">
                            View all
                        </a>
                    </div>
        </div>
                    {/*<div className="text-left leading-loose">*/}
                    {/*    A complete, up-to-date list of publications can be found on <a*/}
                    {/*    href="https://scholar.google.de/citations?user=OQv4g3kAAAAJ&hl=de&oi=ao"*/}
                    {/*    className="link underline">Google*/}
                    {/*    Scholar</a>.*/}
                    {/*</div>*/}
                    <div className="mt-8">
                        {publications.map((pub, index) => (
                            <Publication key={index} {...pub} />
                        ))}
                    </div>
                    <Footer/>
                </Article>
            </main></div>
    );
};

export default IndexPage;
