//bootstrap variables
let bootstrapCSS = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">';
let navBar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top user-select-none">
  <div class="container-fluid">
    <a class="navbar-brand">
      <img src="images/favicon-color.png" alt="Bootstrap" width="auto" height="30">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="project-page/index.html">Project</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Team Members
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="lhulan/index.html">Lukas Hulan</a></li>
            <li><a class="dropdown-item" href="adiazsoriano/index.html">Angel Diaz-Soriano</a></li>
            <li><a class="dropdown-item" href="tbutler31/index.html">Thomas Butler</a></li>
            <li><a class="dropdown-item" href="aspeck1/index.html">Andrew Peck</a></li>
          </ul>
        </li>
      </ul>
      <div class="form-check form-switch mb-3 mb-lg-0 d-flex align-items-center">
        <input type="checkbox" role="switch" id="darkModeSwitch" class="form-check-input me-2">
        <label for="darkModeSwitch" class="form-check-label">
          <img src="images/dark-mode.png" class="img-fluid dark-mode-icon" height="30" width="30">
        </label>
      </div>
    </div>
  </div>
</nav>
<div class="nav-spacer"></div>`;

/**
 * Insert Bootstrap CSS link.
 */
function importBootstrap() {
  document.getElementById('bootstrap_css').innerHTML += bootstrapCSS;
}

/**
 * Load nav bar into page.
 */
function constructNavBar() {
  document.getElementById('nav_bar').innerHTML += navBar;
}

/**
 * Wait for an element defined by a CSS selector to load.
 */
function waitForElement(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutation => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

/**
 * Sets the theme.
 * "light" for light theme
 * "dark" for dark theme
 */
function setTheme(theme) {
  let darkModeElem = document.body;
  darkModeElem.setAttribute("data-bs-theme", theme);
}

/**
 * Attach click listener to dark mode toggle switch
 */
function addEventListenerToDarkModeSwitch() {
  let onClickFunc = function darkModeOnClick() {
    let elem = document.getElementById("darkModeSwitch");
    let state = elem.checked;
    if (state) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  waitForElement("#darkModeSwitch").then((elem) => {
    elem.addEventListener("click", onClickFunc);
    onClickFunc();
  });
}

//init html
importBootstrap();
constructNavBar();
addEventListenerToDarkModeSwitch();


/*
  Back to top button functionality
*/
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*
  End: back to top button
*/