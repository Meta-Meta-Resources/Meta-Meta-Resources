module.exports = {
  docs: [
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "category",
      label: "Free Online Learning",
      items: [
          {
            type: "doc",
            id: "online-learning-opportunities/overview",
          },
          {
            type: "doc",
            id: "online-learning-opportunities/moocs",
          },
          {
            type: "category",
            label: "Topic-Specific",
            items: [
              {
                  type: "category",
                  label: "Psychology / Neuroscience",
                  items: [
                      "online-learning-opportunities/topic-specific/psychology-neuroscience/select-interactives-visualizations",
                      "online-learning-opportunities/topic-specific/psychology-neuroscience/experiments-in-the-browser",
                      "online-learning-opportunities/topic-specific/psychology-neuroscience/optical-illusions",],
              },
              {
                  type: "category",
                  label: "Math / Statistics",
                  items: [
                    "online-learning-opportunities/topic-specific/math-statistics/overview",
                    "online-learning-opportunities/topic-specific/math-statistics/select-math-interactives-visualizations",
                    "online-learning-opportunities/topic-specific/math-statistics/select-stats-interactives-visualizations",],
              },
              {
                  type: "category",
                  label: "Free Programming / Markup / Stylesheet / etc Languages",
                  items: [
                    "online-learning-opportunities/topic-specific/free-coding/r",
                    "online-learning-opportunities/topic-specific/free-coding/python",
                    "online-learning-opportunities/topic-specific/free-coding/javascript",
                    "online-learning-opportunities/topic-specific/free-coding/css",
                    "online-learning-opportunities/topic-specific/free-coding/html",
                    "online-learning-opportunities/topic-specific/free-coding/regex",
                    "online-learning-opportunities/topic-specific/free-coding/markdown",
                    "online-learning-opportunities/topic-specific/free-coding/latex",
                    "online-learning-opportunities/topic-specific/free-coding/git",],
              },
            ],
          },
        ],
    },
    {
      type: "category",
      label: "Opportunities",
      items: [
          {
              type: "category",
              label: "Positions + Funding Fellowships + Recognition",
              items: ["opportunities/positions-funding-fellowships-recognition/across-fields",
                      "opportunities/positions-funding-fellowships-recognition/psychology-neuroscience",],
          },
          {
              type: "doc",
              id: "opportunities/example-submissions",
          },
          {
              type: "doc",
              id: "opportunities/conferences",
          },
          {
              type: "doc",
              id: "opportunities/workshops-summer-schools",
          },
          {
              type: "doc",
              id: "opportunities/free-products-for-students",
          },
      ],
    },
    {
      type: "category",
      label: "Running Studies",
      items: [
          {
              type: "category",
              label: "Germination",
              items: [
                  {
                      type: "category",
                      label: "Following the Literature",
                      items: [
                          {
                              type: "doc",
                              id: "running-studies/germination/following-the-literature/watching-others",
                          },
                          {
                              type: "category",
                              label: "Reading Others",
                              items: [
                                  {
                                      type: "category",
                                      label: "Find new papers",
                                      items: [
                                          "running-studies/germination/following-the-literature/reading-others/find-new-papers/search-engines",
                                          "running-studies/germination/following-the-literature/reading-others/find-new-papers/related-papers",
                                          "running-studies/germination/following-the-literature/reading-others/find-new-papers/notifications"],
                                  },
                                  {
                                      type: "doc",
                                      id: "running-studies/germination/following-the-literature/reading-others/reading-tools",
                                  },
                              ]
                          }
                      ],
                  },
                  {
                      type: "doc",
                      id: "running-studies/germination/databases"
                  }
              ],
          },
          {
              type: "category",
              label: "Preparation",
              items: [
                  "running-studies/preparation/pre-reg-repos",
                  "running-studies/preparation/reg-reports-journals",]
          },
          {
              type: "category",
              label: "Execution",
              items: [
                  {
                      type: "doc",
                      id: "running-studies/execution/online-platforms-communities",
                  },
                  {
                      type: "category",
                      label: "Stimuli (for free)",
                      items: [
                          {
                              type: "category",
                              label: "Experimental Stimuli",
                              items: [
                                  "running-studies/execution/stimuli/experiment-stimuli/faces",
                                  "running-studies/execution/stimuli/experiment-stimuli/linguistics",
                                  "running-studies/execution/stimuli/experiment-stimuli/computer-vision",
                                  "running-studies/execution/stimuli/experiment-stimuli/everything-else",],
                          },
                          {
                              type: "doc",
                              id: "running-studies/execution/stimuli/stock-resources",
                          },
                      ],
                  },
              ],
          },
          {
              type: "category",
              label: "Analyses",
              items: [
                  {
                      type: "doc",
                      id: "running-studies/analyses/sans-code",
                  },
                  {
                      type: "doc",
                      id: "running-studies/analyses/with-code",
                  },
              ],
          },
          {
              type: "category",
              label: "Publication",
              items: [
                  "running-studies/publication/standard-journals",
                  "running-studies/publication/preprints",
                  "running-studies/publication/non-traditional-outlets",
                   "running-studies/publication/sharing",],
          },
      ],
    },
    {
        type: "category",
        label: "Communities",
        items: [
            {
                type: "category",
                label: "Networks",
                items: [
                    {
                        type: "doc",
                        id: "communities/networks/presences",
                    },
                    {
                        type: "doc",
                        id: "communities/networks/directories",
                    },
                    {
                        type: "category",
                        label: "Organizations",
                        items: [
                            {
                                type: "doc",
                                id: "communities/networks/organizations/discipline-specific",
                            },
                            {
                                type: "category",
                                label: "Location-Concentrated",
                                items: [
                                    {
                                        type: "doc",
                                        id: "communities/networks/organizations/location-concentrated/africa",
                                    },
                                    {
                                        type: "doc",
                                        id: "communities/networks/organizations/location-concentrated/asia-pacific",
                                    },
                                    {
                                        type: "doc",
                                        id: "communities/networks/organizations/location-concentrated/latin-america",
                                    },
                                    {
                                        type: "doc",
                                        id: "communities/networks/organizations/location-concentrated/pan-europe",
                                    },
                                    {
                                        type: "category",
                                        label: "U.S. + Canada",
                                        items: ["communities/networks/organizations/location-concentrated/us-canada/non-regional",
                                                "communities/networks/organizations/location-concentrated/us-canada/states",
                                                "communities/networks/organizations/location-concentrated/us-canada/regional",],
                                    },
                                ],
                            },
                            {
                                type: "doc",
                                id: "communities/networks/organizations/for-underrepresented-groups",
                            },
                            {
                                type: "doc",
                                id: "communities/networks/organizations/open-science",
                            },
                        ],
                    },
                ],
            },
            {
                type: "doc",
                id: "communities/lab-guides-manuals",
            },
        ],
    },
    {
        type: "category",
        label: "Contributing",
        items: ["contributing/getting-involved",
                "contributing/contributors",
                "contributing/coarse-guidelines",
                "contributing/areas-most-lacking-currently",
                "contributing/ripe-for-addition"],
    },
].filter(Boolean),
};
