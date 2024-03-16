# Frontend Mentor - Product preview card component solution

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
<br>Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

## Screenshots

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

## Resources I used

- There was a little gap under the image, as if it had not filled its container properly<br> 
The [solution](https://stackoverflow.com/questions/10266849/image-will-not-fill-div) was to display it as a block element. - *Stackoverflow*

- I played around a lot with the vertical alignment of the text until I remembered that with flexbox it is possible to add equal space between the flex items.<br> 
[justify-content: space-between](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) - *MDN Web Docs*<br>
[align-content: space-between](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) - *MDN Web Docs*

- This article is very useful to decide which HTML element I should choose for a component<br>
[Article and section elements](https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/) - *Smashing Magazine*

- After I finished the challenge, I checked my HTML code with a [validator](https://validator.w3.org/) and it turned out that I shouldn't have used percentage for the image's width, nor the auto value for the height. They need an explicit unit I assume. So I set the size in pixel and then resized it with CSS.<br>
Furthermore, the alt attribute is not allowed on the source element.

## Author

- CodePen - [annafkt](https://codepen.io/annafkt)