// Copyright (c) 2020 Mr. Coxall All rights reserved
 // Created by: Kukwac
 // Created on: May 2025
 // This file contains the JS functions for index.html
"use strict"
function userAge() {
    let rRatedMovies = 18;
    let pg13RatedMovies = 13;
    let pgRatedMovies = 10;
    let gRatedMovies = 5;
    let display = "";
    let userGuess = parseInt(document.getElementById("user-age").value);
    if (userGuess >= rRatedMovies) {
        display = "You are old enough to watch R rated movies.";
    }
    else if (userGuess >= pg13RatedMovies) {
        display = "You are old enough to watch PG-13 rated movies.";
    }
    else if (userGuess >= pgRatedMovies) {
        display = "You are old enough to watch PG rated movies.";
    }
    else if (userGuess >= gRatedMovies) {
        display = "You are old enough to watch G rated movies.";
    }
    else {
        display = "Please enter age.";
    }
    document.getElementById("result").innerHTML = display; ;
}