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
            id: "online-learning-opportunities/background",
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
                  label: "Math / Statistics",
                  items: [
                    "online-learning-opportunities/topic-specific/math-statistics/background",
                    "online-learning-opportunities/topic-specific/math-statistics/select-math-interactives",
                    "online-learning-opportunities/topic-specific/math-statistics/select-stats-interactives",],
              },
              {
                  type: "category",
                  label: "Free Programming/ Markup/ Stylesheet/ etc Languages",
                  items: [
                    "online-learning-opportunities/topic-specific/free-coding/r"],
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
              type: "doc",
              id: "opportunities/grant-databases",
          },
          {
              type: "category",
              label: "Positions + Fellowships + Recognition",
              items: [
                  {
                      type: "doc",
                      id: "opportunities/positions-fellowships-recognition/across-fields",
                  },
                  {
                      type: "category",
                      label: "Only Psychology/Neuroscience",
                      items: [
                          "opportunities/positions-fellowships-recognition/only-psychology-neuroscience/mostly-positions-fellowships",
                          "opportunities/positions-fellowships-recognition/only-psychology-neuroscience/mostly-awards"],
                  },
              ],
          },
          {
              type: "doc",
              id: "opportunities/example-submissions",
          },
          {
              type: "doc",
              id: "opportunities/conferences-workshops-summer-schools",
          },
          {
              type: "doc",
              id: "opportunities/free-resources-for-students",
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
                  // {
                  //     type: "doc",
                  //     id: "opportunities/positions-fellowships-recognition/across-fields",
                  // },
                  {
                      type: "category",
                      label: "Following the Literature",
                      items: [
                          "running-studies/germination/following-the-literature/watching-others"],
                  },
              ],
          },
          {
              type: "category",
              label: "Execution",
              items: [
                  {
                      type: "category",
                      label: "Study Materials",
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
                                          "running-studies/execution/stimuli/experiment-stimuli/everything-else",],
                                  },
                              ],
                          },
                      ],
                  },
              ],
          },
          // {
          //     type: "doc",
          //     id: "opportunities/example-submissions",
          // },
          // {
          //     type: "doc",
          //     id: "opportunities/conferences-workshops-summer-schools",
          // },
          // {
          //     type: "doc",
          //     id: "opportunities/free-resources-for-students",
          // },
      ],
    },
    {
      type: "category",
      label: "Networks",
      items: ["networks/directories", "networks/organizations"],
    },
    {
      type: "category",
      label: "Contributing",
      items: ["contributing/getting-involved", "contributing/contributors"],
    },
].filter(Boolean),
};
