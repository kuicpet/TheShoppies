import apiKey from "./config";

// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");


const url = `www.omdbapi.com/?t=${searchInput.value}s&apikey=${apiKey}`
// Search for Movies
function searchMovies() {
    if(searchInput.value === ""){
        searchInput.style.border = "2px solid red";
        errorMessage.style.display = "block";
    } else {
        searchInput.style.border = "2px solid #004c3f";
        errorMessage.style.display = "none";
        fetch(url).then(response => response.json()).then(data => console.log(data))
        console.log(searchInput.value);
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMovies();
})




// Footer
const year = document.createTextNode(new Date().getFullYear());
copyRight.appendChild(year)