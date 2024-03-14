const challenges = {
  "newbie": [
    {
      "title": "Results summary component",
      "technologies": "HTML, CSS"
    },
    {
      "title": "Product preview card component",
      "technologies": "HTML, CSS"
    },
    {
      "title": "Stats preview card component",
      "technologies": "HTML, CSS"
    },
    {
      "title": "3-column preview card component",
      "technologies": "HTML, CSS"
    },
    {
      "title": "Social proof section",
      "technologies": "HTML, SCSS"
    },
    {
      "title": "Article preview component",
      "technologies": "HTML, SCSS, JS"
    },
    {
      "title": "Interactive rating component",
      "technologies": "HTML, SCSS, JS"
    },
    {
      "title": "FAQ accordion card",
      "technologies": "HTML, SCSS, JS"
    },
    {
      "title": "Huddle landing page with single introductory section",
      "technologies": "HTML, SCSS"
    },
    {
      "title": "Intro component with signup form",
      "technologies": "HTML, SCSS, JS"
    }
  ],
  "junior": []
};

createLevelList();
createLevelSections();

function createLevelList() {
  const list = document.querySelector('.difficulty ul');

  for (const level in challenges) {
    const listItem = document.createElement('li');
    const levelName = document.createElement('a');
    const decorLine = document.createElement('div');

    levelName.textContent = level;
    levelName.setAttribute('href', `#${level}`);
    decorLine.className = 'decoration-line';

    listItem.appendChild(levelName);
    listItem.appendChild(decorLine);
    list.appendChild(listItem);
  }
}

function createLevelSections() {
  const solutions = document.querySelector('.solutions');

  for (const level in challenges) {
    const difficulty = document.createElement('h2');
    const wrapper = document.createElement('div');

    difficulty.id = level;
    difficulty.className = 'difficulty-level';
    difficulty.textContent = level;
    wrapper.className = 'card-wrapper';

    solutions.appendChild(difficulty);
    solutions.appendChild(wrapper);

    createChallengeCards(level, wrapper);
  }
}

function createChallengeCards(level, wrapper) {
  challenges[level].forEach(challenge => {
    const article = document.createElement('article');
    const title = document.createElement('h3');
    const technologies =document.createElement('p');
    const img = document.createElement('img');
    const linkToLive = document.createElement('a');
    const linkToCode = document.createElement('a');

    article.className = 'card';
    title.className = 'title';
    technologies.className = 'technologies';
    img.className = 'preview';
    linkToLive.className = 'link live';
    linkToCode.className = 'link code';

    img.setAttribute('alt', 'Preview');
    img.setAttribute('width', '650');
    img.setAttribute(
      'src', `./challenges/${formatString(challenge['title'])}/screenshots/screenshot-live-preview.jpg`
      );

    linkToLive.setAttribute(
      'href', `./challenges/${formatString(challenge['title'])}/index.html`
      );

    linkToCode.setAttribute('target', '_blank');
    linkToCode.setAttribute(
      'href', `https://github.com/annafkt/frontend-mentor-challenges/tree/main/challenges/${formatString(challenge['title'])}`
    );

    title.textContent = challenge['title'];
    technologies.textContent = challenge['technologies'];
    linkToLive.textContent = 'Live preview';
    linkToCode.textContent = 'View code';

    article.appendChild(title);
    article.appendChild(technologies);
    article.appendChild(img);
    article.appendChild(linkToLive);
    article.appendChild(linkToCode);
    wrapper.appendChild(article);
  });
}

function formatString(str) {
  return str.toLowerCase().replaceAll(' ', '-');
}