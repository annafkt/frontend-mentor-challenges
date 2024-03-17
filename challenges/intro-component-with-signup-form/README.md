# Frontend Mentor - Intro component with sign-up form solution

This is a solution to the [Intro component with sign-up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).
<br>Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

## Screenshots

<table>
  <tr>
    <td><img src="screenshots/screenshot-desktop.jpg" alt="Screenshot of the desktop version"></td>
    <td><img src="screenshots/screenshot-error.jpg" alt="Screenshot of the invalid state"></td>
    <td><img src="screenshots/screenshot-mobile.jpg" alt="Screenshot of the mobile version"></td>
  </tr>
</table>

## Live

You can see the live demo here:
[Intro component with sign-up form](https://annafkt.github.io/frontend-mentor-challenges/challenges/intro-component-with-signup-form/index.html)

## Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Sass
- JavaScript

## Resources I used

- Adding the `defer` attribute to the `script` tag, so loading the script won't block the HTML content from rendering<br> 
[See here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page) - *MDN Web Docs*

- [Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - *MDN Web Docs*
- [Constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) - *MDN Web Docs*
- [Form validation](https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/) with HTML and/or JavaScript - *freeCodeCamp*
- [HTML pattern attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern) - *MDN Web Docs*
- [Element: focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) - *MDN Web Docs*
- [Element: change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) - *MDN Web Docs*
- [ValidityState interface](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState#valid) - *MDN Web Docs*
- [ValidityState: patternMismatch property](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch) - *MDN Web Docs*
- [ValidityState: valueMissing property](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/valueMissing) - *MDN Web Docs*
- About [form methods](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data) - *MDN Web Docs*
- How to [hide label text](https://www.w3.org/WAI/tutorials/forms/labels/#hiding-label-text) on a form - *W3C*
- [Placeholder pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) - *MDN Web Docs*

- I was confused about the `forEach()` method, since I thought of it as a loop and I wanted it to jump to the next iteration with the `continue` statement. But because it's a function I needed to use the `return` statement to stop its execution.<br>
[See here](https://stackoverflow.com/questions/72775702/continue-inside-a-foreach-loop) - *Stackoverflow*
- A [nice trick](https://stackoverflow.com/questions/31002593/type-new-line-character-in-element-textcontent) to render new line characters in HTML with the `white-space` CSS property - *Stackoverflow*<br>
See also: [white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space) - *MDN Web Docs*
- Input elements don't inherit the font-family automatically.<br>
[See here](https://stackoverflow.com/questions/6080413/input-doesnt-inherit-the-font-from-body) - *Stackoverflow*
- In focus state there's a default outline on the input elements, which makes the given border 'invisible'.<br>
[See here](https://stackoverflow.com/questions/38133269/text-input-border-color-not-changing-correctly-on-focus) - *Stackoverflow*
- [Adding non-breaking space](https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/) - *freeCodeCamp*

- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) - *MDN Web Docs*
- Testing regular expressions: [regex101.com](https://regex101.com)
- `\p{L}` means any letter in any language in a regex<br>
[See here](https://stackoverflow.com/questions/14891129/regular-expression-pl-and-pn) - *Stackoverflow*<br>
[See also](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) - *MDN Web Docs*
- A great help with writing [regex pattern for password validation](https://dev.to/rasaf_ibrahim/write-regex-password-validation-like-a-pro-5175) - *DEV*

- [How to design error messages](https://www.nngroup.com/articles/errors-forms-design-guidelines/) - *NN/G*

## Author

- CodePen - [@annafkt](https://codepen.io/annafkt)