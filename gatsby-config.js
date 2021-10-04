module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        //stylesProvider: {
         //   injectFirst: true,
        },
      },
   // },
   // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
  siteMetadata: {
    title: 'LeeLees Wreaths & Decor',
  },
};
