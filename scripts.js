
// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");
const searchForm = document.querySelector(".form");
const searchResults = document.querySelector(".list");
const nominateBtn = document.querySelector(".nominate");
const query = document.querySelector(".search_query");
const loader = document.querySelector(".loader");

const apiKey = config.API_KEY;



// Loader
function showLoader() {
    loader.className = "show";
    setTimeout(() => {
        loader.className = loader.className.replace("show", "");
    }, 10);
}
// Search for Movies
function searchMovies() {
    if(searchInput.value !== ""){
        searchInput.style.border = "2px solid #004c3f";
        errorMessage.style.display = "none";
        query.innerHTML = `Results for "${searchInput.value}"`
        console.log(searchInput.value)
        showLoader();
        let url = `http://www.omdbapi.com/?s=${searchInput.value}&apikey=${apiKey}`;
        fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {

                return Promise.reject("Something went wrong",response)
            }
        })
        .then(data => {
            const movieResults = data.Search;
            console.log(movieResults);
            const li = document.createElement("li");
            li.classList.add("result");
            movieResults.forEach(item => {
                const markup = `
                <span class="movie_title">${item.Title}</span>
                <span class="year">${item.Year}</span>
                <button class="nominate">Nominate</button>
            `;
            li.innerHTML += markup;
            });
            searchResults.appendChild(li);
        })
        .catch(error => console.warn(error));
        searchInput.focus();
    } else {
        searchInput.style.border = "2px solid red";
        errorMessage.style.display = "block";
    }
}
// Nominate Movie
// Save movie
// Remove Movie


// Submit search
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMovies();
    searchForm.reset();
})




// Footer
const year = document.createTextNode(new Date().getFullYear());
copyRight.appendChild(year)

