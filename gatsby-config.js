module.exports = {
  siteMetadata: {
    title: 'Giulia & Alessandro',
    author: 'Alessandro Romano',
    description: 'Matrimonio Giulia e Alessandro 3 Settembre 2020',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#6bd3e0',
        theme_color: '#6bd3e0',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-remove-serviceworker`,
  ],
}
