import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Malte Mosbach`,
        siteUrl: `https://maltemosbach.github.io`,
    },
    pathPrefix: "/",
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: "src/images/ff_icon.png",
            },
        },
    ],
};

export default config;
