const coursePath = `${__dirname}/../webtech`

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `academy-courses`,
    options: {
      include: coursePath,
    },
  },{
    resolve: `academy-modules`,
    options: {
      include: coursePath,
    },
  },{
    resolve: `academy-slides`,
    options: {
      include: coursePath,
    },
  },{
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography.js`,
      omitGoogleFont: true,
    }
  },{
    resolve: `gatsby-plugin-glamor`,
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `courses`,
      path: coursePath,
    },
  // },{
  //   resolve: "gatsby-theme-slideshow",
  //   options: {
  //     contentPath: "slides"
  //   }
  // }, {
  //   resolve: "gatsby-plugin-page-creator",
  //   options: {
  //     path: path.join(__dirname, `content`, `modules`),
  //   },
  },{
    resolve: `gatsby-transformer-sharp`,
  },{
    resolve: `gatsby-plugin-sharp`,
  },{
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [{
          resolve: 'gatsby-remark-title-to-frontmatter',
        },{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-',
            aliases: {},
            showLineNumbers: false,
            inlineCodeMarker: '±',
            prompt: {
              user: "whoami",
              host: "localhost",
              global: false,
            },
          },
        },{
          resolve: `gatsby-remark-images`,
        }
      ]
    }
  },{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Web Technologies',
        short_name: 'Web Technologies',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#105859',
        display: 'minimal-ui',
        icon: 'static/favicon.ico', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
],
}
