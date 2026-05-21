import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Malte Mosbach`,
        siteUrl: `https://maltemosbach.github.io`,
    },
    pathPrefix: "/",
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "Geist:300,400,500,600,700",
                    "Geist+Mono:400,500",
                ],
                display: "swap",
            },
        },
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/ff_icon.png"
            }
        }, "gatsby-plugin-mdx", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }]
};

export default config;
