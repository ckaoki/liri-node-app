require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// grab command line arguments
var command = process.argv[2].toLowerCase();
var argument = process.argv.splice(3).join(' ');

// determine which command to run
switch(command){
    case "concert-this":
        concertThis(argument);
        break;
    case "spotify-this-song":
        spotifyThisSong(argument);
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;   
    default:
        console.log(command + " is not a valid command.");
}

// find concert venues
function concertThis(artist){
    if(artist === undefined){
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
    if(song === ""){
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

