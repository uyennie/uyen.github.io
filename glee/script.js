// make array of links with /glee-1xnum/, /glee-2xnum/ and /glee-3xnum/
//episodes 1-22 https://watchgleeonline.com/episode-watch/glee-3x2/

var seasons = [1, 2, 3]; // add more seasons if needed
var episodesPerSeason = 22; //seasons 1-4 have 22 episodes, season 5 has 20, season 6 has 13
var arr = [];

seasons.forEach(function(season) {
    var baseUrl = 'https://watchgleeonline.com/episode-watch/glee-' + season + 'x';
    for (var i = 1; i <= episodesPerSeason; i++) {
        var url = baseUrl + i.toString() + '/';
        arr.push(url);
        console.log(url);
    }
});

console.log(arr); // see all URLs in the array

// randomise
function randomEpisode() {
    var i = parseInt(Math.random() * arr.length); 
    window.open(arr[i], '_blank'); //open episode in a new tab
}

