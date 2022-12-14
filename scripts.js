const searchButton = document.querySelector(".search");
const fact = document.querySelector(".fact");

async function handleSearch() {
  const catFact = await fetch("https://meowfacts.herokuapp.com");
  const catFactJson = await catFact.json();

  fact.innerText = catFactJson.data;
}

searchButton.addEventListener("click", handleSearch);
