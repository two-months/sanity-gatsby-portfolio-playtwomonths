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
                  buildHookId: '60170349b01495048deb56c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-playtwomonths-studio',
                  apiId: 'fb274027-ca74-4a1f-8e1d-4e47a2df68c9'
                },
                {
                  buildHookId: '60170349bfa5d7eae831b689',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-playtwomonths',
                  apiId: 'b5f88a49-1238-4c6e-a161-c79e6caf2396'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/two-months/sanity-gatsby-portfolio-playtwomonths',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-playtwomonths.netlify.app',
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
