// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");

// Search for Movies
function searchMovies() {
    if(searchInput.value === ""){
        searchInput.style.border = "2px solid red";
        errorMessage.style.display = "block";
    } else {
        searchInput.style.border = "2px solid #004c3f";
        errorMessage.style.display = "none";
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