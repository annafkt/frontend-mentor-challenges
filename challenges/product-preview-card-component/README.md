# Frontend Mentor - Product preview card component solution

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Built with](#built-with)
- [Problems and solutions](#problems-and-solutions)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

## Screenshot

<table>
  <tr>
    <td><img src="screenshots/screenshot-desktop.jpg" alt="Screenshot of the desktop layout"></td>
    <td><img src="screenshots/screenshot-mobile.jpg" alt="Screenshot of the mobile layout"></td>
  </tr>
</table>

## Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

## Problems and solutions

#### <ins>A gap under the image</ins>

There was a little gap under the image, as if it had not filled its container properly.<br>
The solution was to display it as a block element.
[Stackoverflow](https://stackoverflow.com/questions/10266849/image-will-not-fill-div)

#### <ins>Equal space between elements</ins>

I played around a lot with the vertical alignment of the text until I remembered that with flexbox it is possible to add equal space between the flex items.

[justify-content: space-between](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) *(MDN Web Docs)*

#### <ins>Article or section</ins>
This article is very useful to decide which HTML element I should choose for a component.<br>
[Article and section elements](https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/) *(Smashing Magazine)*

#### <ins>Incorrect values in the image size</ins>

After I finished the challenge, I checked my HTML code with a validator and it turned out that I shouldn't have used percentage for the image's width, nor the auto value for the height. They need an explicit unit I assume. I know it's important to set the size of an image in HTML, but then I have trouble keeping the layout responsive.

I will continue to experiment with this problem in future challenges.

(Furthermore, the alt attribute is not allowed on the source element.)

UPDATE: I've set the size in pixel and then resized it with CSS.

## Author

- CodePen - [annafkt](https://codepen.io/annafkt)