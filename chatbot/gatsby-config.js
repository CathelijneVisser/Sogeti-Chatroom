/**
 * @type {import('gatsby').GatsbyConfig}
*/
const adapter = require("gatsby-adapter-netlify")

module.exports = {


  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
  }),
  siteMetadata: {
    title: `Chatroom`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/CV-chatroom-AI-02-2024",
  plugins: ["gastby-plugin-netlify", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};