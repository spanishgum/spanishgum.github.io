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

 - Add the switch to the top of my page next to my title
 - Tweak the CSS and HTML so the toggle plays nicely
 - Create a day time color pallette
 - Add the pallette to the toggled css using the `before`, `after`, and `checked` conventions


First I copy pasted the scss code from code pen into my `assets/css/style.scss` file. This file gets rendered after the jekyll layout, so everything here will take precedence.

I removed the `body {...}` from this code since I didn't want to interfere with my hacker theme.

I made a `toggle.html` file in my `_includes` folder to hold the toggle item, and added `{% raw %}{% include toggle.html %}{% endraw %}` to my layouts to get it to show up. I removed the `<div class="wrapper">..</div>` tags from the toggle because it was unneccessary and the associated style was undesirable. I also moved my `<header>..</header>` sections from the `default.html` and `post.html` layouts into an include file `header.html`.

To get the positioning right, I tweaked a lot of stuff. Mostly, I just started making pixel values from the new CSS smaller, one by one and testing it.

I created new classes and relevent CSS for my header to make it two column:

```html
{% raw %}
<div class="header_container container">
    <div class="headercol_l">
        <h1><a href={{ site.url }}>{{ site.title | default: site.github.repository_name }}</a></h1>
        {% include social.html %}
    </div>
    <div class="headercol_r">
        {% include toggle.html %}
    </div>
</div>
{% endraw %}
```

```css
.headercol_l {
    margin: 0 auto;
    float: left;
    width: 60%;
    max-width: 360px;
}

.headercol_r {
    margin: 0 auto;
    float: right;
    width: 40%;
    max-width: 240px;
    overflow: auto;
}

.headercol_r:before,
.headercol_r:after {
    content: "";
    display: table;
}

.headercol_r:after {
    clear: both;
}


.header_container {
    overflow: auto;
}

.header_containter:before,
.header_containter:after {
    content: "";
    display: table;
}

.header_containter:after {
    clear: both;
}
```

I read about this technique in <a href="https://stackoverflow.com/a/18557316/3454650">this stack post</a> but to be honest I can't explain to you what is happening. I found the same code to be in the toggle CSS, so I guess this is a commonly used technique.

I had to fidget with the `width` properties of my header columns to keep the page from putting the header in a scroll box. I added some `margin-top` to the `toggle` as well to bring it down.

Somehow I managed to get it in the header clean without acting weird, but it took a lot of pain and trudging. My hat is off for CSS people. I will never fully grasp this mysterious language.

Before moving on to finding a color pallette, I wanted to make the night time mode the default. At first I thought I was going to move around the CSS, but then I laughed that idea right off the table. Turns out you can just put `checked=""` in the html tag of the toggle input. Really dodged a bullet there.



This post is already long enough now, so I think I am going to save the color pallette for my next post. But before leaving you, let me explain how I am merging my development branch into master for live publishing. Here is <a href=https://stackoverflow.com/questions/14168677/merge-development-branch-with-master">a stack post</a> I followed for reference.

```bash
# start on dev branch
git branch
* dev
master

git merge master # and resolve conflicts

# go to master branch
git checkout master

# merge updates from dev into master
git merge dev
```
