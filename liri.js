require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log(spotify);