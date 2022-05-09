module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      theme_color: "#262626",
      background_color: "#363636",
      display: "standalone",
      scope: "/",
      start_url: "/",
      name: "IrayyaHiremath",
      short_name: "IrayyaHiremath",
     description: "Portpolio",
      icons: [
          {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
          },
          {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png"
          },
          {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png"
          },
          {
              src: "/icon-512x512.png",
            sizes: "512x512",
              type: "image/png"
          }
      ]
  }
}
  ],
}