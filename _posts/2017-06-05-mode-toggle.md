---
layout: post
title: "Toggling Day and Night Mode"
date: 2017-06-05 14:12:00 -0400
tags: css toggle branch
visible: true
comments: true
math: false
---

This post is a culmination of three things I am learning:
- CSS toggle
- git branch
- jekyll serve

I have very limited experience with CSS beyond copy-paste-modding code I find online. My github page has started off as a dark theme and I understand that this is not always appealing to everyone. I wanted to add a toggle to my site to switch between a light and dark theme, but I know this is going to take some time.

Since I don't want to break my site by testing it live on github until it works, I figured it was finally time to use jekyll's local testing capability on top of git branching. This was surprisingly easy and actually improved my workflow a ton.


(Step 1) Dependencies. Taken from <a href="https://stackoverflow.com/a/26595869/3454650">this stack post</a>:

```bash
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev

cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3.1
rbenv global 2.3.1
ruby -v

gem install github-pages
```

(Step 2) Testing. Taken from <a href="http://kbroman.org/simple_site/pages/local_test.html">this blog post</a>:
```bash
jekyll build

# I do this to avoid the local build files going to github
echo -e "_site/\n.sass-cache/" >> .gitignore

jekyll serve
firefox localhost:4000
```

Excellent! Now Jekyll will see your changes in the file system as it is serving, and you can keep refreshing to see the updates. This is much faster than having github rebuild your page over and over. This really facilitates testing out small tweaks rapidly.


Now since I want to host these changes remotely, I needed a developmental branch on github. I found <a href="https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too">this stack post</a> and I was in.

```bash
git checkout -b dev
git branch
* dev
master

# for commits and pushes involving my new devlopments
git commit -m "a message"
git push -u origin dev
```

Now I have a remotely hosted devlopment branch which I can set up for testing locally anywhere, without sacrificing breaking my live site. This is continuos integration in practice! Feelsgoodman.jpg


Ok. Now getting to the actual point of this post! How do I add a day/night mode toggle to my page, when I know barely any CSS? This might be entertaining for those of you who have taken on foreign challenges in a similar manner.

(Step 1) Google.
"day night mode toggle css"

Results:
 - <a href="https://codepen.io/jsndks/pen/qEXzOQ">code pen</a>
 - <a href="https://designshack.net/articles/css/lightsoff/">design shack</a>

I searched through a few links, but these two were the most promising. The former gives me an actual switch, and its mad cool looking already. The latter provided a pretty in depth explantion of how to implement the before and after effects when toggling the switch!

So I gave the links a quick read, to see what I was getting myself into, and it doesn't seem too monstrous. I came up with a checklist of goals to accomplish to do this:

 - Create a day time color pallette
 - Add the switch to the top of my page next to my title
 - Add the toggle effect and its animation
 - Use the `before`, `after`, and `checked` conventions found in the blog post to implement the day / night mode changes.


To be continued...
