
// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");
const searchForm = document.querySelector(".form");

const apiKey = config.API_KEY;




// Search for Movies
function searchMovies() {
    if(searchInput.value !== ""){
        searchInput.style.border = "2px solid #004c3f";
        errorMessage.style.display = "none";
        console.log(searchInput.value)
        let url = `http://www.omdbapi.com/?t=${searchInput.value}&apikey=${apiKey}`;
        fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
        .then(data => console.log(data))
        .catch(error => console.warn(error));
    } else {
        searchInput.style.border = "2px solid red";
        errorMessage.style.display = "block";
    }
}
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMovies();
    searchForm.reset();
})




// Footer
const year = document.createTextNode(new Date().getFullYear());
copyRight.appendChild(year)

