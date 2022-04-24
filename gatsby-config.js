module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-graphql`,
        options: {
          typeName: `GraphCMS`,
          fieldName: `gcms`,
          url: 'https://api-eu-central-1.graphcms.com/v2/cl2d8dvtj4uwo01yw3ovwhkes/master',
        },
      },
    ],
  };