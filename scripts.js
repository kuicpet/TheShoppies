
// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");
const searchForm = document.querySelector(".form");
const resultsContainer = document.querySelector(".results");

const query = document.querySelector(".query");
const loader = document.querySelector(".loader");


const apiKey = config.API_KEY;
const favorites = [];
const results = [];

document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.className.toLowerCase() === "nominate"){
        console.log("clicked")
        nominateMovie();
    }
})

let nominateBtn = document.createElement("button");
nominateBtn.setAttribute("class", "nominate");
nominateBtn.innerHTML = "nominate";



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
        const queryMarkUp = `
            <span class="search_query">Results for "${searchInput.value}"</span>
        `
        query.innerHTML = queryMarkUp;
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
            results.push(movieResults);
            localStorage.setItem("results",JSON.stringify(results))
            console.log("movieList",results);
            let ul = document.createElement("ul");
            resultsContainer.appendChild(ul);
            movieResults.map((item) => {
                let li = document.createElement("li");
                li.classList.add("result");
                let markUp = `<span class="movie_title">${item.Title}</span>
                <span class="year">${item.Year}</span>
                <button class="nominate">Nominate</button>`;
                
                li.innerHTML += markUp;
                ul.appendChild(li);
            })
            
            
        })
        .catch(error => console.warn(error));
        searchInput.focus();
    } else {
        searchInput.style.border = "2px solid red";
        errorMessage.style.display = "block";
    }
}

// Nominate Movie
function nominateMovie(imdbID) {
    JSON.parse(localStorage.getItem("results"))
    for (let i = 0; i < results.length; i++) {
        let favoriteMovie = null;
        for (let k = 0; k < favorites.length; k++) {
            if(favorites[k].result.imdbID === results[i].imdbID){
                favoriteMovie = favorites[k];
                favorites[k];
                break;
            }
        }
        if(favoriteMovie === null){
            let favoriteMovie = { result: results[i] };
            favorites.push(favoriteMovie);
            console.log(favorites)
        }
        
    }
    
}


// Save movie
// Remove Movie


// Submit search
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMovies();
    searchForm.reset();
})

// Clear results






// Footer
const year = document.createTextNode(new Date().getFullYear());
copyRight.appendChild(year)

