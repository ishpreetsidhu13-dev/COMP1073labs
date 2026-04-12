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
