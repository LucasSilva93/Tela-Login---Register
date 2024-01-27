// EVENTO CADASTRO OU LOGIN

const cadastrar = document.querySelector("#create-info .btn");
const login = document.querySelector("#login-info .btn");

const conatinerPrimary = document.querySelector(".container-primary");
const conatinerSecondary = document.querySelector(".container-secondary");

cadastrar.addEventListener("click", () => {
  conatinerSecondary.classList.add("active");
  conatinerPrimary.classList.remove("active");
});

login.addEventListener("click", () => {
  conatinerPrimary.classList.add("active");
  conatinerSecondary.classList.remove("active");
});

// *************************  EVENTO DARK

const trocaTemaDark = document.querySelector(
  "#container .btn-night-light .icon-dark "
);
const trocaTemaLight = document.querySelector(
  "#container .btn-night-light .icon-light "
);

trocaTemaDark.addEventListener("click", () => {
  trocaTemaDark.classList.add("active");
  trocaTemaLight.classList.remove("active");
  trocaTemaLight.style.color = "#000";

  // background infos
  const body = document.querySelector("body");
  const loginInfo = document.querySelector("#login-info");
  const createInfo = document.querySelector("#create-info");
  body.style.background = "#131313";
  loginInfo.style.background = "#131313";
  createInfo.style.background = "#131313";

  // titles
  const createTitle = document.querySelector("#create-account .title");
  const loginTitle = document.querySelector("#login-account .title");
  createTitle.style.color = "#000";
  loginTitle.style.color = "#000";

  // box-shadow
  conatinerSecondary.classList.add("shadow");
  conatinerPrimary.classList.add("shadow");

  // inputs
  const inputs = document.querySelectorAll("form input");
  for (const input of inputs) {
    input.classList.add("border");
  }

  // buttons
  const btnInfoLogin = document.querySelector("#login-info .btn");
  const btnInfoCreate = document.querySelector("#create-info .btn");
  btnInfoLogin.classList.add("black-btn");
  btnInfoCreate.classList.add("black-btn");

  const btnCreateAccount = document.querySelector("#create-account .btn");
  const btnLoginAccount = document.querySelector("#login-account .btn");
  btnCreateAccount.classList.add("black-btn");
  btnLoginAccount.classList.add("black-btn");
});

// ****************************    EVENTO LIGHT

trocaTemaLight.addEventListener("click", () => {
  trocaTemaLight.classList.add("active");
  trocaTemaDark.classList.remove("active");
  trocaTemaDark.style.color = "#019df7";

  // background infos
  const body = document.querySelector("body");
  const loginInfo = document.querySelector("#login-info");
  const createInfo = document.querySelector("#create-info");
  body.style.background = "#fff";
  loginInfo.style.background = "#019df7";
  createInfo.style.background = "#019df7";

  // titles
  const createTitle = document.querySelector("#create-account .title");
  const loginTitle = document.querySelector("#login-account .title");
  createTitle.style.color = "#019df7";
  loginTitle.style.color = "#019df7";

  // box-shadow
  conatinerSecondary.classList.remove("shadow");
  conatinerPrimary.classList.remove("shadow");

  // inputs
  const inputs = document.querySelectorAll("form input");
  for (const input of inputs) {
    input.classList.remove("border");
  }

  // buttons
  const btnInfoLogin = document.querySelector("#login-info .btn");
  const btnInfoCreate = document.querySelector("#create-info .btn");
  btnInfoLogin.classList.remove("black-btn");
  btnInfoCreate.classList.remove("black-btn");

  const btnCreateAccount = document.querySelector("#create-account .btn");
  const btnLoginAccount = document.querySelector("#login-account .btn");
  btnCreateAccount.classList.remove("black-btn");
  btnLoginAccount.classList.remove("black-btn");
});
