# Welcome

Originally I used `Jekyll` to render my blog. It is a great tool with official support for github pages, and if you just want to get some content up, that may be the right answer for you.

However, I wanted to see if I could make a static web page using React. Turns out you can, and it's not that difficult.

The first thing to keep in mind is that github pages serve static files from you master branch. This means you don't have a server behind github running your dev server with something like `yarn start`. Instead, you need a raw `index.html` file in your projects root directory. Paths to other files and content also start from the root.

If you don't already know, a react project can be built to generate static files. I've used [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) which provides a build script (`yarn build` -> `react-scripts build`). This generates a `build` directory.

While this is great, you really need to move the files from the `build` directory to the root directory. This would be ugly to manage, but thankfully there is a tool called [`gh-pages`](https://www.npmjs.com/package/gh-pages). All this tool does really is provide you with a script like `yarn deploy` to publish files in the `build` directory to the master branch at its root. However, this means your development code needs to exist on a separate branch independently. For me, this is the `dev` branch. `master` and `dev` coexist as two independent branches.

Once you figure out your workflow, you can get started writing react code! Just keep in mind you don't have the luxury of a server. Everything has to be done using static files. This shouldn't limit you too much if you're only creating something like a blog.

Happy coding!
