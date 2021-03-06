// The goal of this exercise is to continue practicing your ability to work with arrays and objects, this time with minimal help or step-by-step instructions.

// We'll be implementing a program that manages music playlists using objects and arrays.

// The program will consist of:

// An object, the library, that will store all the information about tracks and playlists
// A collection of functions that will perform certain operations on the library, for example addPlaylist
// The library object is structured like this:

const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  //for every playlist in library, console.log(playlist: name - # of tracks)
    for(let p in library['playlists']){
      console.log(p + ": " + library['playlists'][p]['name'] + " - " + library['playlists'][p]['tracks'].length);
    }
  }

printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//same logic as previous function
const printTracks = function () {
    for(let tracks in library['tracks']){
      console.log(tracks + ": " + library['tracks'][tracks]['name'] + " by " + library['tracks'][tracks]['artist'] + "(" + library['tracks'][tracks]['album'] + ")");
    }
  }

printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function (playlistId){
  console.log(playlistId + ": " + library['playlists'][playlistId]['name'] + " - " +library['playlists'][playlistId]['tracks'].length + " tracks");

  let listoftracks = library['playlists'][playlistId]['tracks'];

  for(let i = 0; i < listoftracks.length; i++){
    let tracks = listoftracks[i];
    console.log(listoftracks[i] + ": " + library['tracks'][tracks]['name'] + " by " + library['tracks'][tracks]['artist'] + "(" + library['tracks'][tracks]['album'] + ")");
  }
}
printPlaylist("p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library['playlists'][playlistId]['tracks'].push(trackId);
}

addTrackToPlaylist("t01", "p02")
console.log(library['playlists']['p02']);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  let id = generateUid(name);
  library['tracks'][name][artist][album].push(id);
}


// adds a playlist to the library
const addPlaylist = function(name) {
  let id = generateUid(name);
  library['playlist'][name].push(id);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
