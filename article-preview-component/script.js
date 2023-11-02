const shareIcons = document.getElementsByClassName('share-icon');

for (const shareIcon of shareIcons) {
  shareIcon.addEventListener('click', displayShareBox);
}

function displayShareBox() {
  const shareBox = this.nextElementSibling;
  const shareBoxStyle = window.getComputedStyle(shareBox);
  const currentDisplay = shareBoxStyle.getPropertyValue('display');

  const svg = this.firstElementChild.firstElementChild;

  if (currentDisplay == 'none') {
    shareBox.style.display = 'grid';
    // Icon:
    this.style.backgroundColor = 'var(--dark-blue)';
    svg.style.fill = 'var(--white)';
  } else {
    shareBox.style.display = 'none';
    // Icon:
    this.style.backgroundColor = 'var(--very-light-blue)';
    svg.style.fill = 'var(--dark-blue)';
  }
}