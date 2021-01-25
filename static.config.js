import path from "path";
const posts = require("./src/blog_posts.json");

const linkedPosts = posts.map((post) => ({
  ...post,
  link: `/blog/post/${post.id}`,
}));

export default {
  getRoutes: async () => {
    return [
      {
        path: "/",
        getData: () => ({
          posts: linkedPosts,
        }),
      },
      ...linkedPosts.map((post) => ({
        path: post.link,
        getData: () => ({ post }),
      })),
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
  ],
};
