"use strict";

const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const projectContainer = document.querySelector(".projects__list");
const toggleButton = document.querySelector(".toggle__btn");
const toggleButtonIcon = document.querySelector(".btn__icon");
const headerImage = document.querySelector(".header__image");
const navBar = document.querySelector(".header__nav");
const skills = document.querySelectorAll(".skill");
const headerTitle = document.querySelector(".header__title");

class Project {
  #sourceCode;
  #siteLink;
  constructor(name, sourceCode, site) {
    this.name = name;
    this.#sourceCode = sourceCode;
    this.#siteLink = site;
  }

  setDescription(str) {
    this.description = str;
    return this.description;
  }

  setImage(url) {
    this.image = url;
    return this.image;
  }

  get source() {
    return this.#sourceCode;
  }

  get site() {
    return this.#siteLink;
  }
}

const addProject = function (project) {
  const html = `
      <li class="project">
              <figure>
                <img
                  src="${project.image}"
                  alt="${project.name} app screenshot"
                  width="336"
                  height="189"
                />
                <figcaption class="offscreen">${project.name}</figcaption>
              </figure>
              <h3>${project.name}</h3>
              <p>
                ${project.description}
              </p>
              <span>
                <a
                  target="_blank"
                  href="${project.source}"
                  ><img class="github__logo"
                    src="./img/github.svg"
                    alt="github logo"
                    width="45"
                    height="45"
                  /></a
                >
                <a target="_blank" href="${project.site}"
                  >&#60;&#47;&#62; </a
                >
              </span>
            </li>
      `;

  projectContainer.insertAdjacentHTML("beforeend", html);
};

// /////////////////////////////////////////////////////////////////
// Creating projects

const forkify = new Project(
  "forkify",
  "https://github.com/shristi-io/forkify-app",
  "https://forkify-sibashis.netlify.app/"
);

forkify.setDescription(
  `A simple recipe application where you can search from a collection of 1000+ recipes. You can also add your own recipes.`
);

forkify.setImage("./img/projects/forkify.png");

const mapty = new Project(
  "mapty",
  "https://github.com/shristi-io/Mapty",
  "https://shristi-io.github.io/Mapty/"
);

mapty.setDescription(
  "An application to log your workouts in a map. Just click on any location on the map and add details of your workout."
);

mapty.setImage("./img/projects/mapty.png");

const bank = new Project(
  "Simply Bank",
  "https://github.com/shristi-io/Simply-Bank/tree/main",
  "https://shristi-io.github.io/Simply-Bank/"
);

bank.setDescription(
  "An interactive bank application where you can transfer money and apply for loans. You can get the username and passwords from my Github page."
);

bank.setImage("./img/projects/bank.png");

const notepedia = new Project(
  "Notepedia",
  "https://github.com/shristi-io/Note-Taking-Website",
  "https://shristi-io.github.io/Note-Taking-Website/"
);

notepedia.setDescription(
  "A note making app with simple, interactive interface where you can add and manage your notes."
);

notepedia.setImage("./img/projects/notepedia.png");

const registrationForm = new Project(
  "Registration Form",
  "https://github.com/shristi-io/Registration-form",
  "https://shristi-io.github.io/Registration-form/"
);

registrationForm.setDescription(
  "A responsive registration form design. The example interface is taken for a gym membership"
);
registrationForm.setImage("./img/projects/registration.png");

const surveyForm = new Project(
  "Survey Form",
  "https://github.com/shristi-io/Survey-Form",
  "https://shristi-io.github.io/Survey-Form/"
);

surveyForm.setDescription("Survey form template using only HTML and CSS");

surveyForm.setImage("./img/projects/survey.png");

const projects = [
  forkify,
  mapty,
  bank,
  notepedia,
  registrationForm,
  surveyForm,
];

// Rendering the projects on the display

projects.forEach((proj) => addProject(proj));

// Selecting the projects from DOM

const projectElements = document.querySelectorAll(".project");

//////////////////////////////////////////////////////////////////////////////////////////

// Icons

const githubLogos = document.querySelectorAll(".github__logo");

// Adding light and dark mode

const toggleMode = function () {
  toggleButton.classList.toggle("toggle__btn--dark");
  if (toggleButton.classList.contains("toggle__btn--dark")) {
    toggleButtonIcon.setAttribute("src", "./img/icons/moon.svg");
  } else {
    toggleButtonIcon.setAttribute("src", "./img/icons/sun.svg");
  }

  headerImage.classList.toggle("header__image--light-mode");
  headerImage.classList.toggle("header__image--dark-mode");
  headerTitle.classList.toggle("header__title--dark-mode");
  htmlElement.classList.toggle("dark__mode");
  // bodyElement.classList.toggle("dark__mode");
  navBar.classList.toggle("dark__mode");
  skills.forEach((skill) => {
    skill.classList.toggle("skill--light-mode");
    skill.classList.toggle("skill--dark-mode");
  });
  projectElements.forEach((project) => {
    project.classList.toggle("dark__mode");
  });
  githubLogos.forEach((logo) => {
    logo.classList.toggle("github__logo--dark-mode");
  });
};

toggleButton.addEventListener("click", toggleMode);
