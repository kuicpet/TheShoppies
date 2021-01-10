
// DOM
const copyRight = document.querySelector(".copyright");
const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".search");
const errorMessage = document.querySelector(".error");
const searchForm = document.querySelector(".form");
const searchResults = document.querySelector(".list");
const nominateBtn = document.querySelector(".nominate");

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
        .then(data => {
            const { Title, Year } = data;
            // save data to localstorage
            console.log(data);
            const li = document.createElement("li");
            li.classList.add("result");
            const markup = `
                <span class="movie_title">${Title}</span>
                <span class="year">${Year}</span>
                <button class="nominate">Nominate</button>
            `;
            li.innerHTML = markup;
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

