// get games fgoeti vs isaacinator
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://lichess.org/api/games/user/fgoeti?vs=Isaacinator', false);
xhr.send();

// parse results and white players
let games = xhr.responseText;
let white_players_regex = /\[White "\w+"\]/g;
let white_players = games.match(white_players_regex);
let results_regex = /\[Result ".*"]/g;
let results = games.match(results_regex);

// calculate scores
let fgoeti_score = 0;

for (var i = 0; i < results.length; i++) {
  fgoeti_wins_playing_white =
    white_players[i] === '[White "fgoeti"]' && results[i] === '[Result "1-0"]';
  fgoeti_wins_playing_black =
    white_players[i] === '[White "Isaacinator"]' && results[i] === '[Result "0-1"]';
  draw = results[i] === '[Result "1/2-1/2"]';

  if (fgoeti_wins_playing_white || fgoeti_wins_playing_black) {
    fgoeti_score++;
  }
  if (draw) {
    fgoeti_score = fgoeti_score + 0.5;
  }
}

let isaacinator_score = results.length - fgoeti_score;

// change html popup
let user = document.getElementById('rivalry_score');
user.textContent =
  'Op dit moment heeft Flosh ' +
  fgoeti_score +
  ' punten en Isaac ' +
  isaacinator_score +
  ' punten.';
