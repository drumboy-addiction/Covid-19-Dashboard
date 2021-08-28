module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sitebook`,
        path: `${__dirname}/src/sitebook/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "COVID-19",
  },
};
