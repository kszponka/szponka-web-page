import "../scss/main.scss";

console.log("HELLO 🚀");

const button = document.querySelector('.button-js');

button.addEventListener('click', () => {
  const heading = document.querySelector('.heading-js');
  heading.classList.toggle('klasa-z-js')

})

const urlList = [];

async function getCommitList() {
  response = await fetch("https://api.github.com/repos/kszponka/szponka-web-page/commits");
  const json = await response.json();
  return json;

}

console.log(getCommitList());
