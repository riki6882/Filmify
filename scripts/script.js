const searchInput = document.getElementById('searchBar')
const suggesstions = document.getElementById('suggesstions')
const suggesstionsContainer = document.getElementById('suggesstionBox')
searchInput.addEventListener('keyup', findFilm)


function showRecommandations(recommendations) {
    if (searchInput.value.length <= 3) {
        suggesstionsContainer.classList.remove('show')
        suggesstionsContainer.classList.add('empty')



    }
    else {
        suggesstionsContainer.classList.add('show')
        suggesstions.innerHTML = ''
        // vytvara element li a vklada do neho obsah
        recommendations.map(recommendedItem => {
            const li = document.createElement('li')
            const a = document.createElement('a')  
            a.textContent = recommendedItem.Title
            a.classList.add('searchResults')
            // ziskavanie imdbID pomocou arrow funkcie
            a.addEventListener('click', () => {
                let imdbID = recommendedItem.imdbID
                // ukladanie id do local storage
                localStorage.setItem('filmID',imdbID)
                // prepinanie okna
                window.location.href = '/structure/filmPage.html'
            })
            li.appendChild(a)
            suggesstions.appendChild(li)

        })
    }

}





async function findFilm() {
    let search = document.getElementById('searchBar').value
    // ak je v searchbare menej znakov ako 3 tak sa ani nevykona fetch
    if (search.length < 3) return
    else {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=92675721&s=${search}`, {
                method: "GET",

            })
            const result = await response.json()
            let recommendations = []
            // hlada ci sa v nazve nachadza to co user vyhladava
            if (result.Search) {
                recommendations = result.Search.filter(filmName => filmName.Title.toLowerCase().includes(search.toLowerCase()))
                showRecommandations(recommendations)
            }
        } catch (error) {
            console.log(error)
        }
    }



}





