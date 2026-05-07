changeInformation()

async function changeInformation() {

    let imdbID = localStorage.getItem('filmID')
    const responseById = await fetch(`http://www.omdbapi.com/?apikey=92675721&i=${imdbID}`, {
        method: "GET",

    })
    let resultById = await responseById.json()
    const poster = document.getElementById('img')
    poster.src = resultById.Poster
    const title = document.getElementById('title')
    title.innerHTML = resultById.Title
    const date = document.getElementById('date')
    date.innerHTML = resultById.Released
    const runtime = document.getElementById('runtime')
    runtime.innerHTML = resultById.Runtime
    const genre = document.getElementById('genre')
    genre.innerHTML = resultById.Genre
    const actors = document.getElementById('actors')
    actors.innerHTML = resultById.Actors
    const director = document.getElementById('director')
    director.innerHTML = resultById.Director
    const writer = document.getElementById('writer')
    writer.innerHTML = resultById.Writer
    const plot = document.getElementById('plot')
    plot.innerHTML = resultById.Plot
    const country = document.getElementById('country')
    country.innerHTML = resultById.Country
    const intMovData = document.getElementById('intMovData')
    intMovData.innerHTML = resultById.Ratings[0].Value
    const rottenTomatoes = document.getElementById('rottenTomatoes')
    rottenTomatoes.innerHTML = resultById.Ratings[1].Value
    const metacritic = document.getElementById('metacritic')
    metacritic.innerHTML = resultById.Ratings[2].Value



}
