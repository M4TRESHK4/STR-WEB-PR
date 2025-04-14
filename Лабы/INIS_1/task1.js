const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let movieName;
    do {
        movieName = prompt('Один из последних просмотренных фильмов?', '');
    } while (
        movieName === null || 
        movieName.trim() === '' || 
        movieName.length > 50
    );

    let movieRating;
    do {
        movieRating = prompt('На сколько оцените его?', '');
    } while (
        movieRating === null || 
        movieRating.trim() === ''
    );

    personalMovieDB.movies[movieName] = movieRating;
}

console.log(personalMovieDB);

function displayMoviesTable(movies) {
    const table = document.createElement('table');
    
    const headerRow = table.insertRow();
    const headerMovie = headerRow.insertCell();
    const headerRating = headerRow.insertCell();
    headerMovie.textContent = 'Фильм';
    headerRating.textContent = 'Оценка';

    for (const [name, rating] of Object.entries(movies)) {
        const row = table.insertRow();
        const cellName = row.insertCell();
        const cellRating = row.insertCell();
        cellName.textContent = name;
        cellRating.textContent = rating;
    }

    document.body.appendChild(table);
}

displayMoviesTable(personalMovieDB.movies);