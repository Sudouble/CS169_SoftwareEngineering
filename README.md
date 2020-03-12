# Smile ^_^ Warmup Project

Before we jump into the main team projects, let's get some practice with web
development by building a Smile app.
It's split into three parts, each with different due dates - (1) HTML/CSS, (2) Javascript, and (3) Testing/Backend.

This is an individual project. You can collaborate and help each other out with parts you're stuck on, but do not cheat and share code. If you use online resources, please reference them with comments in your code. We want you to learn how to do each of these parts. You'll need to know it for the main team project and quizzes.

Smile is an app to share experiences from your day that made you smile and things people did that you are grateful for. It's inspired by the Gratitude Journal. Psychologists did a series of research experiments where they had individuals write down three things they are grateful for each day, and it significantly boosted their happiness. But instead of keeping a super secret personal journal, why not spread the happiness? We know some people write pretty personal things, so all posts will be anonymous.

Check out the happiness research at the end. And if you're really into psychology and happiness, you should take the popular PSYCH 162 Human Happiness course offered right here at UC Berkeley, taught by Professor Dacher Keltner (he's amazing!).

So what can you do in the app? You'll be building out these features:
- Create posts called 'smiles'
- View all smiles posted by everyone
- Like a smile

This is how it is going to look at the end of Part 1 of the project:

![Smile](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-1-3.png)

## Acknowledgments

The Smile project was initially designed by
[Carina Boo](http://carinaboo.com/). So, if it does give you a smile, you
should thank Carina. 

## Part 1: HTML/CSS

In part 1, you'll be building the UI (user interface) for the app. It won't be hooked in to a database yet to store the smiles you create - that will come in part 2. This part is just about learning how to build UI using semantic HTML, customize the layout, style it, and make it responsive - responsive, meaning the UI scales nicely for desktop browsers and mobile phone browsers.

Some of you may know HTML/CSS pretty well already. But from last semester's
students, over 60% of the students had little experience with HTML and CSS,
and we want all of you to be ready when it comes time for team projects. If
you're experienced in HTML/CSS and finish early, be nice and help out your
classmates by answering questions on Piazza. :)

This Part 1 is structured in several Tasks. This sequence of tasks
is for your convenience, so that you can proceed in relatively small
steps and check your work.
You will submit, and we will only grade, only the end result, after Task 4.

### Task 1: Get Started with the Provided Files
---

To help you start we have provided some boilerplate files that you will have to
modify to implement the project.

1. Using your GitHub account, find the Smile course repository
(https://github.com/necula01/smile_cs169) and create a Fork in your account.
You should be able to see it at https://github.com/your_account/smile_cs169.

1. Clone your forked repository on the working machine
```
git clone https://github.com/your_username/smile_cs169.git
```

1. You now have a local copy of your `smile_cs169` repository. You

1. Create a local branch named `part1`
```
git checkout -b part1
```

1. You will now be editing locally, and **remember to commit frequently**.

1. You will find the following provided files:
    - static/images
        - `favicon.png` icon that shows on the browser tab
        - `happiness-level.png` sprite for three levels of happiness
        - `heart.png` icon for like button
        - `logo.png` app logo
    - static/styles
        - `main.css` where all the styling goes
    - static/html    
        - `create.html` create page
        - `index.html` home page
    - static/scripts (not needed for Part 1; will need for Part 2)
        
   You will have to make changes to the .css and the .html files.

1. Open the `index.html` file with a browser to see the initial
   version of the provided files.
    - for Chrome, File/Open File, choose smile_cs169/index.html
    
   At this point if you open `index.html` it should look like this:
   
![Part 1 Task 1](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-0.png)

### Task 2: The Home Page
---

The first page you'll build is the home page. This page will show all smiles posted by everyone.


#### Task 2.1: Basic HTML Elements

The home page will go in `index.html`.
Add elements to the page by following the instructions below. 

If you are new to HTML or would like a quick review, visit
[this tutorial](http://www.w3schools.com/html/html_intro.asp).

Add elements for all of the following. Don't worry about positioning or styling them yet. Try to use semantic elements that says something about the content it holds, rather than using the generic `<div>` for everything. E.g. use a `<header>` for page and section headers, or a `<nav>` if we had a navigation bar. Learn more about [HTML semantic elements](http://www.w3schools.com/html/html5_semantic_elements.asp).

1. Header with a logo. Add the logo image in the existing `<header>` element,
   using the HTML class "`logo`".
   You can find the logo in `images/logo.png`. Feel free to design your own.
1. "`Share a smile`" link that points to `create.html` for posting a new smile.
   Add the link to the existing `<div>` with HTML class "`create`" in the `<header>`.
1. Smile post. Each post should show its:
  1. Title. Use a `<div>` element with HTML class "`title`".
  1. Happiness level. We'll be using a CSS background-image in Task 2.3 for
     this one, so for now, just create a `<div>` with the HTML class
     "`happiness-level`" and write "`Lvl`" in it.
     Next, we'll customize the post to have a specific happiness
     levels: add an additional HTML class "`happiness-level-1`" to
     the `<div>` for first post.
     
  1. Story text. Use a story text that is more than a few lines long, so you
     can fully test the automatic resizing that we'll
     get to later. Use a `<div>` element with HTML class "`story`".
  1. Like button for if this post made you smile.
      Use a `<button>` element with the HTML class "`like`" and the text
      "Like" (we'll change this later to an image).
  1. Number of people who this post made smile.
     Use a `<div>` element with the HTML class "`count`", and contents a number.
  1. Timestamp for when this was posted.
      Use a `<div>` with HTML class "`timestamp`", and contents of the form "Posted at 1:03pm May 22, 2015".
1. Create 2 more smile posts, with stories about something that happened that
    made you smile, or something someone did for you that you're grateful for.
   The posts should have the same HTML structure as the first post.
    We'll use all 3 posts while customizing layout.
    1. Change the "`happiness-level-1`" HTML class for the second and third post
    to  "`happiness-level-2`" and  "`happiness-level-3`", respectively. This
    will allow you to test the display of the three different happiness
    levels.

At this point if you open `index.html` it should look like this:

![Part 1 Task 2.1](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-1-2.1.png)


#### Task 2.2: Getting the Layout Right

Now let's customize the layout and positioning of the elements. You'll be
writing CSS in `/styles/main.css`. You will also have to make small changes
to `index.html`.

If you are new to writing CSS or need a quick review, see
[this tutorial](http://www.w3schools.com/css/css_intro.asp).

An important web design philosophy is the separation of content (HTML) from
the presentation of content (CSS). So, even though you are able to write
inline CSS in HTML tags, please don't do that!

1. The whole header should be as wide as the browser window. (Hint: `display: block`,
   percentage `width`)*
1. The logo should be centered horizontally within the header. (Hint:
   `text-align`)
1. The `<div>` that contains the `Share a smile` link should be as
   wide as the browser window. Use the HTML class "`my-button`" for
   the link element.
   The link itself should also be as wide as the browser window. (Hint:
   `display: block`, percentage `width`).
   You can test that this works properly, if you see the mouse cursor changing
   *for the entire width of the window*.
1. The title of each post should be centered. (Hint: make the `<div>` as wide
   as the browser window, and the text inside centered.)   
1. Position the post content into three columns, so the happiness level is on
  the left, the story text is in the center, and the like button along with
  the like count is on the
  right.
  The width of the happiness level column and like button column should be constant (e.g.,
  80px), while the story text column should scale wider if you widen your browser 
  window.
   (Hint: wrap the happiness into a separate `<div>` with HTML class
  "`happiness-level-col`",
  wrap the story into a separate `<div>` with HTML class "`story-col`",
  and wrap both the like button and the count into a
  `<div>` with HTML class "`like-col`". Set a fixed `width` for the level column
  and the like column, and set `width: calc(...)` for the story. Use `float: left` on all
  three `col`s, and use `clear: left` on the `<div>` that follows the
   floating elements)
1. The happiness level should be centered horizontally in the column.
1. The number of people who liked the post should be right underneath the button and centered. 
1. The timestamp should be underneath the story text. (Hint: use `margin-left`
   to add enough margin to it to make it align with the story text.
1. The header (including the logo and `Share a smile` button) should be always
   stick to the top and remain visible on the screen as you scroll. (Hint:
   `position: fixed`; set `margin-top` for the `mainbody` to ensure it is not
   hidden by the header; also set
   `background-color` on the `<header>` to ensure that the posts
   scroll underneath.)


\* We provide hints to help guide those with less CSS experience. If you know a different/better way to implement the same styling, feel free to use your way.

At this point if you open `index.html` it should look like this. If you scrolled
it down a bit the header should stays fixed:

![Part 1 Task 2.2](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-1-2.2.png)


#### Task 2.3: Stylin' It Pretty

It's coming along! Now let's style it nicer and make it look like an actual
app. We only have the following styling guidelines as far as what we're
grading you on. You can any additional styling to make it look however you
think looks awesome.
For this task you only need to edit `/styles/main.css`.

1. Pick a nicer `font-family` than the default Times New Roman for your app.
   Check out
   [browser-supported fonts](http://www.w3schools.com/cssref/css_websafe_fonts.asp)
   or
   choose from hundreds of free [Google Fonts](https://www.google.com/fonts).
1. The `font-size` for posts title should be larger than the story text.
   (Hint: use percentages)
1. Add nice `background-color` to the `<header>`, the `<body>` and the posts,
   so that the header stands out from the list of posts, and the margin
   between posts is visible. 
1. Add `padding` to your containers. You can decide how much and on which elements.
1. Add more `margin` to each smile post so there is more spacing in between posts.
1. We want the `Share a smile` link to look like a button.
   Add style definitions for the `"my-button"` class (which we used on the
   link element) to have:
   `background-color` and `border`, remove the default link underline on
   the link element. (Hint: `text-decoration`). To make it look more like a
   button you may want to use slightly wider borders and slightly darker
   colors, on the bottom and right side.
   
1. On hover of the `Share a smile` button, the `background-color` should change. (Hint: check out the `:hover` selector)
1. Change the like button to use `images/heart.png`. (Hint: use `border: none`
and `background: none` to get rid of default button styling
and `background-image: url('../images/heart.png');`; adjust `height` and
`width`; you can use `color: transparent` to make sure that the "`Like`" text
 you wrote in the HTML does not show up.)

1. Replace the `Lvl` text with the happiness level icons in `images/happiness-level.png`. 
  ![happiness level](https://raw.githubusercontent.com/necula01/smile_cs169/part1/static/images/happiness-level.png)
  Or create your own three-icon sprite. (Hint: `background-image`)
  
    - You'll notice there are 3 images in one png. This is called a sprite. Developers often combine a bunch of icons onto one file to speed up page load time since every image requires a network request. (E.g. this is the [sprite Google Doc uses](https://ssl.gstatic.com/docs/common/h_sprite11.svg))
    - You'll want to use `background-image` to specify the image file. Set
      `width` to `40px` and `height` to `80px` (the size of one icon in the
      sprite). Set `background-repeat` to turn off repeating the image. 
    - Add CSS definitions for each of the 3 happiness levels (e.g.,
      "`.happiness-level-1`") to position the sprite so it shows the right
      icon. Use `background-position: ...px ...px`.


At this point if you open `index.html` it should look like this:

![Part 1 Task 2.3](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-1-2.3.png)

### Task 3: Responsive Layout for Desktop and Mobile
---

Next, we'll learn a little about how responsive layouts work.
There are CSS frameworks like [Bootstrap](http://getbootstrap.com/css/#grid)
and [Foundation](http://foundation.zurb.com/grid.html)
which have grid layouts for developers to use just by adding pre-defined CSS
column classes.
But in this project, we'll learn how to do responsive layouts manually and see how it works under the hood.

At the bottom of `styles/main.css`, you'll see a `@media screen` definition. `(min-width: 800px)` means the styles within this definition applies for browser screens 800px or wider.

1. Change the layout to show smiles in 1 column for screens narrower than
   800px, in 2 columns for screens between 800px and 1200px,
   and in 3 columns for screens larger than 1200px.
   You can make use of the
   [column-count](http://www.w3schools.com/cssref/css3_pr_column-count.asp)
   property.
   You can test the responsive styling by dragging your desktop browser window
   larger or smaller than 800px and 1200px.
1. You may notice that when you resize the screen some of the longer smiles
  are split over multiple columns. To prevent this you may want to add
```css 
.smile {
   display:inline-block;
}
```

At this point if you open `index.html` it should look like this:

![Part 1 Task 3](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-index-1-3.png)


### Task 4: The Create Page
---

Next - the create page so we can actually create new smiles! Now we'll be working with forms.

#### Task 4.1: HTML Form Elements

Open up `create.html`.

1. Add the logo like you did in the home page.
1. Add a message (e.g., "`Tell us something that made you smile`"). Add
   a `<div>` with HTML class "`message`" above the form.
1. Inside the `form`, add a `textarea` with the placeholder text "`Share a
   smile...`", with HTML class "`story-input`" and `name` attribute "`story`".
1. Add a `select` dropdown with 3 options "`Happy`", "`Really happy`", "`So
   ecstatic, I can't stop smiling!`" for how happy the moment made you feel.
   The options should have "`value`" attribute equal to 1, 2, and 3 respectively.
  The 3 options will correspond to the happiness level sprite icons. (You can
  rename the options if you'd like.) 
  Use the HTML class "`happiness-level-input`" and `name` attribute
  "`happiness-level`" for the `<select>`. 
1. Add a `label` for the happiness level dropdown and title it "`How happy did
   this make you?`". Add it before the `select`.
1. Add a submit button using `<input type="submit"/>` with HTML class `submit-input`.
  - In forms, we typically use `<input type="submit">` rather than `<button>`. `<button>`s are typically used for clickable items that don't take user to a different web page.
1. Change the submit button's text to `Post`.
  - Click on the button. It should take you to your home page. Browsers by
    default handle clicking on `<input type="submit">` to redirect users to
    wherever the `<form>`'s `action` attribute specified.
  - After you click, verify in the browser URL box that you have a query
    string, such as, "?title=title&story=blah&happiness-level=2". This is
    what happens by default for a `form` with the `method=get`, as we have
    defined our form for now.
1. Last, add a "`Cancel`" link onto the create form in case the user doesn't want to make the post. On click, take the user back to the home page.

At this point if you open `create.html` (or if you click the `Share a smile`
button on `index.html`) it should look like this:

![Part 1 Task 4.1](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-create-1-4.1.png)


#### Task 4.2: Getting the Form Layout Right

All the form elements stack up squished horizontally. Let's make it look nicer.

1. We want the form to take 80% of the width of the screen. (Hint: make the
   `form` have `display: block`, the proper width, and `margin: auto`.
1. Change the title input's `width` to the full width of the form. (Hint:
   `display: block`)
1. Change the textarea to be below the title, with a `width` equal the full width of the form. (Hint:
   `display: block`)
    Add some margin above and below the textarea. Increase the `height` of the
   textarea. 
1. Position the happiness level label and dropdown so it's not horizontally next to each other. (Hint: `display: block`)
1. Position the Cancel and Post button, so the Cancel is on the left, and the
   Post is on the right. (Hint: `display: block` along with `float: left` | `float: right`)
1. Add some `padding` and `margin` to space out elements, wherever you think needs more spacing.

At this point if you open `create.html` (or if you click the `Share a smile`
button on `index.html`) it should look like this:

![Part 1 Task 4.2](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-create-1-4.2.png)


#### Task 4.3: Stylin' Forms

Last bit for the create form. We'll reuse some of the styling we already did for the home page.

1. Use the same button styling (`background`, `border`, `hover`) as your
   "Share a smile" button.
  Except the width should not be 100%.
  We will reuse the style definition for the "`my-button`" class.
  Add the "`my-button`" HTML class to the Cancel and Post links.

You can style the rest of the form however you'd like - e.g. make the cancel link look like a button, change the font sizes, change the dropdown styling.

At this point if you open `create.html` (or if you click the `Share a smile`
button on `index.html`) it should look like this:

![Part 1 Task 4.3](https://raw.githubusercontent.com/necula01/smile_cs169/part1/README.d/screen-create-1-4.3.png)


You're done! Feel free to add additional styling to make your app look even better. Get creative!


### How to Submit
---

We'll use Github Pages to host your Smile app. To set this up:

1.  Commit your changes locally. Make sure you are in branch `part1`.

1. Push the `part1` branch to GitHub:
```
git push origin part1
```
   - You can submit multiple times, after intermediate tasks, but on the deadline
      you need to have submitted the end result.
   
1. GitHub has a feature whereby it can host your HTML files. To enable
    this feature you must have a branch named `gh-pages`.
    For now, we will set this to be your submission to Part 1 of the
    project:
```
git push -f origin part1:gh-pages
```
    - Now your finished project should be up on http://your_username.github.io/smile_cs169/static
    - We will use this url to see and grade your project. Please do not change
      your gh-pages branch until you hear that we have graded Part 1.
    

1. Watch Piazza and the class web site for the link to a form where you will
   have to submit the url to your project. 

