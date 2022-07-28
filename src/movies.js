// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const answer = moviesArray.map((pelicula) => pelicula.director);
  return answer;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const answer = moviesArray.filter(
    (pelicula) =>
      pelicula.director === "Steven Spielberg" &&
      pelicula.genre.includes("Drama")
  );
  return answer.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const answer = moviesArray
    .filter((pelicula) => pelicula.score)
    .reduce((acc, value) => acc + value.score, 0);
  const resultado = parseFloat((answer / moviesArray.length).toFixed(2));
  return resultado;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((item) =>
    item.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const dramaMoviesScore = dramaMovies.reduce(
    (acc, value) => acc + value.score,
    0
  );

  return parseFloat((dramaMoviesScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const array1 = moviesArray.map((pelicula) => pelicula);

  const resultado = array1.sort(function (a, b) {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      if (a.title.charCodeAt(0) < b.title.charCodeAt(0)) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return resultado;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrayWithTitlesName = moviesArray.map((pelicula) => pelicula.title);

  if (arrayWithTitlesName.length < 20) {
    const resultado1 = arrayWithTitlesName.sort((a, b) => a.localeCompare(b));
    return resultado1;
  } else {
    const arrayOrdenado = arrayWithTitlesName.sort((a, b) =>
      a.localeCompare(b)
    );
    const newArray = arrayOrdenado.slice(0, 20);
    return newArray;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
