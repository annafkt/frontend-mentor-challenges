const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

inputs.forEach(input => {
  input.addEventListener('change', checkPattern); 
});

button.addEventListener('click', lookForInvalidValues);

function checkPattern() {
  const input = this;
  const isPatternInvalid = input.validity.patternMismatch;

  giveFeedbackToUser(input, isPatternInvalid);
}

function lookForInvalidValues() {
  inputs.forEach(input => {  
    if (input.validity.valid === false) {
      e.preventDefault();
    }

    const isValueMissing = input.validity.valueMissing;

    if (isValueMissing) {
      giveFeedbackToUser(input, isValueMissing);
    } else { return; }
  });
}

function giveFeedbackToUser(input, isInvalid) {
  const errorIcon = input.nextElementSibling;

  if (isInvalid) {
    input.classList.add('invalid');
    errorIcon.classList.add('error');

  } else {
    input.classList.remove('invalid');
    errorIcon.classList.remove('error');
  }
}