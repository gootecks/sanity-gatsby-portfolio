export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1a79bc25e9a7a186ccc3fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4t3d48ko',
                  apiId: 'c58e606f-fec2-4e0d-bc41-e479887e0e22'
                },
                {
                  buildHookId: '5e1a79bc490c18f6a67d87f9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uy8zvri4',
                  apiId: 'c32a96be-5211-4b0f-84a5-b1f27fbfa9ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gootecks/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uy8zvri4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
