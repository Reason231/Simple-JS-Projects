const hamburger = document.getElementById("hamburger");
const hamburgerpanel = document.querySelector(".hamburgerpanel");
const artist = document.getElementById("artist");
const songName = document.getElementById("songName");
const artistCover = document.getElementById("artistCover");
const songPrev = document.getElementById("songPrev");
const songPlay = document.getElementById("songPlay");
const songNext = document.getElementById("songNext");
const audioPlayer = document.getElementById("audioPlayer");
const progress=document.getElementById("progress")

// Toggle hamburger panel visibility
hamburger.addEventListener("click", () => {
  hamburgerpanel.classList.toggle("active");
});

// Fetch artist list from songs folder
let folderList = [];
async function artistList() {
  const response = await fetch("http://127.0.0.1:5500/songs/");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const links = doc.querySelectorAll("#files a");
  const folderNames = Array.from(links).map((link) => link.getAttribute("href"));

  folderNames.forEach((folderlist) => {
    folderList.push(folderlist.replace("/songs/", "").replace("%20", "").replace("/", ""));
  });
}

// It shows the artistList in the hamburger panel
let selectedArtist;
const artistShow = async () => {
  await artistList();
  artist.innerHTML = folderList[1];
  artistCover.src = `../songs/${folderList[1]}/cover.jpg`;
  
  for (let i = 1; i < folderList.length; i++) {
    const li = document.createElement("li");
    hamburgerpanel.appendChild(li);
    li.innerHTML = `${i}. ${folderList[i]}`;
    li.addEventListener("click", () => {
      artist.innerHTML = folderList[i];
      selectedArtist = folderList[i];
      hamburgerpanel.classList.toggle("active");
      songFetching();
    });
  }
};

artistShow();


// It fetches the songList of the selected Artist
let songList = [];
const songFetching = async () => {
  songList = [];
  const response = await fetch(`http://127.0.0.1:5500/songs/${selectedArtist}/`);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const links = doc.querySelectorAll("#files a");
  const songFolders = Array.from(links).map((link) => decodeURIComponent(link.getAttribute("href")));

  songFolders.forEach((songlist) => {
    if (songlist.endsWith(".mp3.preview")) {
      // Remove ".preview" from the file name
      const cleanSong = songlist.replace(".preview", "");
      songList.push(`${cleanSong}`);

    } else if (songlist.endsWith(".mp3")) {
      songList.push(`/songs/${selectedArtist}/${songlist}`);
    }
    console.log(songList)
  });

  artistCover.src = `../songs/${selectedArtist}/cover.jpg`;
  currentSongIndex = 0; // Reset to the first song
  console.log(songList);
  loadCurrentSong();
};

// It loads the currentSong
let currentSongIndex = 0;
const loadCurrentSong = () => {
  if (songList.length > 0) {
    audioPlayer.src = songList[currentSongIndex];
    songName.innerHTML = songList[currentSongIndex].split("/").pop().replace(".mp3", "");

    // It updates the radio button value to the current song
    audioPlayer.onloadedmetadata = () => {
      progress.max = audioPlayer.duration; // Set max to the duration of the song
    };
  }
};

// It plays the song
let isPlaying = false;
const playSong = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
    songPlay.src = "../img/pause.svg"; // Change icon to pause
  } else {
    audioPlayer.pause();
    isPlaying = false;
    songPlay.src = "../img/play.svg"; // Change icon to play
  }
};


const playNextSong = () => {
// It again starts the first song, if it reaches the last song
  currentSongIndex = (currentSongIndex + 1) % songList.length;
  loadCurrentSong();
  // If the prevSong was playinng and when we click on the next, it will play the next song automatically
  if (isPlaying) audioPlayer.play();
};

const playPrevSong = () => {
  currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length; // Loop to end if start is reached
  loadCurrentSong();
  // If the nextSong was playinng and when we click on the prev, it will play the prev song automatically
  if (isPlaying) audioPlayer.play();
};

// Add event listeners for control buttons
songPlay.addEventListener("click", playSong);
songNext.addEventListener("click", playNextSong);
songPrev.addEventListener("click", playPrevSong);

audioPlayer.addEventListener("ended", playNextSong); // Auto-play next when current ends

// Update progress bar of music every second
setInterval(() => {
  if (isPlaying) {
    progress.value = audioPlayer.currentTime;
  }
}, 1000);

// Update audio current time when progress bar is dragged / moved
progress.addEventListener("input", () => {
  audioPlayer.currentTime = progress.value;
});



// Initialize first song on load
window.onload = async () => {
  await artistList()
  selectedArtist = folderList[1]; // Default artist
  artistCover.src = `../songs/${folderList[1]}/cover.jpg`;
  songFetching();
};

