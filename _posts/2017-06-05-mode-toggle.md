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

Since I don't want to break my site by testing it live on github until it works, I figured it was finally time to use jekyll's local testing capability. This was surprisingly easy and actually improved my workflow a ton.


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


Now since I want to host these changes remotely, BUT I also do not want to see them on the live site, it was finally time to figure out branching. All I needed to get going was <a href="https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too">this stack post</a> and I was in.

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

To be continued...
