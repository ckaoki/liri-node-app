require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

// grab command line arguments
var command = process.argv[2].toLowerCase().trim();
var argument = process.argv.splice(3).join(' ').trim();

// determine which command to run

switch(command){
    case "concert-this":
        concertThis(argument);
        break;
    case "spotify-this-song":
        spotifyThisSong(argument);
        break;
    case "movie-this":
        movieThis(argument);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;   
    default:
        console.log(command + " is not a valid command.");
}


// find concert venues
function concertThis(artist){
    if(artist === ''){
        console.log("You must include an artist.");
    }
    else{
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryURL)
            .then(function (response) {
            // handle success
            for(var element in response.data){
                console.log("Venue: " + response.data[element].venue.name);
                console.log("Location: " + response.data[element].venue.city + ", " + response.data[element].venue.region + ", " + response.data[element].venue.country);
                console.log("Date: " + moment(response.data[element].datetime).format('MM/DD/YYYY') + "\n");            
            };
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
    }
}

// search Spotify for song
function spotifyThisSong(song){
    if(song === ''){
        song = "The Sign";    // default song    
    }

    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        for(var item in data.tracks.items){
            for(var artist in data.tracks.items[item].artists){
                console.log("Artist: " + data.tracks.items[item].artists[artist].name);
            }
            console.log("Song: " + data.tracks.items[item].name); 
            console.log("Preview: " + data.tracks.items[item].preview_url); 
            console.log("Album: " + data.tracks.items[item].album.name + '\n');        
        };
      });      
}

// OMDB API movie calls
function movieThis(movie){
    if(movie === ''){
        movie = "Mr. Nobody"; //default movie 
    }
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(
    function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        var element;
        for(element in response.data.Ratings){
            if(response.data.Ratings[element].Source === "Rotten Tomatoes"){
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[element].Value);
            }
        }
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    });
}

// read file and perform action written in it
function doWhatItSays(){
    var cmd;
    var arg;

    fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) throw err;
        {
            console.log(data);
            cmd = data.split(',')[0];                   // get command
            arg = data.split(',')[1].replace(/"/g, ''); // get argument
            cmd = camelCase(cmd);                       // convert cmd to camel case to match function names
            callFunction(cmd, arg);                     // use callback to call function
        }
      });
}

// function used to call function listed in text file.
function callFunction(callback, parameter){
    var searchFunctions = ['concertThis','spotifyThisSong','movieThis'];
    if(searchFunctions.indexOf(callback) !== -1){
        callback = eval(callback);  // Must eval() string to use as callback
        callback(parameter);
    }
    else{
        console.log(`Error: ${callback} is not valid search function.`);
    }
}

// make first letter in string upper case
function camelCase(string) 
{   string.toLowerCase();
    var strings = string.split('-')
    var camelCaseString = '';
    camelCaseString += strings[0]

    for(var i=1; i<strings.length; i++){
        camelCaseString += strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
    return camelCaseString;  
}
