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
                  buildHookId: '600177c65fd954ef422dfc58',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9uodi98n',
                  apiId: 'a990dc17-7f7a-4cf2-a9ef-c404a39da1af'
                },
                {
                  buildHookId: '600177c704ca0a06d6fbd430',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9g5q1y63',
                  apiId: '18f26a1a-5fed-416e-a376-99a34c9be522'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxgerber/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9g5q1y63.netlify.app',
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
