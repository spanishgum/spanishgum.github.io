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
        template: "src/pages/blog",
        getData: () => ({
          posts: linkedPosts,
        }),
      },
      ...linkedPosts.map((post) => ({
        path: post.link,
        template: "src/pages" + post.link,
        getData: () => ({ post }),
      })),
    ];
  },
};
