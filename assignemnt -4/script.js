//api key and urls
const API_KEY = "60NpVcYw6CrjTJT75I3effl4PmmnOOSk";
const searchUrl = "https://api.giphy.com/v1/gifs/search";
const trendingUrl = "https://api.giphy.com/v1/gifs/trending";

//  elements
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const trendingBtn = document.querySelector("#trendingBtn");
const statusMessage = document.querySelector("#statusMessage");
const featuredResult = document.querySelector("#featuredResult");
const results = document.querySelector("#results");

//  Show message and clear results
function showStatus(message) {
  statusMessage.textContent = message;
}
function clearResults() {
  featuredResult.innerHTML = "";
  results.innerHTML = "";
}

// Show featured GIF
function showFeatured(gif) {
  let title = gif.title || "No title";
  let username = gif.username || "Unknown";
  let rating = gif.rating ? gif.rating.toUpperCase() : "N/A";

  featuredResult.innerHTML = `
    <article class="featured-card">
      <img src="${gif.images.fixed_width.url}" alt="${title}">
      <h3>${title}</h3>
      <p>Username: ${username}</p>
      <p>Rating: ${rating}</p>
    </article>
  `;
}

//display gifs in the results section
function showGifs(gifs) {
  for (let i = 0; i < gifs.length; i++) {
    let gif = gifs[i];

    let title = gif.title || "No title";
    let username = gif.username || "Unknown";
    let rating = gif.rating ? gif.rating.toUpperCase() : "N/A";

    let card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${gif.images.fixed_width.url}" alt="${title}">
      <h4>${title}</h4>
      <p>By: ${username}</p>
      <p>Rating: ${rating}</p>
    `;

    results.appendChild(card);
  }
}
// Display data from API
function displayData(gifs) {
  clearResults();

  if (gifs.length === 0) {
    showStatus("No results found");
    return;
  }

  showStatus("Showing results");
  showFeatured(gifs[0]);
  showGifs(gifs.slice(1));
}
// Search GIFs
async function searchGifs() {
  let query = searchInput.value.trim();

  if (query === "") {
    showStatus("Enter something to search");
    return;
  }

  showStatus("Searching...");
  clearResults();

  try {
    let url = `${searchUrl}?api_key=${API_KEY}&q=${query}&limit=6`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data); 
