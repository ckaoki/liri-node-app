# liri-node-app
This project contains a javascript file that implements LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Node.js must be installed on machine. See https://nodejs.org/en/download/ for instructions.
  
### Overview

1. At the heart of the LIRI app is a javascript file liri.js that is called by the command line interface.
2. liri.js calls keys.js to import your spotify keys that are contained in the file .env.
3. The file package.json contains the package dependancies that must be installed.
4. The file .gitignore contains the file types that are not pushed github.

### Installing

1. To install source files use git to clone files from https://github.com/ckaoki/liri-node-app.
2. In a bash terminal or Visual Code terminal navigate to the directory that you downloaded the files from github.
3. Install the Node packages by entering the following in the terminal:   
    *npm install dotenv node-spotify-api axios moment* 
4. Create the file **.env** in the same directory as the other files.
5. Enter the your Spotify key in the **.env** file as shown below:     
    *# Spotify API keys*  
    *SPOTIFY_ID=your-spotify-id*  
    *SPOTIFY_SECRET=your-spotify-secret*  

### Operation
The LIRI app can be operated by entering command lines in the terminal as instructed below.
1. Search for an artist concert schedule on Bands in Town Artist Events using the following format:  
    *node liri.js concert-this `<artist>`*  
    Example:  *node liri.js concert-this The Rolling Stone*   
2. Search for a song on Spotify using the following format:  
    *node liri.js spotify-this-song `<song>`*  
    Example:  *node liri.js spotify-this-song Just Like Heaven*   
3. Search for movie information on OMDB using the following format:  
    *node liri.js movie-this `<movie>`*  
    Example:  *node liri.js movie-this Good Will Hunting*   
4. Perform a search specified by the text in the file random.txt by using the following format:  
    *node liri.js do-what-it-says*  
    Example:  *node liri.js do-what-it-says*   
    1. Format of random.txt:  
        *command,"search argument"*  
        Example:  *spotify-this-song,"I Want it That Way"*

## Running the tests

Using Visual Code LIRI was run as directed in the previous section - **Operation**.  
The following section are links to videos of test cases.

### Test Videos:
The following links are videos recorded during testing.
1. [node liri.js concert-this The Rolling Stones](testVideos/concert-this%20The%20Rolling%20Stones.m4v)  
2. [node liri.js concert-this](testVideos/concert-this.m4v)  
3. [node liri.js spotify-this-song Just Like Heaven](testVideos/spotify-this-song%20Just%20Like%20Heaven.m4v)  
4. [node liri.js spotify-this-song](testVideos/concert.m4v)  
5. [node liri.js movie-this Good Will Hunting](testVideos/movie-this%20Good%20Will%20Hunting.m4v)  
6. [node liri.js movie-this](testVideos/movie-this.m4v)  
7. [node liri.js do-what-it-says](testVideos/do-what-it-says.m4v)  

### Break down into end to end tests

Source files have been extensively tested by displaying pages in Visual Code.

### And coding style tests

I'm starting to get some style.

## Deployment

Navigate to https://github.com/ckaoki/liri-node-app to clone.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Contributing

Please read our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use github for version control (https://github.com/your/project/tags). 

## In development
Implementing textual hints.

## Authors

* **Cullan Aoki** - *Initial work* - https://github.com/ckaoki/liri-node-app

## License

This project is not licensed.

## Acknowledgments
* Joe Rehfuss
* Trae Shanks
* Lan Truong
* James Hanley

The LIRI app uses the following APIs:
1. Bands in Town Artist Events API
2. Spotify
3. OMDB

