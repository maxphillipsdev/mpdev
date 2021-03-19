export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60540b4f41f06254d090e685",
                  title: "Sanity Studio",
                  name: "mpdev-studio",
                  apiId: "24c04aeb-0361-42d7-a651-3a98706db1bd",
                },
                {
                  buildHookId: "60540b4f960ce5563c14100a",
                  title: "Blog Website",
                  name: "mpdev",
                  apiId: "15e1079a-a913-4f4e-9313-84cae1ab8814",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/blueybloke/mpdev",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://mpdev.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
