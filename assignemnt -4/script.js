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


